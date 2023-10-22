import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [savedDisplayedMovies, setSavedDisplayedMovies] = useState([])

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies,
        savedMovies,
        setSavedMovies,
        displayedMovies,
        setDisplayedMovies,
        setSavedDisplayedMovies,
        savedDisplayedMovies
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
