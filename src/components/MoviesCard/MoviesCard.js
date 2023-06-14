import './MoviesCard.css';
import { useState } from 'react';

function MoviesCard({ card, onLike, savedPage }) {
  const { nameRU, duration, thumbnail, saved } = card;
  const [isSaved, setIsSaved] = useState(saved);


  //обработчик клика по кнопке сохранения
  function handleSaveClick() {
    setIsSaved(!isSaved);
  }

  // преобразуем значение duration в формат "2ч 14м"
  const durationHours = Math.floor(duration / 60);
  const durationMinutes = duration % 60;
  const durationFormatted = `${durationHours}ч ${durationMinutes}м`;

  //определяем класс для кнопки в зависимости от значения поля saved и текущего роута
  let btnClassName = 'movie__btn button';
  if (isSaved && savedPage) {
    btnClassName += ' movie__delete-btn';
  } else {
    btnClassName += ' movie__save-btn';
  }
  if (isSaved && !savedPage) {
    btnClassName += ' movie__save-btn_active';
  }

  return (
    <li className='movie'>
      <div className='movie__container'>
        <a className='movie__link' href={card.trailer} target='_blank' rel='noreferrer'>
          <img className='movie__pic' src={thumbnail} alt={nameRU} />
        </a>
        <div className='movie__info'>
          <h2 className='movie__title'>{nameRU}</h2>
          <button
            className={btnClassName}
            type='button'
            aria-label={isSaved ? 'Удалить из сохраненных' : 'Сохранить в избранное'}
            onClick={handleSaveClick}
          />
        </div>
        <p className='movie__duration'>{durationFormatted}</p>
      </div>
    </li>
  );
}

export default MoviesCard;