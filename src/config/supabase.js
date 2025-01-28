  import { createClient } from "@supabase/supabase-js";

  const supabase = createClient("https://huvzrzxvjiafkunnmwxf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1dnpyenh2amlhZmt1bm5td3hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwOTU1NzksImV4cCI6MjA1MzY3MTU3OX0.3c_802W7EJPD-QD-lfYTI5khEUbtcq0wuzGTsunl8ic");
  // const supabase = createClient("https://txvdfphobjatelthlfbw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4dmRmcGhvYmphdGVsdGhsZmJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4OTI1NjcsImV4cCI6MjA1MjQ2ODU2N30.dnVGawnoyt8CBkQ36nWkFMkwk03JOHWPZio_SoctyUY");
  
  export default supabase;