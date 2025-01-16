import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Login from "./pages/Login/index.jsx";
import Services from "./pages/Services/index.jsx";
import AboutUs from "./pages/AboutUs/index.jsx";
import Careers from "./pages/Careers/index.jsx";
import ContactUs from "./pages/ContactUs/index.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-backgroundPrimary text-textPrimary">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/signin" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
