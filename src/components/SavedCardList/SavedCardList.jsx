import Preloader from "../Preloader/Preloader";
import '../MoviesCardList/MoviesCardList.css'
import SavedCard from "../SavedCard/SavedCard";
import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";

const SavedCardList = ({ savedDisplayedMovies, deleteHandler }) => {
  const { isLoading, error } = useContext(MoviesContext);
  const cards =
    savedDisplayedMovies &&
    savedDisplayedMovies.map(item => {
      return <SavedCard savedDisplayedMovies={item} remove={deleteHandler} key={item._id} />;
    });
  if (error) {
    return (
      <section className={'movies-card'}>
        <h1>Ничего не найдено</h1>
      </section>
    );
  }
  return (
    <section className={'movies-card'}>
      {isLoading ? (
        <Preloader />
      ) : (
        <ul className={'movies-card__list'}>{cards}</ul>
      )}
    </section>
  );
};
export default SavedCardList;
