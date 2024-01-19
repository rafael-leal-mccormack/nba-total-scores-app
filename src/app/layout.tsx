import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavBar from "../components/main-components/navbar";
import BeerButton from "../components/main-components/beer-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NBA Quick Stats",
  description: "Application to quickly get stats for a match",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        
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
