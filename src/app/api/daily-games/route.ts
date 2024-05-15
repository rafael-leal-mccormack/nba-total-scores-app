import { NextResponse } from "next/server";
import { getDailyMatchData, getMatchAndTeamData } from "../../../utils/match-data/match-data";
import { Stats } from "../../page";
import { createClient } from "../../../utils/supabase/server";

export async function POST(req: Request) {
  if (req.headers.get('x-api-key') !== process.env.NEXT_HEADER_KEY) {
    return NextResponse.json({}, {status: 403, statusText: 'Forbidden'})
  }

  const matches = await getDailyMatchData();

  const calls: Promise<Stats>[] = []
  matches.forEach(match => {
    calls.push(getMatchAndTeamData(match.teams.visitors.name, match.teams.home.name, match.id))
  })

  const data = await Promise.all(calls);

  const supabase = createClient();
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
    }
  }

  console.log(totalErrors === 0 ? 'Insert successful!' : 'There were some issues inserting daily games')
  return NextResponse.json({}, {
    status: 200, statusText: 'Successful'
  })
}