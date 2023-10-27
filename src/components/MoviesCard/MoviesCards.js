import { Link } from 'react-router-dom';
import './MoviesCard.css';
import { convertDuration } from '../../utils/convertDuration';
import OwnedIcon from '../Ui/OwnedIcon';

function MoviesCard({ data, add, remove }) {
  const postData = {
    country: data.country,
    director: data.director,
    duration: data.duration,
    year: data.year,
    description: data.description,
    image: `https://api.nomoreparties.co${data.image.url}`,
    trailer: data.trailerLink,
    thumbnail: `https://api.nomoreparties.co${data.thumbnail}`,
    movieId: JSON.stringify(data.id),
    nameRU: data.nameRU,
    nameEN: data.nameEN
  };
  const handleAdd = () => {
    add(postData);
  };
  const handleRemove = () => {
    remove(data);
  };
  return (
    <li className='movie-card'>
      <div className='movie-card-container'>
        <div className='movie-card__wrapper'>
          <h2 className='movie-card__info-text'>{data.nameRU}</h2>
          <p className='movie-card__duration'> {convertDuration(data.duration)}</p>
        </div>
        <button className='movie-card__button'>
          {<OwnedIcon
            owned={data._id}
            remove={handleRemove}
            add={handleAdd}
          />}
        </button>
      </div>
      <Link to={data.trailerLink} target="_blank" rel="noopener noreferrer">
        <img className="movie-card__image"
          src={
            data.image.url
              ? `https://api.nomoreparties.co${data.image.url}`
              : data.image
          }
          alt={data.nameRU}
        />
      </Link>
    </li>
  );
}

export default MoviesCard;