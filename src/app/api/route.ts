import { NextRequest } from "next/server";
// For local usage
import puppeteer, { Browser, Page } from "puppeteer";

// For remote usage
// import puppeteer, { Browser, Page } from "puppeteer-core";

// export const runtime = "edge"
export const maxDuration = 10;


export async function GET(req: NextRequest) {
  const { searchParams } = new URL(
    req.url as string
  );
  const url = statMuseUrl;
  const team1 = searchParams.get("team1");
  const team2 = searchParams.get("team2");

  console.log(team1, team2);
  console.log("Team1: ", team1);
  console.log("Team2: ", team2);

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
  await page.exposeFunction("parseHTMLTable", parseHTMLTable);
  await page.goto(statMuseUrl);

  console.log("Finding team specific stats...");
  const team1Stats = await findTeamStats(page, team1);
  const team2Stats = await findTeamStats(page, team2);
  const matchSpecificStats = await findMatchSpecificStats(page, team1, team2);

  const data = {
    team1: team1Stats,
    team2: team2Stats,
    match: matchSpecificStats,
  };

  //end browser instance
  browser.close();
  return Response.json(data);
}

const statMuseUrl = "https://www.statmuse.com/";
const topSearchBar = '[name="question[query]"]';

async function findTeamStats(page: Page, team: string) {
  console.log("Searching for last 5 games");
  // look for last 5 games of a team
  await page.waitForSelector(topSearchBar);

  await page.evaluate(() => {
    const input: HTMLInputElement = document.querySelector(
      '[name="question[query]"]'
    )!;
    input.value = "";
  });

  console.log("clicking and typing in top bar");
  await page.click(topSearchBar);
  await page.keyboard.type(`${team} last 5 games`);
  console.log("navigating to results");
  await Promise.all([
    page.click('input[aria-label="Search"]'),
    page.waitForNavigation(),
  ]);

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

async function findMatchSpecificStats(
  page: Page,
  team1: string,
  team2: string
) {
  console.log("Searching for last 5 games");
  // look for last 5 games of a team
  await page.waitForSelector(topSearchBar);

  await page.evaluate(() => {
    const input: HTMLInputElement = document.querySelector(
      '[name="question[query]"]'
    )!;
    input.value = "";
  });

  console.log("clicking and typing in top bar");
  await page.click(topSearchBar);
  await page.keyboard.type(`${team1} vs ${team2} last 5 games`);
  console.log("navigating to results");
  await Promise.all([
    page.click('input[aria-label="Search"]'),
    page.waitForNavigation(),
  ]);

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

// Parse HTML table element to JSON array of objects
const parseHTMLTable = (tableEl: HTMLTableElement) => {
  const columns = Array.from(tableEl.querySelectorAll("th")).map((it) => {
    if (it && it.textContent) {
      return it.textContent;
    }
  });
  const rows = tableEl.querySelectorAll("tbody > tr");
  return Array.from(rows).map((row) => {
    const cells = Array.from(row.querySelectorAll("td"));
    return columns.reduce((obj, col, idx) => {
      (obj as any)[col!] = cells[idx].textContent;
      return obj;
    }, {});
  });
};
