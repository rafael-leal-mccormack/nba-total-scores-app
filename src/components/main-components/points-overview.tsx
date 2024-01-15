import { ComponentPropsWithoutRef, PropsWithoutRef } from "react";
import { Stats } from "../../app/page";

interface Props {
  stats?: Stats;
}

export default function PointsOverview(props: PropsWithoutRef<Props>) {
  return (
    <span>
      <h2 className="mt-8 mb-4 text-lg font-bold text-center">
        Total Points Overview
      </h2>
      <div className="flex justify-between w-full">
        <div className="flex flex-col w-full text-center">
          <h3 className="underline">Team 1 Average</h3>
          <span className="font-light text-xs no-underline">
            (Last 5 games)
          </span>
          <div className="text-5xl">
            {props.stats?.team1[5] ? props.stats.team1[5]["PTS"] : ""}
          </div>
        </div>
        <div className="flex flex-col w-full text-center">
          <h3 className="underline">Team 2 Average</h3>
          <span className="font-light text-xs no-underline">
            (Last 5 games)
          </span>
          <div className="text-5xl">
            {props.stats?.team2[5] ? props.stats.team2[5]["PTS"] : ""}
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center mt-4 md:mt-10">
        <h3 className="underline">Match Average</h3>
        <span className="font-light text-xs no-underline">(Last 5 games)</span>
        <div className="text-5xl">
          {props.stats?.match[5] ? props.stats.match[5]["RESULT"] : ""}
        </div>
      </div>
    </span>
  );
}
