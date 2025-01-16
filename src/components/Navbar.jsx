import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo222.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <nav className="bg-primary shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-[170px]"
              src={logo}
              alt="Logo"
            />
          </div>

          <div className="hidden lg:flex space-x-6 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-textPrimary font-bold shadow-lg"
                  : "text-textSecondary hover:text-textPrimary transition-colors duration-200"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "text-textPrimary font-bold shadow-lg"
                  : "text-textSecondary hover:text-textPrimary transition-colors duration-200"
              }
            >
              About Us
            </NavLink>
            {/* Services Dropdown */}
            {/* <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="text-textSecondary hover:text-textPrimary focus:outline-none transition-colors duration-200">
                Services
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-backgroundSecondary shadow-2xl rounded-lg">
                  <NavLink
                    to="/services/service1"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 text-textPrimary font-bold"
                        : "block px-4 py-2 text-textSecondary hover:bg-primaryHover hover:text-textPrimary transition-colors duration-200"
                    }
                  >
                    Service 1
                  </NavLink>
                  <NavLink
                    to="/services/service2"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 text-textPrimary font-bold"
                        : "block px-4 py-2 text-textSecondary hover:bg-primaryHover hover:text-textPrimary transition-colors duration-200"
                    }
                  >
                    Service 2
                  </NavLink>
                  <NavLink
                    to="/services/service3"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 text-textPrimary font-bold"
                        : "block px-4 py-2 text-textSecondary hover:bg-primaryHover hover:text-textPrimary transition-colors duration-200"
                    }
                  >
                    Service 3
                  </NavLink>
                </div>
              )}
            </div> */}
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                   ? "text-textPrimary font-bold shadow-lg"
                  : "text-textSecondary hover:text-textPrimary transition-colors duration-200"
              }
            >
              Contact Us
            </NavLink>

            {/* Sign In Button */}
            <NavLink
              to="/signin"
              className="bg-textPrimary text-primary font-bold px-6 py-2 rounded-md shadow-2xl hover:bg-transparent hover:text-textPrimary border-2 border-transparent hover:border-textPrimary transition-all duration-300"
            >
              Sign In
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-textSecondary hover:text-textPrimary focus:outline-none transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block text-textPrimary font-bold shadow-lg"
                  : "block text-textSecondary hover:text-textPrimary transition-colors duration-200"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "block text-textPrimary font-bold shadow-lg"
                  : "block text-textSecondary hover:text-textPrimary transition-colors duration-200"
              }
            >
              About Us
            </NavLink>
            {/* <div>
              <button
                onClick={() =>
                  setServicesDropdownOpen(!isServicesDropdownOpen)
                }
                className="block text-textSecondary hover:text-textPrimary w-full text-left transition-colors duration-200"
              >
                Services
              </button>
              {isServicesDropdownOpen && (
                <div className="mt-2 pl-4">
                  <NavLink
                    to="/services/service1"
                    className={({ isActive }) =>
                      isActive
                        ? "block text-textPrimary font-bold px-4 py-2"
                        : "block text-textSecondary hover:bg-primaryHover hover:text-textPrimary px-4 py-2 rounded-md transition-colors duration-200"
                    }
                  >
                    Service 1
                  </NavLink>
                  <NavLink
                    to="/services/service2"
                    className={({ isActive }) =>
                      isActive
                        ? "block text-textPrimary font-bold px-4 py-2"
                        : "block text-textSecondary hover:bg-primaryHover hover:text-textPrimary px-4 py-2 rounded-md transition-colors duration-200"
                    }
                  >
                    Service 2
                  </NavLink>
                  <NavLink
                    to="/services/service3"
                    className={({ isActive }) =>
                      isActive
                        ? "block text-textPrimary font-bold px-4 py-2"
                        : "block text-textSecondary hover:bg-primaryHover hover:text-textPrimary px-4 py-2 rounded-md transition-colors duration-200"
                    }
                  >
                    Service 3
                  </NavLink>
                </div>
              )}
            </div> */}
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "block text-textPrimary font-bold shadow-lg"
                  : "block text-textSecondary hover:text-textPrimary transition-colors duration-200"
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/signin"
              className="block bg-red-500 text-white px-4 py-2 rounded-md hover:bg-yellow-500"
            >
              Sign In
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
