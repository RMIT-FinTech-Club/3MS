import { createClient, SupabaseClientOptions } from "@supabase/supabase-js";

const SUPABASE_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzA4NTU3MiwiZXhwIjoxOTM4NjYxNTcyfQ.e2TxvhW4AyuakNTD7wwlUwnvpRNjydR88pquGUDc_0w";

const SUPABASE_URL = "https://mijsuqxlvrdaqfeefxnf.supabase.co";

const options: SupabaseClientOptions = {
	persistSession: true,
};

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, options);

export { supabase };
