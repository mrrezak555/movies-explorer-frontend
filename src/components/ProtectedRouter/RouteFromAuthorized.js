import React, { useContext } from "react";
import { Navigate } from "react-router";
import { CurrentUserContext } from "../../context/CurrentUserContext";


const RouteFromAuthorized = ({ element: Component }) => {
  const { isLoggedIn } = useContext(CurrentUserContext);
  return isLoggedIn ? <Navigate to={"/"} replace /> : <Component />;
};

export default RouteFromAuthorized;