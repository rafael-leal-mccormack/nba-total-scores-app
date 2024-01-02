"use client";
import { useRef, useState } from "react";
import Table from "../components/table";
import TOR from "../components/logos/tor";
import ATL from "../components/logos/atl";
import Logo from "../components/Logo";
import { NBAAbbreviation } from "../utils/util";
import Spinner from "../components/Spinner";

type Stats = {
  team1: Object[];
  team2: Object[];
  match: Object[];
} | null;
export default function Home() {
  const team1Ref = useRef<HTMLInputElement>(null);
  const team2Ref = useRef<HTMLInputElement>(null);

  const [stats, setStats] = useState<Stats>(null);
  const [team1Logo, setTeam1Logo] = useState<NBAAbbreviation>(null);
  const [team2Logo, setTeam2Logo] = useState<NBAAbbreviation>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      {loading ? (
        <div className="flex justify-center items-center absolute h-full w-full left-0 top-0 z-20">
          <Spinner></Spinner>
        </div>
      ) : (
        ""
      )}

      <div className="z-10 max-w-5xl flex-wrap w-full items-center justify-center font-mono text-sm flex">
        <div className="flex flex-col items-center sm:mr-auto">
          <div className="h-24 w-24">
            <Logo name={team1Logo}></Logo>
          </div>
          <label className="m-1">Team 1</label>
          <input
            ref={team1Ref}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-24 w-24">
            <Logo name={team2Logo}></Logo>
          </div>
          <label className="m-1">Team 2</label>
          <input
            ref={team2Ref}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
      </div>
      <button
        onClick={async () => {
          setLoading(true);
          const res = await fetch(
            `/api?team1=${team1Ref.current?.value}&team2=${team2Ref.current?.value}`
          );
          const results: Stats = await res.json();
          setLoading(false);
          setTeam1Logo((results?.match[0] as any)["TM"]);
          setTeam2Logo((results?.match[0] as any)["OPP"]);
          setStats(results);
        }}
        className="text-white pt-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:border-gray-700"
      >
        Compare
      </button>
      <h2 className="mt-4">Team history stats</h2>
      <div className="z-10 flex-wrap w-full items-center justify-between font-mono text-sm flex py-4 gap-6">
        <div className="overflow-scroll">
          <Table teamStats={stats?.team1}></Table>
        </div>
        <div className="overflow-scroll">
          <Table teamStats={stats?.team2}></Table>
        </div>
      </div>

      <h2>Match stats</h2>
      <div className="z-10 w-full items-center justify-between font-mono text-sm flex py-4">
        <div className="w-full flex items-center">
          <div className="w-full overflow-scroll">
            <Table teamStats={stats?.match}></Table>
          </div>
        </div>
      </div>
    </main>
  );
}
