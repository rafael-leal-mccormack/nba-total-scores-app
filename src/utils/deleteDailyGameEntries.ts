import { SupabaseClient } from "@supabase/supabase-js";

export default async function deleteSupabaseDailyGameEntries(supabase: SupabaseClient) {
  const {data, error} = await supabase.from('dailynbagames').delete().neq('id',0);
  if (error) {
    console.log('[Delete daily games]', error)
  }

  console.log('Deleted games', data)
}