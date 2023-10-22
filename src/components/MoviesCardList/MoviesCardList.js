import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCards'
import Preloader from '../Preloader/Preloader';

export default function MoviesCardList({ data, addHandler, deleteHandler, isLoading, error }) {
  const cards =
    data &&
    data.map(item => {
      return (
        <MoviesCard
          data={item}
          remove={deleteHandler}
          add={addHandler}
          key={item.id}
        />
      );
    });
  if (error) {
    return (
      <section className={"movies-card"}>
        <h1>Ничего не найдено</h1>
      </section>
    );
  }
  return (
    <section className={"movies-card"}>
      {isLoading ? (
        <>
          <Preloader />
        </>
      ) : (
        <ul className={"movies-card__list"}>{cards}</ul>
      )}
    </section>
  );
};
