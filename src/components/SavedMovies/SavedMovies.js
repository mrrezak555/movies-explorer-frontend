import React, { useContext, useEffect, useState } from 'react'
import Navigation from '../Navigation/Navigation'
import Popup from '../Popup/Popup'
import { InfoToolTipContext } from '../../context/InfoToolTipProvider'
import { MoviesContext } from '../../context/MoviesContext'
import { mainApi } from '../../utils/MainApi'
import { sortMovies } from '../../utils/sortMoviies'
import SavedSearchForm from '../App/SavedSearchForm/SavedSearchForm'
import Footer from '../Footer/Footer'
import MoreMovies from '../MoreMovies/MoreMovies'
import SavedCardList from '../SavedCardList/SavedCardList'
import './SavedMovies.css'
import useRenderMovies from '../../hooks/useRenderMovies'

export default function SavedMovies() {
  const { savedMovies, setSavedMovies, setMovies, movies, savedDisplayedMovies, setSavedDisplayedMovies } = useContext(MoviesContext);
  // const { setToolTipMessage, setToolTipTitle, openInfoToolTip, setIsOk } = useContext(InfoToolTipContext);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { visibleCards, loadMore, resetCardsCount } = useRenderMovies();

  const handleResetCards = () => {
    resetCardsCount();
  };

  useEffect(() => {
    setIsLoading(true);
    mainApi
      .getMovies()
      .then(res => {
        setData(res);
        setSavedMovies(res);
      })
      .catch(err => {
        console.log("Ошибка при вызове mainApi.getMovies()", err);
        if (err === "Ошибка 401") {
          localStorage.removeItem("id");
          localStorage.removeItem("movies");
        } else {
          // setToolTipTitle("Произошла ошибка");
          // setToolTipMessage("Попробуйте позже");
          // setIsOk(false);
          // openInfoToolTip();
          console.log(err)
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const deleteHandler = id => {
    mainApi
      .deleteMovie(id)
      .then(res => {
        setMovies(
          [...movies].map(item => {
            if (item._id === res._id) {
              item._id = null;
              return item;
            }
            return item;
          })
        );
        setSavedMovies([...savedMovies].filter(item => item._id !== res._id));
        setSavedDisplayedMovies([...savedDisplayedMovies].filter(item => item._id !== res._id));
      })
      .catch(err => {
        if (err === "Ошибка 401") {
          localStorage.removeItem("id");
          localStorage.removeItem("movies");
        } else {
          console.log(err);
          // setToolTipTitle("Произошла ошибка");
          // setToolTipMessage("Попробуйте позже");
          // setIsOk(false);
          // openInfoToolTip();
        }
      });
  };
  return (
    <>
      <section className="movies">
        <Navigation />
        <SavedSearchForm handleResetCards={handleResetCards} />
        <SavedCardList
          savedDisplayedMovies={savedDisplayedMovies}
          deleteHandler={deleteHandler}
          isLoading={isLoading}
          error={isError}
        />
        <MoreMovies isMore={false} />
      </section>
      <Popup />
      <Footer />
    </>
  )
}
