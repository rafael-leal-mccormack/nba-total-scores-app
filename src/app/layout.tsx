import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavBar from "../components/main-components/navbar";
import BeerButton from "../components/main-components/beer-button";
import { createBrowserClient } from "@supabase/ssr";
import Card from "../components/daily-games/card";
import { Match } from "../utils/rapid-match-data";
import DailyGames from "../components/daily-games/daily-games";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NBA Quick Stats",
  description: "Application to quickly get stats for a match",
};

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        <div className="text-center mt-4">
          <p className="text-sm">
            This website displays the recent performance of NBA teams in their
            last 5 games against one another.
          </p>
        </div>
        <DailyGames></DailyGames>
        <main className="flex min-h-screen flex-col items-center p-4 lg:p-12">
        <BeerButton></BeerButton>
          {children}
        </main>
        <Analytics></Analytics>
        <SpeedInsights></SpeedInsights>
      </body>
    </html>
  );
}
