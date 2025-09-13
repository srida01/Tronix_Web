import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ewaublupirufhormdwtv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3YXVibHVwaXJ1Zmhvcm1kd3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3ODMwMTcsImV4cCI6MjA3MTM1OTAxN30.2xuMQBvpWQoVhuvvg6-lcLWCkfCvvjbXYxAxyM3_cSE";

export const supabase = createClient(supabaseUrl, supabaseKey);
