import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { PopupProvider } from '../../context/PopupProvider';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFoundPage/NotFound';
import Popup from '../Popup/Popup';
import Preloader from '../Preloader/Preloader';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRouter/ProtectedRoute';
import RouteFromAuthorized from '../ProtectedRouter/RouteFromAuthorized';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const { checkLoggedIn } = useContext(CurrentUserContext);
  useEffect(() => {
    setIsLoading(true);
    checkLoggedIn();
    return setIsLoading(false);
  }, []);

  return (
    <PopupProvider>
      <Popup />
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="App">
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route
              path={"/signin"}
              element={<RouteFromAuthorized element={Login} />}
            />
            <Route
              path={"/signup"}
              element={
                <RouteFromAuthorized element={Register} />
              }
            />
            <Route path={"*"} element={<NotFound />} />
            <Route
              path={"/movies"}
              element={<ProtectedRoute element={Movies} />}
            />
            <Route
              path={"/profile"}
              element={<ProtectedRoute element={Profile} />}
            />
            <Route
              path={"/saved-movies"}
              element={<ProtectedRoute element={SavedMovies} />}
            />
          </Routes>
        </div>
      )}
    </PopupProvider>
  );
}

export default App;
