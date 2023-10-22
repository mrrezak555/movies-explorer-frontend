import { SHORT_FILM_DURATION } from "./mediaScreens";

export const sortMovies = (arr, config = {}) => {
  const { input, radio } = config;
  console.log(arr, config)

  if (input && typeof input === "string") {
    const searchTerm = input.toLowerCase();

    return arr.filter(item => {
      const nameRUIncludes = item.nameRU.toLowerCase().includes(searchTerm);
      const nameENIncludes = item.nameEN.toLowerCase().includes(searchTerm);

      const durationCheck = radio ? item.duration < SHORT_FILM_DURATION : true;
      return (nameRUIncludes || nameENIncludes) && durationCheck;
    });
  }

  return arr;
};
