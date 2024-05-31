import { Stats } from "../../app/page";
import { Match } from "../rapid-match-data";
import { createClient } from "../supabase/server";
import { getAverageForPoints, getAverageForResults } from "../util";

export async function getDailyMatchData() {
 const supabase = createClient();

 console.log("Getting daily games")
 const {data, error} = await supabase.from("dailynbagames").select("*");

 if (error) {
  console.log("error getting daily games", error)
 }

 console.log("Daily games found!")

 return data;
}

export async function getDailyMatchDataRapid() {
  console.log('Getting daily match data');
  const date = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(date.getDate() + 1);
  let todayGames;
  let tomorrowGames;
  try {
    todayGames = await fetch(
      `https://${process.env.NBA_API}/games?date=${
        date.toISOString().split("T")[0]
      }`,
      {
        headers: {
          "x-rapidapi-key": process.env.RAPID_API_TOKEN!,
          "x-rapidapi-host": process.env.NBA_API!,
        },
      }
    );

    tomorrowGames = await fetch(
      `https://${process.env.NBA_API}/games?date=${
        tomorrow.toISOString().split("T")[0]
      }`,
      {
        headers: {
          "x-rapidapi-key": process.env.RAPID_API_TOKEN!,
          "x-rapidapi-host": process.env.NBA_API!,
        },
      }
    );
  } catch {
    console.log("Error while fetching daily games");
  }

  const todaysMatches = (await todayGames?.json())?.response || [];
  console.log('Todays matches', JSON.stringify(todaysMatches));
  const tomorrowsMatches = (await tomorrowGames?.json())?.response || [];
  console.log('Tomorrows matches', JSON.stringify(tomorrowsMatches));


  const matches: Match[] = [...todaysMatches, ...tomorrowsMatches];

  return matches;
}

export async function getMatchAndTeamData(
  team1: string,
  team2: string,
  matchId: string
) {
  const matchSpecificStats = fetch(`${process.env.URL}/api/match?team1=${team1}&team2=${team2}`);
  const team1Stats = fetch(`${process.env.URL}/api/team1?team1=${team1}`);
  const team2Stats = fetch(`${process.env.URL}/api/team2?team2=${team2}`);

  const [matchData, team1Data, team2Data] = await Promise.all([
    matchSpecificStats,
    team1Stats,
    team2Stats,
  ]);

  return await createStats(matchData, team1Data, team2Data, matchId);
}

async function createStats(
  matchStats: Response,
  team1Stats: Response,
  team2Stats: Response,
  matchId: string
) {
  let results: Stats | null = null;
  try {
    const [match, team1, team2] = await Promise.all([
      matchStats.json(),
      team1Stats.json(),
      team2Stats.json(),
    ]);
    results = {
      team1: team1,
      team2: team2,
      match: match,
      id: matchId,
    };
    const team1avg = getAverageForResults(results.team1);
    if (results.team1.length < 6) {
      results.team1.push({
        RESULT: "",
        PTS: getAverageForPoints(results.team1).toString(),
      });
    }
    results.team1[5]["RESULT"] = team1avg.toString();

    const team2avg = getAverageForResults(results.team2);
    if (results.team2.length < 6) {
      results.team2.push({
        RESULT: "",
        PTS: getAverageForPoints(results.team2).toString(),
      });
    }
    results.team2[5]["RESULT"] = team2avg.toString();

    const matchAvg = getAverageForResults(results.match);
    if (results.match.length < 6) {
      results.match.push({ RESULT: "" });
    }
    results.match[5]["RESULT"] = matchAvg.toString();
  } catch (er) {
    console.warn(er);
  }

  return results;
}
