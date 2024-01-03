import { NextRequest } from "next/server";
// For local usage
import puppeteer, { Browser, Page } from "puppeteer";

// For remote usage
// import puppeteer, { Browser, Page } from "puppeteer-core";

// export const runtime = "edge"
export const maxDuration = 60;


export async function GET(req: NextRequest) {
  const { searchParams } = new URL(
    req.url as string
  );
  const url = statMuseUrl;
  const team2 = searchParams.get("team2");

  console.log("Team2: ", team2);

  if (!url) {
    return new Response(`A ?url query-parameter is required`, {
      status: 400,
    });
  }

  if (!team2) {
    return new Response(`A team2 query-parameter is required`, {
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
  const searchQuery = `${team2} last 5 games`

  await page.goto(statMuseUrl + nbaPath + searchQuery.replace(" ", "-"));

  console.log("Finding team2 specific stats...");
  const team2Stats = await findTeamStats(page, team2);

  //end browser instance
  await browser.close();
  return Response.json(team2Stats);
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

