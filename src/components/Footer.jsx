import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img className="h-8 w-[170px]" src={logo} alt="Logo" />
        </div>

        {/* Copyright */}
        <div className="text-gray-600">
          © {new Date().getFullYear()} Nookli. All rights reserved.
        </div>

        {/* Quote */}
        <div className="text-gray-600 italic">
          "Learning is a journey that never ends"
        </div>
      </div>
    </footer>
  );
};

export default Footer;
