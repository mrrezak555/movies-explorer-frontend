import { useEffect, useState } from "react";

import {
  CARD_COUNT_LARGE,
  CARD_COUNT_MEDIUM,
  CARD_COUNT_SMALL,
  SCREEN_WIDTH_LARGE,
  SCREEN_WIDTH_MEDIUM,
  SCREEN_WIDTH_SMALL,
  MORE_CARD_COUNT_SMALL,
  MORE_CARD_COUNT_MEDIUM,
  MORE_CARD_COUNT_LARGE,
} from "../utils/mediaScreens";

const useRenderMovies = () => {
  const [cardsCount, setCardsCount] = useState(0);
  const [visibleCards, setVisibleCards] = useState(cardsCount);
  const [countMoreCards, setCountMoreCards] = useState(0);

  const loadMore = () => {
    console.log('loadMore');
    setVisibleCards(prevVisibleCards => prevVisibleCards + countMoreCards);
  };

  const resetCardsCount = () => {
    setVisibleCards(cardsCount);
  };

  const updateCardsCount = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= SCREEN_WIDTH_LARGE) {
      setVisibleCards(CARD_COUNT_LARGE);
      setCountMoreCards(MORE_CARD_COUNT_LARGE);
      return setCardsCount(CARD_COUNT_LARGE);
    }
    if (screenWidth >= SCREEN_WIDTH_MEDIUM) {
      setVisibleCards(CARD_COUNT_MEDIUM);
      setCountMoreCards(MORE_CARD_COUNT_MEDIUM);

      return setCardsCount(CARD_COUNT_MEDIUM);
    }
    if (screenWidth <= SCREEN_WIDTH_SMALL) {
      setCardsCount(CARD_COUNT_SMALL);
      setCountMoreCards(MORE_CARD_COUNT_SMALL);
      setVisibleCards(CARD_COUNT_SMALL);
    }
  };

  useEffect(() => {
    updateCardsCount();
    window.addEventListener("resize", updateCardsCount);
    return () => {
      window.removeEventListener("resize", updateCardsCount);
    };
  }, []);

  return { cardsCount, visibleCards, loadMore, resetCardsCount };
};

export default useRenderMovies;
