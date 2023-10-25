import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [savedDisplayedMovies, setSavedDisplayedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);


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
        savedDisplayedMovies,
        isLoading,
        setIsLoading,
        error,
        setError
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
