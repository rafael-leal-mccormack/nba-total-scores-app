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

  // Add these helper functions
function isToday(date: Date): boolean {
  const today = new Date();
  return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
}

function isYesterday(date: Date): boolean {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear();
}

class Logger {
  private prefix: string;
  
  constructor(prefix: string = '') {
    this.prefix = prefix;
  }

  log(message: string, data?: any) {
    const timestamp = new Date().toISOString();
    if (data) {
      console.log(`[${timestamp}] ${this.prefix}${message}`, data);
    } else {
      console.log(`[${timestamp}] ${this.prefix}${message}`);
    }
  }

  error(message: string, error: any) {
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] ${this.prefix}ERROR: ${message}`, error);
  }
}
async function checkCacheExpiry(
  createdAt: string,
  logger: Logger
): Promise<boolean> {
  const created = new Date(createdAt);

  // If the cache was created today, it's valid
  if (isToday(created)) {
    logger.log('Cache from today, still valid');
    return false;
  }

  // If it's early morning (before 10 AM) and the cache is from yesterday, it's still valid
  const currentHour = new Date().getHours();
  if (currentHour < 10 && isYesterday(created)) {
    logger.log('Cache from yesterday, still valid due to early morning');
    return false;
  }

  // Cache is too old
  logger.log('Cache expired');
  return true;
}