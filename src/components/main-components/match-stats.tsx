import { PropsWithoutRef } from "react";
import { Stats } from "../../app/page";
import Table from "../table";

type Props = {
  stats: Stats;
};

export default function MatchStats(props: PropsWithoutRef<Props>) {
  return (
    <span>
      <h2 className="mt-8 mb-4 text-lg font-bold text-center">
        Match Stats History
      </h2>
      <div className="z-10 w-full items-center justify-between font-mono text-sm flex py-4">
        <div className="w-full flex items-center">
          <div className="w-full overflow-scroll">
            <Table teamStats={props.stats?.match}></Table>
          </div>
        </div>
      </div>
    </span>
  );
}
