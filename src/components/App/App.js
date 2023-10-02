//import logo from './logo.svg';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LogInProvider } from '../../context/LoginContext';
import { PopupProvider } from '../../context/PopupProvider';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFoundPage/NotFound';
import Popup from '../Popup/Popup';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import './App.css';
import SavedMovies from '../SavedMovies/SavedMovies';


const loggedIn = false;

function App() {

  return (
    <PopupProvider>
      <LogInProvider>
        <Popup />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/signin" element={loggedIn ? <Navigate to="/" replace /> : <Login />} />
          <Route path="/signup" element={loggedIn ? <Navigate to="/" replace /> : <Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </LogInProvider>
    </PopupProvider>
  );
}

export default App;
