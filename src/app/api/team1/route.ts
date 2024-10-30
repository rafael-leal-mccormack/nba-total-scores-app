import { NextRequest } from "next/server";
// For local usage
import puppeteer, { Browser, Page } from "puppeteer";
import { createClient } from "../../../utils/supabase/server";

// For remote usage
// import puppeteer, { Browser, Page } from "puppeteer-core";

// export const runtime = "edge"
export const maxDuration = 250;


export async function GET(req: NextRequest) {
  const { searchParams } = new URL(
    req.url as string
  );
  const url = statMuseUrl;
  const team1 = searchParams.get("team1");

  console.log("Team1: ", team1);

  if (!url) {
    return new Response(`A ?url query-parameter is required`, {
      status: 400,
    });
  }

  if (!team1) {
    return new Response(`A team1 query-parameter is required`, {
      status: 400,
    });
  }

  const supabase = createClient();
  let teamName = "";

  if (team1.split(" ").length > 1) {
    let splitName = team1.split(" ")
    teamName = splitName[splitName.length - 1].toLowerCase()
  } else {
    teamName = team1.toLowerCase();
  }
  const {data, error} = await supabase.from("nbagamecache").select("*").eq("team1", teamName);

  if (error) {
    console.log("Error with team 1 stats cache", error)
  }

  if (data && data[0]?.team1data) {
    console.log("Found team 1 data in cache")
    console.log(data[0].team1data)
    return Response.json(data[0].team1data)
  }

  // For remote usage
  let browser: Browser;
  if (process.env.DEV) {
    // For local usage
    browser = await puppeteer.launch({ headless: true });
  } else {
    browser = await puppeteer.connect({
      browserWSEndpoint: process.env.REMOTE_LOCAL_CHROME
    });
  }

  try {

    const page = await browser.newPage();
    const ua =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36";
  await page.setUserAgent(ua);
    await page.setViewport({ width: 1920, height: 1080 });
    const searchQuery = `${team1}, last 5 games`
  
    console.log("Going to " + nbaPath + searchQuery.replace(" ", "-"))

    await page.goto(statMuseUrl + nbaPath + searchQuery.replace(" ", "-"));
  
    console.log("Finding team1 specific stats...");
    const team1Stats = await findTeamStats(page, team1);
    console.log('\nFound team 1 stats!', JSON.stringify(team1Stats))

    //end browser instance
    await browser.close();
    return Response.json(team1Stats);
  } catch (err) {
    console.log(err)
    await browser.close();
    return Response.error()
  }

}

const statMuseUrl = "https://www.statmuse.com/";
const nbaPath = "nba/ask/"

async function findTeamStats(page: Page, team: string) {
  console.log("waiting for table to show");
  await page.waitForSelector("div.relative table",{
    timeout: 100000,  // 60 seconds
    visible: true  
  });

  // convert table to json data
  const data = await page.evaluate(async () => {
    const table: HTMLTableElement =
      document.querySelector("div.relative table")!;

    // logic from parseHTMLTable function
    const columns = Array.from(table.querySelectorAll("th")).map((it) => {
      if (it && it.textContent) {
        return it.textContent.trim();
      }
    });
    const rows = table.querySelectorAll("tbody > tr");
    return Array.from(rows).map((row) => {
      const cells = Array.from(row.querySelectorAll("td"));
      return columns.reduce((obj, col, idx) => {
        (obj as any)[col!] = cells[idx].textContent?.trim();
        return obj;
      }, {});
    });
  });

  return data;
}
