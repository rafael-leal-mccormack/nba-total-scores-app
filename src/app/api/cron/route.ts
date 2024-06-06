import { NextRequest, NextResponse } from "next/server";
import { getDailyMatchData, getMatchAndTeamData } from "../../../utils/match-data/match-data";
import { Stats } from "../../page";
import { createClient } from "../../../utils/supabase/server";
import deleteSupabaseDailyGameEntries from "../../../utils/deleteDailyGameEntries";
export const dynamic = 'force-dynamic'; 
export const maxDuration = 45;

export async function GET() {
  console.log('Getting daily games')
  const matches = await getDailyMatchData();
  console.log('Receieved from RAPID API!')
  console.log(matches)

  const calls: Promise<Stats>[] = []
  matches?.forEach(match => {
    calls.push(getMatchAndTeamData(match.team1, match.team2, match.id))
  })

  console.log('Processing match data for daily games')
  const data = await Promise.all(calls);

  const supabase = createClient();

  await deleteSupabaseDailyGameEntries(supabase);

  let totalErrors = 0;
  for (const stat of data) {
    const {error} = await supabase.from('dailynbagames').insert({
      id: stat?.id,
      team1: stat?.team1[0]["TEAM"],
      team1data: stat?.team1,
      team2: stat?.team2[0]["TEAM"],
      team2data: stat?.team2,
      matchdata: stat?.match
    })

    if (error) {
      console.log(error)
      totalErrors++;
    } else {
      console.log('Inserting: ', stat?.id, stat?.team1[0]["TEAM"], stat?.team2[0]["TEAM"])
    }
  }

  console.log(totalErrors === 0 ? 'Insert successful!' : 'There were some issues inserting daily games')
  return NextResponse.json({}, {
    status: 200, statusText: 'Successful'
  });
}
