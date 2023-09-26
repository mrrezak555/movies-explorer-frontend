import { useState } from "react";
import Footer from "../Footer/Footer";
import MoreMovies from "../MoreMovies/MoreMovies";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import './Movies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { data } from '../../utils/testData'
import OwnedIcon from "../Ui/OwnedIcon";

function Movies(props) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main>
      <section className="movies">
        <Navigation />
        <SearchForm />
        {(isLoading ?
          <Preloader />
          :
          <>
            <MoviesCardList data={data.filmArray} element={OwnedIcon} />
            <MoreMovies isMore={true} />
          </>
        )}
      </section>
      <Footer />
    </main>
  );
}

export default Movies;