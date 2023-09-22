import './MoviesCard.css';

function MoviesCard({ photo, title, duration, isOwned, element: Component }) {
  return (
    <div className='movies-card'>
      <div className='movie-card__container'>
        <div className='movie-card__wrapper'>
          <h2 className='movie-card__info-text'>{title}</h2>
          <p className='movie-card__duration'>{duration}</p>
        </div>
        {<Component owned={isOwned} />}
      </div>
      <img className="movie-card__image" src={photo} alt="Стрелка" />
    </div>
  );
}

export default MoviesCard;