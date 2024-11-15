import { NextRequest, NextResponse } from "next/server";
import { Logger } from "../../../../utils/logger/logger";
import { createClient } from "../../../../utils/supabase/server";

const logger = new Logger('[GameCache Cleanup] ');

export async function DELETE(req: NextRequest) {
  const logger = new Logger('[GameCache] ');
  const supabase = createClient();

  try {
    const { searchParams } = new URL(req.url);
    const mode = searchParams.get("mode") || "expired"; // "expired" or "all"

    logger.log(`Starting cache cleanup. Mode: ${mode}`);

    if (mode === "all") {
      // Delete all cache entries
      const { error, count } = await supabase
        .from("nbagamecache")
        .delete()
        .neq("game_id", "dummy") // This ensures all records are selected
        .select("count");

      if (error) {
        logger.error("Failed to clean all cache", error);
        return NextResponse.json(
          { error: "Failed to clean cache" },
          { status: 500 }
        );
      }

      logger.log(`Successfully cleaned entire cache. Removed ${count} entries`);
      return NextResponse.json({
        message: "Cache cleaned successfully",
        entriesRemoved: count
      });

    } else {
      // Delete only expired entries
      const now = Date.now();
      const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

      const { data: expiredEntries, error: fetchError } = await supabase
        .from("nbagamecache")
        .select("*");

      if (fetchError) {
        logger.error("Failed to fetch cache entries", fetchError);
        return NextResponse.json(
          { error: "Failed to fetch cache entries" },
          { status: 500 }
        );
      }

      // Filter expired entries
      const expiredIds = expiredEntries
        .filter(entry => {
          const created = new Date(entry.created_at).getTime();
          return (now - created) > CACHE_DURATION;
        })
        .map(entry => entry.game_id);

      if (expiredIds.length === 0) {
        logger.log("No expired cache entries found");
        return NextResponse.json({
          message: "No expired entries to clean",
          entriesRemoved: 0
        });
      }

      // Delete expired entries
      const { error: deleteError, count } = await supabase
        .from("nbagamecache")
        .delete()
        .in("game_id", expiredIds);

      if (deleteError) {
        logger.error("Failed to delete expired entries", deleteError);
        return NextResponse.json(
          { error: "Failed to clean expired cache" },
          { status: 500 }
        );
      }

      logger.log(`Successfully cleaned expired cache. Removed ${count} entries`);
      return NextResponse.json({
        message: "Expired cache entries cleaned successfully",
        entriesRemoved: count
      });
    }

  } catch (error) {
    logger.error("Cache cleanup failed", error);
    return NextResponse.json(
      { error: "Failed to process cache cleanup" },
      { status: 500 }
    );
  }
}