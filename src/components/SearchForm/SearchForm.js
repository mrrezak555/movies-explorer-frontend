import { useContext, useEffect } from "react";
import "./SearchForm.css"
import { InputContext } from "../../context/inputContext";
import { apiMovies } from "../../utils/apiMovies";
import { mainApi } from "../../utils/MainApi";
import { filterMovies } from "../../utils/filterMovies";
import { sortMovies } from "../../utils/sortMoviies";
import { MoviesContext } from "../../context/MoviesContext";


const SearchForm = ({ handleResetCards }) => {
    const { handleInput,
        handleRadio,
        value,
        handleSetLocalStorage } = useContext(InputContext);

    useEffect(() => {
        const sortedMovies = sortMovies(movies, value);
        if (sortedMovies.length === 0) {
            return setDisplayedMovies([]);
        }
        setDisplayedMovies(sortedMovies);
    }, [value.radio]);

    const { movies, setMovies, setDisplayedMovies } = useContext(MoviesContext);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleResetCards();
        if (movies.length === 0) {
            return Promise.all([apiMovies.getMovies(), mainApi.getMovies()])
                .then(([apiMovies, savedMovies]) => {
                    handleSetLocalStorage();
                    const filteredMovies = filterMovies(apiMovies, savedMovies);
                    setMovies(filteredMovies);
                    const sortedMovies = sortMovies(filteredMovies, value);
                    if (sortedMovies.length === 0) {
                        return setDisplayedMovies([]);
                    }
                    setDisplayedMovies(sortedMovies);
                })
                .catch(err => console.log(err))
                .finally(() => { });
        }
        const sortedMovies = sortMovies(movies, value);
        setDisplayedMovies(sortedMovies);
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

export default SearchForm;
