import "./SearchForm.css"

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <div className="search__form-container">
                    <input required={true} type="text" name="movie" placeholder="Фильм" className="search__form-input" />
                    <button type="submit" className="search__form-submit" />
                </div>
                <div className="search__toggle-container">
                    <input type="checkbox" id="switch" className="search__toggle" />
                    <label for="switch" className="search__label">Toggle</label>
                    <p className="search__toggle-text">Короткометражки</p>
                </div>
            </form>
        </section>
    );
}

export default SearchForm;