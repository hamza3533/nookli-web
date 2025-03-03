import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import ProtectedRoute from "./routes/ProtectedRoute";

// Layouts
import PublicLayout from "./layouts/PublicLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";

// Pages
import Login from "./pages/Login/index";
import Dashboard from "./pages/Dashboard/index";
import Profile from "./pages/Profile/index";
import Home from "./pages/Home/index";
import Services from "./pages/Services/index";
import AboutUs from "./pages/AboutUs/index";
import Careers from "./pages/Careers/index";
import ContactUs from "./pages/ContactUs/index";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/signin"
            element={
              <PublicLayout>
                <Login />
              </PublicLayout>
            }
          />
          <Route
            path="/home"
            element={
              <PublicLayout>
                <Home />
              </PublicLayout>
            }
          />
          <Route
            path="/services"
            element={
              <PublicLayout>
                <Services />
              </PublicLayout>
            }
          />
          <Route
            path="/about-us"
            element={
              <PublicLayout>
                <AboutUs />
              </PublicLayout>
            }
          />
          <Route
            path="/careers"
            element={
              <PublicLayout>
                <Careers />
              </PublicLayout>
            }
          />
          <Route
            path="/contact-us"
            element={
              <PublicLayout>
                <ContactUs />
              </PublicLayout>
            }
          />
          <Route
            path="/login"
            element={
              <PublicLayout>
                <Login />
              </PublicLayout>
            }
          />
          {/* <Route
            path="/signup"
            element={
              <PublicLayout>
                <Signup />
              </PublicLayout>
            }
          /> */}

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ProtectedLayout>
                  <Dashboard />
                </ProtectedLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProtectedLayout>
                  <Profile />
                </ProtectedLayout>
              </ProtectedRoute>
            }
          />

          {/* 404 Not Found */}
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <ProtectedLayout>
                  <NotFound />
                </ProtectedLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
