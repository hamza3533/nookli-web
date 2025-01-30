import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Login from "./pages/Login/index.jsx";
import Services from "./pages/Services/index.jsx";
import AboutUs from "./pages/AboutUs/index.jsx";
import Careers from "./pages/Careers/index.jsx";
import ContactUs from "./pages/ContactUs/index.jsx";
import Dashboard from "./pages/Dashboard/index.jsx"; // Import the Dashboard component
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import useAuth from "./config/useAuth.js";

function ProtectedRoute({ element, user }) {
  return user ? element : <Navigate to="/signin" />;
}

function App() {
  const user = useAuth();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} user={user} />} />
        <Route path="/services" element={<ProtectedRoute element={<Services />} user={user} />} />
        <Route path="/about-us" element={<ProtectedRoute element={<AboutUs />} user={user} />} />
        <Route path="/careers" element={<ProtectedRoute element={<Careers />} user={user} />} />
        <Route path="/contact-us" element={<ProtectedRoute element={<ContactUs />} user={user} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
