import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  LibraryBooks,
  HelpOutline,
  People,
  AccountCircle,
  Notifications,
  Settings,
  Logout,
  Menu,
} from "@mui/icons-material";
import supabase from "../config/supabase";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUser(user.user_metadata);
      }
    };
    fetchUser();
  }, []);

  const menuItems = [
    { name: "Home", icon: <Home />, path: "/" },
    { name: "Courses", icon: <LibraryBooks />, path: "/courses" },
    { name: "Ask Atom", icon: <HelpOutline />, path: "/ask-atom" },
    { name: "Community", icon: <People />, path: "/community" },
    { name: "Profile", icon: <AccountCircle />, path: "/profile" },
  ];

  const settingsItems = [
    { name: "Notifications", icon: <Notifications />, path: "/notifications" },
    { name: "Settings", icon: <Settings />, path: "/settings" },
    // { name: "Logout", icon: <Logout />, path: "/logout" },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div
      className={`h-screen bg-white border-r shadow-md transition-all duration-300
      ${isOpen ? "w-60" : "w-20"} flex flex-col`}
    >
      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={` px-6 py-1 
          text-gray-700 transition-all duration-200 rounded-md
          ${isOpen ? "justify-start" : "justify-center"}`}
        >
          <Menu fontSize="large" />
        </button>
        <h1
          className={`text-xl font-bold text-gray-800 transition-all ${
            isOpen ? "block" : "hidden"
          }`}
        >
          NOOKLI.AI
        </h1>
      </div>

      <nav className="flex-1 mt-6">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-6 py-3 
                text-gray-700 transition-all duration-200 rounded-md 
                ${
                  location.pathname === item.path
                    ? "bg-gray-100 font-semibold"
                    : ""
                }
                ${isOpen ? "justify-start" : "justify-center"}`}
              >
                {item.icon}
                <span className={`${isOpen ? "block" : "hidden"}`}>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Settings & User Info */}
      <div className="mt-auto">
        <ul>
          {settingsItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-6 py-3 
                text-gray-700 transition-all duration-200 rounded-md 
                ${
                  location.pathname === item.path
                    ? "bg-gray-100 font-semibold"
                    : ""
                }
                ${isOpen ? "justify-start" : "justify-center"}`}
              >
                {item.icon}
                <span className={`${isOpen ? "block" : "hidden"}`}>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={handleLogout}
              className={`flex items-center gap-3 px-6 py-3 
                text-gray-700 transition-all duration-200 rounded-md
                ${isOpen ? "justify-start" : "justify-center"}`}
            >
              <Logout />{" "}
              <span className={`${isOpen ? "block" : "hidden"}`}>Logout </span>
            </button>
          </li>
        </ul>

        {/* User Profile */}
        <div className="flex items-center gap-3 p-4 border-t">
          <img
            src={user?.avatar_url || "https://i.pravatar.cc/40"}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className={`${isOpen ? "block" : "hidden"}`}>
            <h4 className="text-sm font-semibold">
              {user?.full_name || "Alex Smith"}
            </h4>
            <p className="text-xs text-gray-500">
              {user?.email || "Alexsmith12@gmail.com"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
