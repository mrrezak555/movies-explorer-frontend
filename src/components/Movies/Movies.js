import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import MoreMovies from "../MoreMovies/MoreMovies";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import './Movies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import OwnedIcon from "../Ui/OwnedIcon";
import { MoviesContext } from "../../context/MoviesContext";
import { mainApi } from "../../utils/MainApi";
import useRenderMovies from "../../hooks/useRenderMovies";
import { apiMovies } from "../../utils/apiMovies";
import { sortMovies } from "../../utils/sortMoviies";
import { filterMovies } from "../../utils/filterMovies";
import { InfoToolTipContext } from "../../context/InfoToolTipProvider";

const Movies = () => {
  // const { setToolTipMessage, setToolTipTitle } = useContext(InfoToolTipContext);
  // const { setIsOk, openInfoToolTip } = useContext(InfoToolTipContext);

  const { visibleCards, loadMore, resetCardsCount } = useRenderMovies();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
        // setToolTipTitle("Произошла ошибка");
        // setToolTipMessage("Попробуйте позже");
        // setIsOk(false);
        // openInfoToolTip();
      });
  };

  return (
    <div>
      <section className="movies">
        <Navigation />
        <SearchForm handleResetCards={handleResetCards} />
        {(isLoading ?
          <Preloader />
          :
          <>
            <MoviesCardList
              isLoading={isLoading}
              data={data.slice(0, visibleCards)}
              element={OwnedIcon}
              addHandler={addHandler}
              deleteHandler={deleteHandler}
            />
            <MoreMovies
              isMore={visibleCards <= data.length}
              onClick={loadMore}
            />
          </>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default Movies;