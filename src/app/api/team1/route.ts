import { NextRequest } from "next/server";
// For local usage
import puppeteer, { Browser, Page } from "puppeteer";

// For remote usage
// import puppeteer, { Browser, Page } from "puppeteer-core";

// export const runtime = "edge"
export const maxDuration = 30;


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

  // For remote usage
  let browser: Browser;
  if (process.env.DEV) {
    // For local usage
    browser = await puppeteer.launch({ headless: false });
  } else {
    browser = await puppeteer.connect({
      browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BLESS_TOKEN}&timeout=60000&headless=false&blockAds`,
    });
  }

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  const searchQuery = `${team1}, last 5 games`

  await page.goto(statMuseUrl + nbaPath + searchQuery.replace(" ", "-"));

  console.log("Finding team1 specific stats...");
  const team1Stats = await findTeamStats(page, team1);

  //end browser instance
  await browser.close();
  return Response.json(team1Stats);
}

const statMuseUrl = "https://www.statmuse.com/";
const nbaPath = "nba/ask/"

async function findTeamStats(page: Page, team: string) {
  console.log("waiting for table to show");
  await page.waitForSelector("div.relative table");

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
