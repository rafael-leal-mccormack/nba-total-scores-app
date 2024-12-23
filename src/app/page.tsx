"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import Logo from "../components/Logo";
import {
  NBAAbbreviation,
  getAverageForPoints,
  getAverageForResults,
} from "../utils/util";
import Spinner from "../components/Spinner";
import PointsOverview from "../components/main-components/points-overview";
import MatchStats from "../components/main-components/match-stats";
import TeamStats from "../components/main-components/team-stats";
import { TEAMS } from "../utils/team-data";
import {
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/autocomplete";
import { insertGameCache } from "../utils/game-cache/game-cache";

export type Stats = {
  team1: { [key: string]: string }[];
  team2: { [key: string]: string }[];
  match: { [key: string]: string }[];
  id?: string;
} | null;

export default function Home() {
  const team1Ref = useRef<HTMLInputElement>(null);
  const team2Ref = useRef<HTMLInputElement>(null);

  const [stats, setStats] = useState<Stats>(null);
  const [team1Logo, setTeam1Logo] = useState<NBAAbbreviation>(null);
  const [team2Logo, setTeam2Logo] = useState<NBAAbbreviation>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function getApis() {
    try {
      const cache = await fetch(`/api/game-cache?team1=${team1Ref.current?.value}&team2=${team2Ref.current?.value}`)
      if (cache.ok) {
        const data = await cache.json();
        setLoading(false);
        setTeam1Logo((data?.matchdata[0])["TM"]);
        setTeam2Logo((data?.matchdata[0])["OPP"]);
        setStats({
          team1: data.team1data,
          team2: data.team2data,
          match: data.matchdata
        });
        return;
      }
    } catch (err) {
      console.log(err)
    }

    const matchSpecificStats = fetch(
      `/api/match?team1=${team1Ref.current?.value}&team2=${team2Ref.current?.value}`,
      {
        // cache: "force-cache",
        next: {
          // 16 hours * 60 minutes * 60 seconds
          revalidate: 57600,
        },
      }
    );
    const team1Stats = fetch(`/api/team1?team1=${team1Ref.current?.value}`, {
      // cache: "force-cache",
      next: {
        // 16 hours * 60 minutes * 60 seconds
        revalidate: 57600,
      },
    });
    const team2Stats = fetch(`/api/team2?team2=${team2Ref.current?.value}`, {
      // cache: "force-cache",
      next: {
        // 16 hours * 60 minutes * 60 seconds
        revalidate: 57600,
      },
    });

    await Promise.all([matchSpecificStats, team1Stats, team2Stats]).then(
      async (data) => {
        await createStats(data[0], data[1], data[2]);
        setLoading(false);
      }
    );
  }

  async function createStats(
    matchStats: Response,
    team1Stats: Response,
    team2Stats: Response
  ) {
    try {
      await Promise.all([
        matchStats.json(),
        team1Stats.json(),
        team2Stats.json(),
      ]).then((data) => {
        const results: Stats = {
          team1: data[1],
          team2: data[2],
          match: data[0],
        };
        const team1avg = getAverageForResults(results.team1);
        if (results.team1.length < 6) {
          results.team1.push({
            RESULT: "",
            PTS: getAverageForPoints(results.team1).toString(),
          });
        }
        results.team1[5]["RESULT"] = team1avg.toString();

        const team2avg = getAverageForResults(results.team2);
        if (results.team2.length < 6) {
          results.team2.push({
            RESULT: "",
            PTS: getAverageForPoints(results.team2).toString(),
          });
        }
        results.team2[5]["RESULT"] = team2avg.toString();

        const matchAvg = getAverageForResults(results.match);
        if (results.match.length < 6) {
          results.match.push({ RESULT: "" });
        }
        results.match[5]["RESULT"] = matchAvg.toString();

        setLoading(false);
        setTeam1Logo((results?.match[0] as any)["TM"]);
        setTeam2Logo((results?.match[0] as any)["OPP"]);
        setStats(results);
        insertGameCache(results);
      });
    } catch (er) {
      console.warn(er);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (loading) {
      try {
        getApis();
      } catch (err) {
        console.error("Puppeteer call failed", err);
      }
    } else {
      console.log("in progress...");
    }
  }, [loading]);

  return (
    <Fragment>
      {loading ? (
        <div className="flex justify-center items-center fixed h-full w-full left-0 top-0 z-20 bg-black opacity-40">
          <Spinner></Spinner>
        </div>
      ) : (
        ""
      )}

      <div className="z-10 max-w-5xl flex-wrap w-full items-center justify-center font-mono text-sm flex gap-8">
        <div className="flex flex-col items-center sm:mr-auto">
          <div className="h-24 w-24">
            <Logo name={team1Logo}></Logo>
          </div>
          <label className="m-1">Team 1</label>
          <Autocomplete
            variant="bordered"
            ref={team1Ref}
            label="Select a team"
            className="max-w-xs"
          >
            {TEAMS.map((team) => (
              <AutocompleteItem key={team.id} textValue={team.name}>
              <div className="flex gap-2 items-center">
                <Logo size="40" name={team.code as NBAAbbreviation}></Logo>
                <div className="flex flex-col">
                  <span className="text-small">{team.name}</span>
                </div>
              </div>
            </AutocompleteItem>
            ))}
          </Autocomplete>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-24 w-24">
            <Logo name={team2Logo}></Logo>
          </div>
          <label className="m-1">Team 2</label>
          <Autocomplete
            variant="bordered"
            ref={team2Ref}
            label="Select a team"
            className="max-w-xs"
          >
            {TEAMS.map((team) => (
              <AutocompleteItem key={team.id} textValue={team.name}>
                <div className="flex gap-2 items-center">
                  <Logo size="40" name={team.code as NBAAbbreviation}></Logo>
                  <div className="flex flex-col">
                    <span className="text-small">{team.name}</span>
                  </div>
                </div>
              </AutocompleteItem>
            ))}
          </Autocomplete>
        </div>
      </div>
      <button
        onClick={async () => {
          setLoading(true);
        }}
        className="text-white mt-4 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:border-gray-700"
      >
        Compare
      </button>
      <div className="text-center">
        <p className="text-sm">
          The first two tables show the last 5 games of each team respectively,
          and the third table shows the last 5 games between Team 1 and Team 2.
        </p>
      </div>
      <div className={`w-full ${stats ? "" : "hidden"}`}>
        <PointsOverview stats={stats}></PointsOverview>
        <TeamStats stats={stats}></TeamStats>
        <MatchStats stats={stats}></MatchStats>
      </div>
    </Fragment>
  );
}
