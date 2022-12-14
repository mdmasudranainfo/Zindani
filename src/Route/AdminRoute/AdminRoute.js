import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import useAdmin from "../../hooks/useAdmin";
import SpinerLoader from "../../SpinerLoader/SpinerLoader";

const AdminRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const [isAdmin, adminLoading] = useAdmin(user?.email);
  let location = useLocation();
  if (loader || adminLoading) {
    return <SpinerLoader></SpinerLoader>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
