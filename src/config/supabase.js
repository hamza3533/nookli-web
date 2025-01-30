import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ljdqgvvbmwikcwguxmmw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqZHFndnZibXdpa2N3Z3V4bW13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNjEyODcsImV4cCI6MjA1MzgzNzI4N30.3YQVIqqSdc6TtVGLfOei7IlQss5agcu7g3fq5FIF3jw"
);
// const supabase = createClient("https://txvdfphobjatelthlfbw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4dmRmcGhvYmphdGVsdGhsZmJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4OTI1NjcsImV4cCI6MjA1MjQ2ODU2N30.dnVGawnoyt8CBkQ36nWkFMkwk03JOHWPZio_SoctyUY");

export default supabase;
