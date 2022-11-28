import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import useAdmin from "../../hooks/useAdmin";
import useSeller from "../../hooks/userSeller";
import SpinerLoader from "../../SpinerLoader/SpinerLoader";

const SallerRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const [isSeller, sallerLoading] = useSeller(user?.email);
  let location = useLocation();
  if (loader || sallerLoading) {
    return <SpinerLoader></SpinerLoader>;
  }
  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SallerRoute;
