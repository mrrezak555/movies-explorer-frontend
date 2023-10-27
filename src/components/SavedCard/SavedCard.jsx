import React from 'react';
import { Link } from 'react-router-dom';
import { convertDuration } from '../../utils/convertDuration';
import DeleteButton from '../Ui/DeleteButton';

export default function SavedCard({ savedDisplayedMovies, remove }) {
  const handleRemove = () => {
    remove(savedDisplayedMovies._id);
    console.log('delete')
  };

  return (
    <li className='movie-card'>
      <div className='movie-card-container'>
        <div className='movie-card__wrapper'>
          <h2 className='movie-card__info-text'>{savedDisplayedMovies.nameRU}</h2>
          <p className='movie-card__duration'> {convertDuration(savedDisplayedMovies.duration)}</p>
        </div>
        <button className='movie-card__button'>
          {<DeleteButton owned={savedDisplayedMovies.owned} handleRemove={handleRemove} />}
        </button>
      </div>
      <Link to={savedDisplayedMovies.trailer} target="_blank" rel="noopener noreferrer">
        <img className="movie-card__image"
          src={savedDisplayedMovies.image}
          alt={savedDisplayedMovies.nameRU}
        />
      </Link>
    </li>
  )
}
