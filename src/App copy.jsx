import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Login from "./pages/Login/index.jsx";
import Services from "./pages/Services/index.jsx";
import AboutUs from "./pages/AboutUs/index.jsx";
import Careers from "./pages/Careers/index.jsx";
import ContactUs from "./pages/ContactUs/index.jsx";
import AdminDashboard from "./pages/Dashboard/AdminDashboard.jsx";
import InstructorDashboard from "./pages/Dashboard/InstructorDashboard.jsx";
import StudentDashboard from "./pages/Dashboard/StudentDashboard.jsx";
import PublicNavbar from "./components/PublicNavbar.jsx";
import DashboardNavbar from "./components/DashboardNavbar.jsx";
import Footer from "./components/Footer.jsx";
import useAuth from "./config/useAuth.js";

function ProtectedRoute({ element, user, requiredRole }) {
  if (!user) {
    return <Navigate to="/signin" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }

  return element;
}

function App() {
  const user = useAuth();

  return (
    <Router>
      {/* Conditionally render Navbar based on route */}
      {!user ? <PublicNavbar /> : <DashboardNavbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/signin" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Role-Specific Routes (Protected) */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute
              element={<AdminDashboard />}
              user={user}
              requiredRole="admin"
            />
          }
        />
        <Route
          path="/instructor/dashboard"
          element={
            <ProtectedRoute
              element={<InstructorDashboard />}
              user={user}
              requiredRole="instructor"
            />
          }
        />
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute
              element={<StudentDashboard />}
              user={user}
              requiredRole="student"
            />
          }
        />

        {/* Unauthorized Page */}
        <Route
          path="/unauthorized"
          element={
            <div>
              <h1>Unauthorized</h1>
              <p>You do not have permission to access this page.</p>
            </div>
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;