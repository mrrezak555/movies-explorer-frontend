import React, { useContext } from 'react'
import { MoviesContext } from '../../context/MoviesContext'
import useRenderMovies from '../../hooks/useRenderMovies'
import { mainApi } from '../../utils/MainApi'
import SavedSearchForm from '../App/SavedSearchForm/SavedSearchForm'
import Footer from '../Footer/Footer'
import MoreMovies from '../MoreMovies/MoreMovies'
import Navigation from '../Navigation/Navigation'
import Popup from '../Popup/Popup'
import SavedCardList from '../SavedCardList/SavedCardList'
import './SavedMovies.css'

export default function SavedMovies() {
  const { savedMovies, setSavedMovies, setMovies, movies, savedDisplayedMovies, setSavedDisplayedMovies } = useContext(MoviesContext);
  const { resetCardsCount } = useRenderMovies();

  const handleResetCards = () => {
    resetCardsCount();
  };

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
        }
      });
  };

  return (
    <>
      <section className="movies">
        <Navigation />
        <SavedSearchForm handleResetCards={handleResetCards} />
        {savedDisplayedMovies.length > 0 ? (
          <SavedCardList
            savedDisplayedMovies={savedDisplayedMovies}
            deleteHandler={deleteHandler}
          />
        ) : (
          <p className="saved-movies__not-found">Ничего не найдено</p>
        )}
        <MoreMovies isMore={false} />
      </section>
      <Popup />
      <Footer />
    </>
  )
}
