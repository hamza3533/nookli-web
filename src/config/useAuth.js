import { useEffect, useState } from 'react';
import supabase from './supabase';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Subscribe to the authentication state changes
    const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    // Cleanup the subscription when the component unmounts
    // return () => {
    //   // Supabase doesn't use removeListener, we just return from the effect to clean up the subscription
    //   subscription?.unsubscribe();
    // };
  }, []);

  return user;
};

export default useAuth;
