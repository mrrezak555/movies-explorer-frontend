import React, { useEffect, useState } from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

export default function MoviesCardList({ data, element }) {

  const [cardsCount, setCardsCount] = useState(0)

  const updateCardsCount = () => {
    const screenWidth = window.innerWidth

    if (screenWidth >= 1280) {
      return setCardsCount(16)
    }

    if (screenWidth >= 767) {
      return setCardsCount(8)

    } else {
      setCardsCount(5)
    }
  }
  useEffect(() => {
    updateCardsCount();
    window.addEventListener('resize', updateCardsCount);
    return () => {
      window.removeEventListener('resize', updateCardsCount);
    };
  }, []);

  const cards = data && data.map((card, iteration) => {
    if (iteration > cardsCount - 1) {
      return null
    }

    iteration++

    return <MoviesCard
      key={iteration}
      photo={card.photo}
      duration={card.duration}
      element={element}
      title={card.title}
      isOwned={card.isOwned} />
  })

  return (
    <section className="movies-card">
      <div className="movies-card-list">
        {cards}
      </div>
    </section>
  )
}
