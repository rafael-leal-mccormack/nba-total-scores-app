import { NextRequest, NextResponse } from "next/server";
import { createClient } from "../../../utils/supabase/server";
import { Stats } from "../../page";

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

class Logger {
  private prefix: string;
  
  constructor(prefix: string = '') {
    this.prefix = prefix;
  }

  log(message: string, data?: any) {
    const timestamp = new Date().toISOString();
    if (data) {
      console.log(`[${timestamp}] ${this.prefix}${message}`, data);
    } else {
      console.log(`[${timestamp}] ${this.prefix}${message}`);
    }
  }

  error(message: string, error: any) {
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] ${this.prefix}ERROR: ${message}`, error);
  }
}

function normalizeTeamName(teamName: string): string {
  return teamName.split(" ")
    .pop()?.toLowerCase() || teamName.toLowerCase();
}

function generateGameId(team1: string, team2: string): string {
  return team1
    .toLowerCase()
    .split("")
    .concat(team2.toLowerCase().split(""))
    .sort()
    .join("");
}

interface CacheResponse {
  data: any;
  status: number;
  message: string;
}

async function checkCacheExpiry(
  createdAt: string,
  logger: Logger
): Promise<boolean> {
  const created = new Date(createdAt).getTime();
  const now = Date.now();
  const age = now - created;

  logger.log(`Cache age: ${(age / (1000 * 60 * 60)).toFixed(2)} hours`);
  return age > CACHE_DURATION;
}

async function getGameFromCache(
  gameId: string,
  supabase: any,
  logger: Logger
): Promise<CacheResponse> {
  try {
    const { data, error } = await supabase
      .from("nbagamecache")
      .select("*")
      .eq("game_id", gameId)
      .single();

    if (error) {
      logger.error("Cache query error", error);
      return {
        data: null,
        status: 404,
        message: "Game not found in cache"
      };
    }

    // Check cache expiry
    if (await checkCacheExpiry(data.created_at, logger)) {
      logger.log("Cache expired, cleaning up");
      await supabase
        .from("nbagamecache")
        .delete()
        .eq("game_id", gameId);
      
      return {
        data: null,
        status: 404,
        message: "Cache expired"
      };
    }

    return {
      data,
      status: 200,
      message: "Cache hit"
    };
  } catch (error) {
    logger.error("Cache check failed", error);
    return {
      data: null,
      status: 500,
      message: "Cache check failed"
    };
  }
}

export async function GET(req: NextRequest) {
  const logger = new Logger('[GameCache] ');
  const supabase = createClient();

  try {
    const { searchParams } = new URL(req.url);
    const team1 = searchParams.get("team1");
    const team2 = searchParams.get("team2");

    if (!team1 || !team2) {
      return NextResponse.json(
        { error: "Both team1 and team2 parameters are required" },
        { status: 400 }
      );
    }

    const team1Name = normalizeTeamName(team1);
    const team2Name = normalizeTeamName(team2);
    const gameId = generateGameId(team1Name, team2Name);

    logger.log(`Checking cache for game: ${team1} vs ${team2}`);

    const { data, status, message } = await getGameFromCache(gameId, supabase, logger);

    if (!data) {
      return NextResponse.json(
        { message },
        { status, statusText: message }
      );
    }

    logger.log("Cache hit, returning data");
    return NextResponse.json(data);

  } catch (error) {
    logger.error("Request failed", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const logger = new Logger('[GameCache] ');
  const supabase = createClient();

  try {
    const data: Stats = await req.json();

    // Validate input
    if (!data?.team1?.[0]?.["TEAM"] || !data?.team2?.[0]?.["TEAM"]) {
      return NextResponse.json(
        { error: "Invalid team data format" },
        { status: 400 }
      );
    }

    const team1 = data.team1[0]["TEAM"].toLowerCase();
    const team2 = data.team2[0]["TEAM"].toLowerCase();
    const gameId = generateGameId(team1, team2);

    logger.log(`Caching game data: ${team1} vs ${team2}`);

    const { error } = await supabase
      .from("nbagamecache")
      .upsert({
        team1data: data.team1,
        team2data: data.team2,
        matchdata: data.match,
        game_id: gameId,
        team1,
        team2,
        created_at: new Date().toISOString()
      }, {
        onConflict: 'game_id',
        ignoreDuplicates: false
      });

    if (error) {
      logger.error("Cache update failed", error);
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    logger.log("Successfully cached game data");
    return NextResponse.json(
      { message: "Game data cached successfully" },
      { status: 200 }
    );

  } catch (error) {
    logger.error("Failed to process cache request", error);
    return NextResponse.json(
      { error: "Failed to cache game data" },
      { status: 500 }
    );
  }
}