import React, { useState } from "react";
import { mainApi } from "../utils/MainApi";
import { useNavigate } from "react-router-dom";

export const CurrentUserContext = React.createContext(true);

export const CurrentUserProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", name: "", _id: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("id"));

  const navigate = useNavigate();

  const checkLoggedIn = () => {
    updateUser();
  };

  const updateUser = () => {
    mainApi
      .getUserInfo()
      .then(res => {
        return setUser(res);
      })
      .catch(err => {
        if (err === "Ошибка 401") {
          setUser(null);
          setIsLoggedIn(false);
          localStorage.removeItem("id");
          localStorage.removeItem("movies");
          return;
        }
        console.log(err);
      });
  };

  const setLoggedIn = (_id) => {
    localStorage.setItem("id", _id);
    setIsLoggedIn(true);
  };

  const setLoggedOut = () => {
    mainApi.signout().then(res => {
      setIsLoggedIn(false);
      localStorage.removeItem("id");
      localStorage.removeItem("movies");
      navigate("/", { replace: true });
    });
  };

  return (
    <CurrentUserContext.Provider
      value={{
        updateUser,
        user,
        setLoggedIn,
        setLoggedOut,
        isLoggedIn,
        setUser,
        checkLoggedIn
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
