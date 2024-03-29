export type LogoProps = {
  size?: string
}

export const NBA_API = 'https://api-nba-v1.p.rapidapi.com/teams';
export const RAPID_API_HOST = 'api-nba-v1.p.rapidapi.com'
export type NBAAbbreviation =
  | 'ATL'
  | 'BOS'
  | 'BKN'
  | 'CHA'
  | 'CHI'
  | 'CLE'
  | 'DAL'
  | 'DEN'
  | 'DET'
  | 'GSW'
  | 'HOU'
  | 'IND'
  | 'LAC'
  | 'LAL'
  | 'MEM'
  | 'MIA'
  | 'MIL'
  | 'MIN'
  | 'NOP'
  | 'NYK'
  | 'OKC'
  | 'ORL'
  | 'PHI'
  | 'PHX'
  | 'POR'
  | 'SAC'
  | 'SAS'
  | 'TOR'
  | 'UTA'
  | 'WAS'
  | null;

  function parseResultStringToNum(res: string) {
    const splitStr = res.replace('L', '').replace('W', '').trim().split('-');
    const team1Score = Number.parseInt(splitStr[0])
    const team2Score = Number.parseInt(splitStr[1])
  
    return team1Score + team2Score
  }
  
  export function getAverageForResults(teamScores: any[]) {
    // first 5 are the games
    let total = 0
    for(let i = 0; i < 5; i++) {
      total += parseResultStringToNum(teamScores[i]['RESULT'])
    }
  
    return total / 5
  }

  export function getAverageForPoints(teamScores: any[]) {
    // first 5 are the games
    let total = 0
    for(let i = 0; i < 5; i++) {
      total += Number.parseInt(teamScores[i]['PTS'])
    }
  
    return total / 5
  }