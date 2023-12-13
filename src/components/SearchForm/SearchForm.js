import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { mainApi } from "../../utils/MainApi";
import { apiMovies } from "../../utils/apiMovies";
import { filterMovies } from "../../utils/filterMovies";
import { sortMovies } from "../../utils/sortMoviies";
import "./SearchForm.css";


const SearchForm = ({ handleResetCards }) => {
    const initialState = JSON.parse(localStorage.getItem('value')) || { input: '', radio: false };
    const [value, setValue] = useState(initialState);
    const handleInput = (e) => {
        const updatedValue = { ...value, input: e.target.value };
        setValue(updatedValue);
        localStorage.setItem('value', JSON.stringify(updatedValue));
    }

    const handleRadio = () => {
        const updatedValue = { ...value, radio: !value.radio };
        setValue(updatedValue);
        localStorage.setItem('value', JSON.stringify(updatedValue));
    }

    const { movies, setMovies, setDisplayedMovies } = useContext(MoviesContext);

    useEffect(() => {
        const sortedMovies = sortMovies(movies, value);
        if (sortedMovies.length === 0) {
            return setDisplayedMovies([]);
        }
        setDisplayedMovies(sortedMovies);
    }, [value.radio]);


    useEffect(() => {
        if (!value.input) {
            return
        }
        handleSubmit();
    }, []);

    const handleSubmit = (evt) => {
        evt?.preventDefault();
        if (!value.input) {
            return
        }
        handleResetCards();
        if (movies.length === 0) {
            return Promise.all([apiMovies.getMovies(), mainApi.getMovies()])
                .then(([apiMovies, savedMovies]) => {
                    const filteredMovies = filterMovies(apiMovies, savedMovies);
                    const sortedMovies = sortMovies(filteredMovies, value);
                    setMovies(filteredMovies);
                    if (sortedMovies.length === 0) {
                        setDisplayedMovies([]);
                    } else {
                        setDisplayedMovies(sortedMovies);
                    }
                })
                .catch(err => console.log(err));
        } else {
            const sortedMovies = sortMovies(movies, value);
            setDisplayedMovies(sortedMovies);
        }
    };

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
