import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import supabase from "../config/supabase";

const TopNavbar = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <h1>My App</h1>
      <nav>
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default TopNavbar;
