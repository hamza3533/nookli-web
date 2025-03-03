import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>; // Show a loader while checking auth status

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
