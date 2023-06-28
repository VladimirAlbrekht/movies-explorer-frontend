import './MoviesCard.css';
import { getTimeFromMin } from '../../utils/utils';

function MoviesCard({ card, onLike, onDelete, liked, savedPage }) {

  //обработчик клика по кнопке сохранения
  function handleSaveClick() {
    onLike(card);
  }
  //обработчик клика по кнопке удаления
  function handleDeleteClick() {
    onDelete(card);
  }

  return (
    <li className='movie'>
      <div className='movie__container'>
        <a className='movie__link' href={card.trailer || card.trailerLink} target='_blank' rel='noreferrer'>
          <img className='movie__pic' src={`${card.image}`} alt='Фильм' />
        </a>
        <div className='movie__info'>
          <h2 className='movie__title'>{card.nameRU}</h2>
          <button
            className={`button movie__btn
          ${savedPage ? 'movie__delete-btn' : 'movie__save-btn'} 
          ${liked && !savedPage ? 'movie__save-btn_active' : ''}`}
            type='button'
            aria-label='Сохранить в избранное'
            onClick={savedPage || liked ? handleDeleteClick : handleSaveClick}
          />
        </div>
        <p className='movie__duration'>{getTimeFromMin(card.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;