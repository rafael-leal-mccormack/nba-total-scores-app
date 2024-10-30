import { NextRequest, NextResponse } from "next/server";
import { getDailyMatchData, getDailyMatchDataRapid, getMatchAndTeamData } from "../../../utils/match-data/match-data";
import { Stats } from "../../page";
import { createClient } from "../../../utils/supabase/server";
import deleteSupabaseDailyGameEntries from "../../../utils/deleteDailyGameEntries";

// Configuration
const BATCH_SIZE = 5;
const BATCH_DELAY = 2000; // 2 seconds between batches

export const dynamic = 'force-dynamic';
export const maxDuration = 250;

class JobLogger {
  private start: number;
  constructor() {
    this.start = Date.now();
  }

  log(message: string, error?: any) {
    const timestamp = new Date().toISOString();
    const elapsed = Date.now() - this.start;
    if (error) {
      console.error(`[${timestamp}] [${elapsed}ms] ERROR: ${message}`, error);
    } else {
      console.log(`[${timestamp}] [${elapsed}ms] ${message}`);
    }
  }
}

async function updateCache(
  stat: Stats,
  supabase: any,
  logger: JobLogger
): Promise<void> {
  try {
    if (!stat?.team1?.[0]?.["TEAM"] || !stat?.team2?.[0]?.["TEAM"]) {
      logger.log("Invalid stat data for cache update");
      return;
    }

    const gameId = stat.team1[0]["TEAM"]
      .toLowerCase()
      .split("")
      .concat(stat.team2[0]["TEAM"].toLowerCase().split(""))
      .sort()
      .join("");

    const { error } = await supabase
      .from("nbagamecache")
      .upsert(
        {
          team1data: stat.team1,
          team2data: stat.team2,
          matchdata: stat.match,
          game_id: gameId,
          team1: stat.team1[0]["TEAM"].toLowerCase(),
          team2: stat.team2[0]["TEAM"].toLowerCase(),
          created_at: new Date().toISOString()
        },
        { 
          onConflict: 'game_id',
          ignoreDuplicates: false
        }
      );

    if (error) {
      logger.log(`Cache update error for game: ${gameId}`, error);
    } else {
      logger.log(`Cache updated for game: ${gameId}`);
    }
  } catch (error) {
    logger.log("Failed to update cache", error);
  }
}

async function processMatch(
  match: any,
  supabase: any,
  logger: JobLogger
): Promise<boolean> {
  try {
    if (!match?.teams?.visitors?.name || !match?.teams?.home?.name) {
      logger.log(`Invalid match data: ${JSON.stringify(match)}`);
      return false;
    }

    const stat = await getMatchAndTeamData(
      match.teams.visitors.name,
      match.teams.home.name,
      match.id
    );

    if (!stat) {
      logger.log(`No stats returned for match ${match.id}`);
      return false;
    }

    await updateCache(stat, supabase, logger);

    const { error: insertError } = await supabase
      .from('dailynbagames')
      .upsert({
        id: stat.id,
        team1: stat.team1[0]["TEAM"],
        team1data: stat.team1,
        team2: stat.team2[0]["TEAM"],
        team2data: stat.team2,
        matchdata: stat.match
      }, { 
        onConflict: 'id',
        ignoreDuplicates: false 
      });

    if (insertError) {
      logger.log(`Error inserting match ${match.id}`, insertError);
      return false;
    } else {
      logger.log(`Successfully processed: ${stat.team1[0]["TEAM"]} vs ${stat.team2[0]["TEAM"]}`);
      return true;
    }
  } catch (error) {
    logger.log(`Error processing match ${match?.id}`, error);
    return false;
  }
}

async function processBatch(
  matches: any[],
  supabase: any,
  logger: JobLogger
): Promise<number> {
  let successfulProcessed = 0;

  for (const match of matches) {
    if (await processMatch(match, supabase, logger)) {
      successfulProcessed++;
    }
  }

  return successfulProcessed;
}

export async function GET(req: NextRequest) {
  const logger = new JobLogger();
  const supabase = createClient();
  
  try {
    logger.log('Starting daily games update');
    
    const matches = await getDailyMatchDataRapid();
    
    if (!matches || matches.length === 0) {
      logger.log('No matches to process');
      return NextResponse.json({ message: 'No matches to process' }, { status: 200 });
    }

    logger.log(`Found ${matches.length} matches to process`);

    let totalProcessed = 0;
    const totalBatches = Math.ceil(matches.length / BATCH_SIZE);

    // Process in batches
    for (let i = 0; i < matches.length; i += BATCH_SIZE) {
      const batchNumber = Math.floor(i / BATCH_SIZE) + 1;
      const batch = matches.slice(i, i + BATCH_SIZE);
      
      logger.log(`Processing batch ${batchNumber}/${totalBatches} (${batch.length} matches)`);
      
      const processedInBatch = await processBatch(batch, supabase, logger);
      totalProcessed += processedInBatch;

      // Add delay between batches if not the last batch
      if (i + BATCH_SIZE < matches.length) {
        logger.log(`Batch ${batchNumber} complete. Waiting ${BATCH_DELAY}ms before next batch...`);
        await new Promise(resolve => setTimeout(resolve, BATCH_DELAY));
      }
    }

    // Only delete old entries after processing
    logger.log('Cleaning up old daily game entries');
    await deleteSupabaseDailyGameEntries(supabase);

    const status = totalProcessed === matches.length ? 'SUCCESS' : 'COMPLETED_WITH_ERRORS';
    logger.log(`Daily games update completed - Status: ${status}, Processed: ${totalProcessed}/${matches.length}`);
    
    return NextResponse.json({
      status,
      totalMatches: matches.length,
      successfullyProcessed: totalProcessed,
      failedToProcess: matches.length - totalProcessed,
      timestamp: new Date().toISOString()
    }, { 
      status: totalProcessed === matches.length ? 200 : 207 
    });

  } catch (error) {
    logger.log('Critical error in cron job', error);
    
    return NextResponse.json({
      error: 'Failed to process daily games',
      timestamp: new Date().toISOString()
    }, {
      status: 500
    });
  }
}