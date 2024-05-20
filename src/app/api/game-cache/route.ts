import { NextRequest, NextResponse } from "next/server";
import { createClient } from "../../../utils/supabase/server";
import { Stats } from "../../page";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url as string);
  const team1 = searchParams.get("team1");
  const team2 = searchParams.get("team2");

  if (!team1) {
    return new Response(`A team1 query-parameter is required`, {
      status: 400,
    });
  }

  if (!team2) {
    return new Response(`A team2 query-parameter is required`, {
      status: 400,
    });
  }

  const supabase = createClient();
  const gameId = team1
    .toLowerCase()
    .split("")
    .concat(team2.toLowerCase().split(""));

  console.log("Checking DB for cached game", gameId);

  const { data, error } = await supabase
    .from("nbagamecache")
    .select("*")
    .eq("game_id", gameId.sort().join(""))
    .single();

  if (error) {
    return NextResponse.json({}, { status: 400, statusText: "Not found" });
  }
  console.log("Game found!");
  const today = new Date();

  // Convert ISO strings to Date objects
  const date1 = new Date(data.created_at);
  const date2 = new Date(today.toISOString());

  // Get the time in milliseconds since the Unix epoch
  const time1 = date1.getTime();
  const time2 = date2.getTime();

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = time2 - time1;
  // Convert the difference to desired units
  const differenceInSeconds = differenceInMilliseconds / 1000;
  const differenceInMinutes = differenceInSeconds / 60;
  const differenceInHours = differenceInMinutes / 60;
  const differenceInDays = differenceInHours / 24;

  if (differenceInDays > 1) {
    console.log("Deleting entry from db");
    await supabase
      .from("nbagamecache")
      .delete()
      .eq("game_id", gameId.sort().join(""));
    return NextResponse.json({}, { status: 400, statusText: "Data old" });
  }

  if (data) {
    return NextResponse.json(data);
  }
}

export async function POST(req: Request) {
  const data: Stats = await req.json();

  console.log("MatchTeam1: ", data?.team1);
  console.log("MatchTeam2: ", data?.team2);

  if (!data?.team1) {
    return new Response(`A team1 data is required`, {
      status: 400,
    });
  }

  if (!data?.team2) {
    return new Response(`A team2 data is required`, {
      status: 400,
    });
  }

  const supabase = createClient();
  const gameId = data.team1[0]["TEAM"]
    .toLowerCase()
    .split("")
    .concat(data.team2[0]["TEAM"].toLowerCase().split(""));
  const { error } = await supabase.from("nbagamecache").upsert({
    team1data: data.team1,
    team2data: data.team2,
    matchdata: data.match,
    game_id: gameId.sort().join(""),
  });

  if (error) {
    console.log(error);
    return NextResponse.json(
      {},
      {
        status: 400,
        statusText: error.message,
      }
    );
  }

  return NextResponse.json(
    {},
    {
      status: 200,
      statusText: "Inserted to cache",
    }
  );
}
