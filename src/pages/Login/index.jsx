import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import supabase from "../../config/supabase.js";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch the current user on component mount
  useEffect(() => {
    const fetchUser = async () => {
      // Check local storage for a token
      const token = localStorage.getItem("auth-token");

      if (token) {
        // Validate the token and fetch user data
        const { data: { user }, error } = await supabase.auth.getUser();

        if (error) {
          console.error("Error validating token:", error);
          localStorage.removeItem("auth-token"); // Remove invalid token
        } else if (user) {
          setUser(user);
        }
      }
    };

    fetchUser();

    // Listen for auth state changes (e.g., user logs in or out)
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          const currentUser = session?.user || null;
  
          if (event === "SIGNED_IN" && currentUser) {
            try {
              // Assign default role (e.g., role_id = 3 for 'student')
              const { error: roleError } = await supabase
                .from("user_roles")
                .insert([{ user_id: currentUser.id, role_id: 3 }]); // Use the correct role_id
  
              if (roleError) {
                console.error("Error assigning role:", roleError);
              } else {
                console.log("Default role assigned successfully");
                localStorage.setItem("auth-token", session.access_token); // Store token in local storage
                navigate("/dashboard"); // Redirect to dashboard after login
              }
            } catch (error) {
              console.error("Error during SIGNED_IN event:", error);
            }
          } else if (event === "SIGNED_OUT") {
            localStorage.removeItem("auth-token"); // Remove token from local storage
            navigate("/home"); // Redirect to home page after logout
          }
        }
      );
  
      // Cleanup function
      return () => {
        if (subscription) {
          subscription.unsubscribe(); // Correctly unsubscribe
        }
      };
  }, [navigate]);

  const handleEmailLogin = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      console.error(error);
    } else {
      setUser(data.user);
      localStorage.setItem("auth-token", data.session.access_token); // Store token in local storage
      navigate("/student/dashboard"); // Redirect to dashboard after login
    }
  };

  const handleEmailSignUp = async (email, password) => {
    const defaultAvatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
      email
    )}`;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          avatar_url: defaultAvatarUrl, // Store default avatar
          full_name: "New User", // Static value
          role: "student", // Static value (default role)
        },
      },
    });

    if (error) {
      setError(error.message);
      console.error(error);
    } else {
      setUser(data.user);
      localStorage.setItem("auth-token", data.session.access_token); // Store token in local storage
      navigate("/student/dashboard"); // Redirect to dashboard after sign-up
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      setError(error.message);
      console.error("Error during Google login:", error);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      setError(error.message);
      console.error(error);
    } else {
      setUser(null);
      localStorage.removeItem("auth-token"); // Remove token from local storage
      navigate("/home"); // Redirect to home page after logout
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg px-8 py-16">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Logo" className="w-32 h-auto" />
        </div>

        {user ? (
         navigate("/student/dashboard")
        ) : (
          <form>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 capitalize">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 capitalize">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <button
              type="button"
              onClick={() => handleEmailLogin(email, password)}
              className="w-full bg-yellow-300 text-black py-2 text-xl rounded hover:bg-yellow-400 mb-4"
            >
              Sign In
            </button>

            <button
              type="button"
              onClick={() => handleEmailSignUp(email, password)}
              className="w-full bg-blue-500 text-white py-2 text-xl rounded hover:bg-blue-600 mb-4"
            >
              Sign Up
            </button>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>{" "}
              Sign in with Google
            </button>
          </form>
        )}
      </div>
    </div>
  );
}