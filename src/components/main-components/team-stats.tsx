import { PropsWithoutRef } from "react";
import { Stats } from "../../app/page";
import Table from "../table";

type Props = {
  stats: Stats;
};

export default function TeamStats(props: PropsWithoutRef<Props>) {
  return (
    <span>
      <h2 className="mt-8 mb-4 text-lg font-bold text-center">
        Team Stats History
      </h2>
      <div className="z-10 flex-wrap xl:flex-nowrap w-full items-center justify-between font-mono text-sm flex py-4 gap-6">
        <div className="overflow-scroll">
          <Table teamStats={props.stats?.team1}></Table>
        </div>
        <div className="overflow-scroll">
          <Table teamStats={props.stats?.team2}></Table>
        </div>
      </div>
    </span>
  );
}
