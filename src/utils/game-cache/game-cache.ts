import { Stats } from "../../app/page";

export async function insertGameCache(gameStats: Stats) {
  const response = await fetch("/api/game-cache", {
    method: 'POST',
    body: JSON.stringify({
      team1: gameStats?.team1,
      team2: gameStats?.team2,
      match: gameStats?.match,
    }),
  });

  if (!response.ok) {
    console.log('Error trying to insert cache data')
  }
}
