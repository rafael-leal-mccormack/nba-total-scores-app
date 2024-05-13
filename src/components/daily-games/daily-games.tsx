import { Match } from "../../utils/rapid-match-data";
import Card from "./card";

export default async function DailyGames() {
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
    console.log('Error while fetching daily games')
  }

  const todaysMatches = (await todayGames?.json()).response || [];
  const tomorrowsMatches = (await tomorrowGames?.json()).response || [];

  const matches: Match[] = [...todaysMatches, ...tomorrowsMatches];

  return (
    <>
      <h3 className="mt-8 mb-4 text-lg font-bold text-center">Daily games</h3>
      <div className="flex gap-8 p-6 justify-center">
        {matches.map((match) => (
          <Card
            key={match.id}
            team1={match.teams.visitors.name}
            team1Logo={match.teams.visitors.code}
            team2={match.teams.home.name}
            team2Logo={match.teams.home.code}
          ></Card>
        ))}
      </div>
    </>
  );
}
