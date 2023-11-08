import { useEffect, useState } from "react";

import {
  CARD_COUNT_LARGE,
  CARD_COUNT_MEDIUM,
  CARD_COUNT_SMALL,
  SCREEN_WIDTH_LARGE,
  SCREEN_WIDTH_MEDIUM,
  MORE_CARD_COUNT_SMALL,
  MORE_CARD_COUNT_MEDIUM,
  MORE_CARD_COUNT_LARGE,
} from "../utils/mediaScreens";

const useRenderMovies = () => {
  const [cardsCount, setCardsCount] = useState(0);
  const [visibleCards, setVisibleCards] = useState(0);
  const [countMoreCards, setCountMoreCards] = useState(0);

  const loadMore = () => {
    setVisibleCards(prevVisibleCards => {
      const additionalCards = calculateAdditionalCards(prevVisibleCards);
      return prevVisibleCards + additionalCards;
    });
  };

  const resetCardsCount = () => {
    setVisibleCards(cardsCount);
  };

  const calculateAdditionalCards = (currentVisible) => {
    const screenWidth = window.innerWidth;
    let additionalCards = countMoreCards;

    if (screenWidth >= SCREEN_WIDTH_MEDIUM && screenWidth < SCREEN_WIDTH_LARGE) {
      const cardsInRow = 3;
      additionalCards = cardsInRow - (currentVisible % cardsInRow);
      additionalCards = additionalCards === cardsInRow ? countMoreCards : additionalCards;
    }

    return additionalCards;
  };

  const updateCardsCount = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= SCREEN_WIDTH_LARGE) {
      setCardsCount(CARD_COUNT_LARGE);
      setCountMoreCards(MORE_CARD_COUNT_LARGE);
      setVisibleCards(CARD_COUNT_LARGE);
    } else if (screenWidth >= SCREEN_WIDTH_MEDIUM) {
      setCardsCount(CARD_COUNT_MEDIUM);
      setCountMoreCards(MORE_CARD_COUNT_MEDIUM);
      setVisibleCards(CARD_COUNT_MEDIUM);
    } else if (screenWidth < SCREEN_WIDTH_MEDIUM) {
      setCardsCount(CARD_COUNT_SMALL);
      setCountMoreCards(MORE_CARD_COUNT_SMALL);
      setVisibleCards(CARD_COUNT_SMALL);
    }
  };

  useEffect(() => {
    updateCardsCount();
    window.addEventListener("resize", updateCardsCount);
    return () => window.removeEventListener("resize", updateCardsCount);
  }, []);

  return { visibleCards, loadMore, resetCardsCount };
};

export default useRenderMovies;
