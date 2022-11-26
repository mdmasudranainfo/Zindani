import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import SpinerLoader from "../../SpinerLoader/SpinerLoader";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  let location = useLocation();
  if (loader) {
    return <SpinerLoader></SpinerLoader>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
