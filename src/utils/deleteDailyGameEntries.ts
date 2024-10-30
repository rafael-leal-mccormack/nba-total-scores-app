import { SupabaseClient } from "@supabase/supabase-js";

export default async function deleteSupabaseDailyGameEntries(supabase: SupabaseClient) {
  // Get timestamp from 24 hours ago
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

  const { data: oldEntries, error: selectError } = await supabase
    .from('dailynbagames')
    .select('id')
    .lt('created_at', oneDayAgo.toISOString());

  if (selectError) {
    console.log('[Check old daily games]', selectError);
    return;
  }

  if (oldEntries && oldEntries.length > 0) {
    const { data, error } = await supabase
      .from('dailynbagames')
      .delete()
      .lt('created_at', oneDayAgo.toISOString());

    if (error) {
      console.log('[Delete old daily games]', error);
    } else {
      console.log(`Deleted ${oldEntries.length} games older than 24 hours (before ${oneDayAgo.toISOString()})`);
    }
  } else {
    console.log('No old daily games to delete');
  }
}