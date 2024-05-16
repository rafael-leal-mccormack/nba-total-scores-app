import MatchStats from "../../components/main-components/match-stats";
import PointsOverview from "../../components/main-components/points-overview";
import TeamStats from "../../components/main-components/team-stats";
import { createClient } from "../../utils/supabase/server";
import { Stats } from "../page";

interface Props {
  searchParams: {
    id: string;
  };
}

interface DailyNbaGames {
  id: number;
  created_at: string;
  team1: string;
  team2: string;
  team1data: any[];
  team2data: any[];
  matchdata: any[];
}

export default async function MatchPage({ searchParams }: Props) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("dailynbagames")
    .select("*")
    .eq("id", searchParams.id);

  let dailyGame: DailyNbaGames | null = null;

  if (!error) {
    dailyGame = data[0];
  }

  return (
      <div
        className={`w-full ${
          convertDailyGameToStats(dailyGame) ? "" : "hidden"
        }`}
      >
        <PointsOverview
          stats={convertDailyGameToStats(dailyGame)}
        ></PointsOverview>
        <TeamStats stats={convertDailyGameToStats(dailyGame)}></TeamStats>
        <MatchStats stats={convertDailyGameToStats(dailyGame)}></MatchStats>
      </div>
  );
}

function convertDailyGameToStats(dailyGames: DailyNbaGames | null): Stats {
  if (!dailyGames) {
    return {
      team1: [],
      team2: [],
      match: []
    }
  }

  return {
    team1: dailyGames.team1data,
    team2: dailyGames.team2data,
    match: dailyGames.matchdata,
  };
}
