  import { createClient } from "@supabase/supabase-js";

  const supabase = createClient("https://txvdfphobjatelthlfbw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4dmRmcGhvYmphdGVsdGhsZmJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4OTI1NjcsImV4cCI6MjA1MjQ2ODU2N30.dnVGawnoyt8CBkQ36nWkFMkwk03JOHWPZio_SoctyUY");
  
  export default supabase;