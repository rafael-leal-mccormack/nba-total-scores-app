import { getDailyMatchData } from "../../utils/match-data/match-data";
import Card from "./card";

export default async function DailyGames() {
  const matches = await getDailyMatchData();

  return (
    <>
      <h3 className="mt-8 mb-4 text-lg font-bold text-center">Daily games</h3>
      <div className="flex flex-wrap gap-8 p-6 justify-center">
        {matches?.map((match) => (
          <Card
            key={match.id}
            matchId={match.id}
            team1={match.team1}
            team1Logo={match.team1data[0]["TM"]}
            team2={match.team2}
            team2Logo={match.team2data[0]["TM"]}
          ></Card>
        ))}
      </div>
    </>
  );
}
