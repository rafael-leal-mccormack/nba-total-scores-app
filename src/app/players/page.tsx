"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import Table from "../../components/table";
import { getAverageForPoints, getAverageForResults } from "../../utils/util";
import Spinner from "../../components/Spinner";

export default function PlayersPage() {
  const [loading, setLoading] = useState(false);
  const [playerStat, setStat] = useState(null);
  const playerInput = useRef<HTMLInputElement>(null);

  async function getStats() {
    try {
      const playerSpecificStats = await fetch(
        `/api/player?player=${playerInput.current?.value}`,
        {
          // cache: "force-cache",
          next: {
            // 16 hours * 60 minutes * 60 seconds
            revalidate: 57600,
          },
        }
      );
  
      const stats = await playerSpecificStats.json()
  
      setStat(stats);
        console.log(stats)
      if (stats.length < 6) {
        stats.push({ RESULT: "", PTS: getAverageForPoints(stats).toString(), "": "AVG"});
      }
    } catch {
      console.log('Error finding player stats')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (loading) {
      getStats();
    }
  }, [loading]);
  return (
    <Fragment>
      {loading ? (
        <div className="flex justify-center items-center absolute h-full w-full left-0 top-0 z-20">
          <Spinner></Spinner>
        </div>
      ) : (
        ""
      )}
      <label>Player</label>
      <input
        ref={playerInput}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></input>
      <button
        onClick={async () => {
          setLoading(true);
        }}
        className="text-white mt-4 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:border-gray-700"
      >
        Search
      </button>

      {playerStat ? (
        <div className="z-10 w-full items-center justify-between font-mono text-sm flex py-4">
          <div className="w-full flex items-center">
            <div className="w-full overflow-scroll">
              <Table teamStats={playerStat}></Table>{" "}
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}
