export const filterMovies = (movies, myMovies) => {
  const myMoviesMap = myMovies.reduce((acc, myMovie) => {
    acc[myMovie.movieId] = myMovie;
    return acc;
  }, {});

  return movies.map(movie => {
    if (myMoviesMap[movie.id]) {
      movie.owned = true;
      movie._id = myMoviesMap[movie.id]._id;
    }
    return movie;
  });
};
