import { getDailyMatchData } from "../../utils/match-data/match-data";
import Card from "./card";

export default async function DailyGames() {
  const matches = await getDailyMatchData();

  return (
    <>
      <h3 className="mt-8 mb-4 text-lg font-bold text-center">Daily games</h3>
      <div className="flex flex-wrap gap-8 p-6 justify-center">
        {matches.map((match) => (
          <Card
            key={match.id}
            matchId={match.id}
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
