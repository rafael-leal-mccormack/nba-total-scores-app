import { PropsWithChildren } from "react";

type Props = {
  teamStats: Object[] | undefined;
};

export default function Table(props: PropsWithChildren<Props>) {
  if (!props?.teamStats) {
    return "";
  }

  const headings = Object.keys(props.teamStats[0]);

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {headings.map((heading, index) => {
            return (
              <th
                className={`px-6 py-3 font ${index === 0 ? "font-bold" : ""}`}
                key={heading}
                scope="col"
              >
                {heading}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.teamStats.map((teamStat, statIndex) => {
          return (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={JSON.stringify(teamStat)}
            >
              {headings.map((heading, index) => {
                let resultsAvg = ''
                if (heading === 'RESULT' && statIndex === 5) {
                  console.log(props.teamStats)
                  resultsAvg += getAverageForResults(props.teamStats!)
                }
                return (
                  <td
                    className={`px-6 py-3 font text-gre ${
                      index === 0 ? "font-bold text-gray-300" : ""
                    } ${
                      heading === "RESULT" &&
                      (teamStat as any)[heading].includes("W")
                        ? "text-green-400"
                        : ""
                    }`}
                    key={JSON.stringify(teamStat) + heading}
                  >
                    {(teamStat as any)[heading]}
                    {resultsAvg}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}


function parseResultStringToNum(res: string) {
  const splitStr = res.replace('L', '').replace('W', '').trim().split('-');
  const team1Score = Number.parseInt(splitStr[0])
  const team2Score = Number.parseInt(splitStr[1])

  return team1Score + team2Score
}

function getAverageForResults(teamScores: any[]) {
  // first 5 are the games
  let total = 0
  for(let i = 0; i < 5; i++) {
    total += parseResultStringToNum(teamScores[i]['RESULT'])
  }

  return total / 5
}