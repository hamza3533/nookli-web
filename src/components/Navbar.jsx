import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-8 w-[170px]"
              src={logo}
              alt="Logo"
            />
          </div>

          {/* Main Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-bold"
                  : "text-gray-700 hover:text-gray-900"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-bold"
                  : "text-gray-700 hover:text-gray-900"
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
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
                Services
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-lg">
                  <NavLink
                    to="/services/service1"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 text-red-500 font-bold"
                        : "block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    }
                  >
                    Service 1
                  </NavLink>
                  <NavLink
                    to="/services/service2"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 text-red-500 font-bold"
                        : "block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    }
                  >
                    Service 2
                  </NavLink>
                  <NavLink
                    to="/services/service3"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 text-red-500 font-bold"
                        : "block px-4 py-2 text-gray-700 hover:bg-gray-100"
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
                  ? "text-red-500 font-bold"
                  : "text-gray-700 hover:text-gray-900"
              }
            >
              Contact Us
            </NavLink>

            {/* Sign In Button */}
            <NavLink
              to="/signin"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-yellow-500"
            >
              Sign In
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
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
                  ? "block text-red-500 font-bold"
                  : "block text-gray-700 hover:text-gray-900"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "block text-red-500 font-bold"
                  : "block text-gray-700 hover:text-gray-900"
              }
            >
              About Us
            </NavLink>
            {/* <div>
              <button
                onClick={() =>
                  setServicesDropdownOpen(!isServicesDropdownOpen)
                }
                className="block text-gray-700 hover:text-gray-900 w-full text-left"
              >
                Services
              </button>
              {isServicesDropdownOpen && (
                <div className="mt-2 pl-4">
                  <NavLink
                    to="/services/service1"
                    className={({ isActive }) =>
                      isActive
                        ? "block text-red-500 font-bold px-4 py-2"
                        : "block text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md"
                    }
                  >
                    Service 1
                  </NavLink>
                  <NavLink
                    to="/services/service2"
                    className={({ isActive }) =>
                      isActive
                        ? "block text-red-500 font-bold px-4 py-2"
                        : "block text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md"
                    }
                  >
                    Service 2
                  </NavLink>
                  <NavLink
                    to="/services/service3"
                    className={({ isActive }) =>
                      isActive
                        ? "block text-red-500 font-bold px-4 py-2"
                        : "block text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md"
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
                  ? "block text-red-500 font-bold"
                  : "block text-gray-700 hover:text-gray-900"
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
