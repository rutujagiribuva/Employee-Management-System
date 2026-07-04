
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  console.log("ProtectedRoute Loaded");
  console.log("Token:", token);

  if (token === null) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;