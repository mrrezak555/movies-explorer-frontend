import { Navigate } from "react-router";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";


const ProtectedRoute = ({ element: Component }) => {
  const { isLoggedIn } = useContext(CurrentUserContext);
  return isLoggedIn ? <Component /> : <Navigate to={"/"} replace />;
};

export default ProtectedRoute;