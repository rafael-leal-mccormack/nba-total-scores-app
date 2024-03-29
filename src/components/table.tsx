import { PropsWithChildren } from "react";
import { getAverageForResults } from "../utils/util";

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
                  resultsAvg += getAverageForResults(props.teamStats!)
                }
                return (
                  <td
                    className={`px-6 py-3 ${
                      index === 0 ? "font-extrabold" : ""
                    } ${
                      heading === "RESULT" &&
                      (teamStat as any)[heading].includes("W")
                        ? "text-green-400"
                        : ""
                    }`}
                    key={JSON.stringify(teamStat) + heading}
                  >
                    {(teamStat as any)[heading]}
                    {/* {resultsAvg} */}
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


