import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import setAuthToken from "./setAuthToken";

const PrivateRoute = ({
  auth,
  role,
  permition = "user",
  redirectPath = "/",
  children,
}) => {
  if (!auth) {
    return <Navigate to={redirectPath} replace />;
  }

  setAuthToken(auth);

  var decoded = jwtDecode(localStorage.jwtToken);

  if (decoded.role !== permition) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default PrivateRoute;
