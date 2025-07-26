import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fdednrkvcwklfxxzdhga.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkZWRucmt2Y3drbGZ4eHpkaGdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1MTczNDcsImV4cCI6MjA2OTA5MzM0N30.X0W5_Zlszfm6rsBxLixcFFeslYNfqwvOrDl_vXEt0pc";

export const supabase = createClient(supabaseUrl, supabaseKey);