import { useContext, useEffect, useState } from "react";
import { MoviesContext, MoviesProvider } from "../../context/MoviesContext";
import useRenderMovies from "../../hooks/useRenderMovies";
import { mainApi } from "../../utils/MainApi";
import Footer from "../Footer/Footer";
import MoreMovies from "../MoreMovies/MoreMovies";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import OwnedIcon from "../Ui/OwnedIcon";
import './Movies.css';

const Movies = () => {
  const { visibleCards, loadMore, resetCardsCount } = useRenderMovies();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movies, setMovies, displayedMovies } = useContext(MoviesContext);
  useEffect(() => {
    setData([...displayedMovies]);
  }
    , [displayedMovies]);

  const handleResetCards = () => {
    resetCardsCount();
  };

  const addHandler = card => {
    mainApi
      .postMovie(card)
      .then(res => {
        const sortedData = [...movies].map(item => {
          if (item.id === Number(res.movieId)) {
            return { ...item, _id: res._id };
          }
          return item;
        });
        setMovies(sortedData);
        setData(
          [...data].map(item => {
            if (item.id === Number(res.movieId)) {
              return { ...item, _id: res._id };
            }
            return item;
          })
        );
      })
      .catch(err => {
        if (err === "Ошибка 401") {
          localStorage.removeItem("id");
          localStorage.removeItem("movies");
          return;
        }
      });
  };

  const deleteHandler = card => {
    mainApi
      .deleteMovie(card._id)
      .then(res => {
        const sortedData = [...movies].map(item => {
          if (item._id === res._id) {
            return { ...item, _id: null };
          }
          return item;
        });
        setMovies(sortedData);
        setData(
          [...data].map(item => {
            if (item._id === res._id) {
              return { ...item, _id: null };
            }
            return item;
          })
        );
      })
      .catch(err => {
        if (err === "Ошибка 401") {
          localStorage.removeItem("id");
          localStorage.removeItem("movies");
          return;
        }
      });
  };

  return (
    <div>
      <section className="movies">
        <Navigation />
        <SearchForm handleResetCards={handleResetCards} />
        {isLoading ? (
          <Preloader />
        ) : data.length > 0 ? (
          <>
            <MoviesCardList
              isLoading={isLoading}
              data={data.slice(0, visibleCards)}
              element={OwnedIcon}
              addHandler={addHandler}
              deleteHandler={deleteHandler}
            />
            {visibleCards < data.length &&
              <MoreMovies
                isMore={visibleCards <= data.length}
                onClick={loadMore}
              />
            }
          </>
        ) : (
          <p className="movies__not-found">Ничего не найдено</p>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default Movies;