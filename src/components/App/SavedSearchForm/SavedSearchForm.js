import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../../context/MoviesContext";
import { SavedInputContext } from "../../../context/SavedInputContext";
import { mainApi } from "../../../utils/MainApi";
import { sortMovies } from "../../../utils/sortMoviies";
import "../../SearchForm/SearchForm.css";



const SavedSearchForm = () => {
  const { handleInput, handleRadio, value } = useContext(SavedInputContext);
  const { savedMovies, setSavedMovies, setSavedDisplayedMovies, setIsLoading } = useContext(MoviesContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    mainApi.getMovies()
      .then((res) => {
        setSavedDisplayedMovies(res);
        setData(res);
      })
      .finally(setIsLoading)
  }, []);

  useEffect(() => {
    const sortedMovies = sortSavedMovies(data, value);
    if (sortedMovies.length === 0) {
      return setSavedDisplayedMovies([...sortedMovies]);
    }
    setSavedDisplayedMovies([...sortedMovies]);
  }, [value.radio]);

  const sortSavedMovies = (arr, config) => {
    const { input, radio } = config

    return [...arr].filter(item => {
      const namedCheck = item.nameRU.toLowerCase().includes(input.toLowerCase())
      const durationCheck = radio ? item.duration < 40 : true
      return namedCheck && durationCheck
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (savedMovies.length === 0) {
      return mainApi.getMovies()
        .then((savedMovies) => {
          setSavedMovies(savedMovies);
          const sortedMovies = sortMovies(savedMovies, value);
          if (sortedMovies.length === 0) {
            return setSavedDisplayedMovies([]);
          }
          setSavedDisplayedMovies([...sortedMovies]);
        })
        .catch(err => console.log(err))
        .finally(() => { });
    }
    const sortedMovies = sortMovies(savedMovies, value);
    setSavedDisplayedMovies([...sortedMovies]);
  }

  return (
    <section className="search">
      <form
        className="search__form"
        noValidate={true}
        onSubmit={e => handleSubmit(e)}
      >
        <div className="search__form-container">
          <input
            type="text"
            name="movie"
            placeholder="Фильм"
            className="search__form-input"
            onChange={handleInput}
            value={value.input || ""}
          />
          <button type="submit" className="search__form-submit" />
        </div>
        <div className="search__toggle-container">
          <input
            type="checkbox"
            id="switch"
            className="search__toggle"
            checked={value.radio}
            onChange={handleRadio}
          />
          <label htmlFor="switch" className="search__label">Toggle</label>
          <p className="search__toggle-text">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SavedSearchForm;
