import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-textPrimary py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <img className="h-8 w-[170px]" src={logo} alt="Logo" />
          <p className="text-sm">
            © {currentYear} NOOKLI. All rights reserved.
          </p>
          <p className="text-sm">
            Empowering personalized learning journeys
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
