import './MoviesCard.css';

function MoviesCard({ photo, title, duration, isOwned, element: Component }) {
  return (
    <li className='movie-card'>
      <div className='movie-card-container'>
        <div className='movie-card__wrapper'>
          <h2 className='movie-card__info-text'>{title}</h2>
          <p className='movie-card__duration'>{duration}</p>
        </div>
        <button className='movie-card__button'>
          {<Component owned={isOwned} />}
        </button>
      </div>
      <img className="movie-card__image" src={photo} alt={title} />
    </li>
  );
}

export default MoviesCard;