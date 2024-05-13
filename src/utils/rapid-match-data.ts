import { NBAAbbreviation } from "./util";

export interface Match {
  id: string;
  league: string;
  season: number;
  date: Object;
  stage: number;
  status: Object;
  periods: Object;
  arena: Object;
  teams: {
    visitors: TeamMatchData,
    home: TeamMatchData
  };
  scores: Object;
  officials: [];
  timesTied: number;
  leadChanges: number;
}

interface TeamMatchData {
  id: number;
  name: string;
  nickname: string;
  code: NBAAbbreviation;
  logo: string;
}