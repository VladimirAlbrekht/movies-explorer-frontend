import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { getSavedMovieCard } from '../../utils/utils';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import Preloader from '../Preloader/Preloader';


function MoviesCardList({isLoading,
  list,
  isEmptyList,
  isError,
  onLike,
  onDelete,
  savedMovies,
  savedMoviesPage,
}) {

  const width = useWindowWidth();
  const [showList, setShowList] = React.useState([]);
  const [cardsShowParams, setCardsShowParams] = React.useState({ sum: 0, more: 0 });
  const [isMount, setIsMount] = React.useState(true);

  // ---ЭФФЕКТЫ---
  // задаем значения для отображения карточек при изменении ширины экрана
  React.useEffect(() => {
    if (width > 1331) {
      setCardsShowParams({ sum: 8, more: 4 });
    } else if (width <= 1331 && width > 1027) {
      setCardsShowParams({ sum: 12, more: 3 });
    } else if (width <= 1027 && width > 629) {
      setCardsShowParams({ sum: 8, more: 2 });
    } else if (width <= 629) {
      setCardsShowParams({ sum: 5, more: 2 });
    }
    return () => setIsMount(false);
  }, [width, isMount]);

  // задаем массив отображаемых карточек на странице всех фильмов
  React.useEffect(() => {
    if (list.length && !savedMoviesPage) {
      const res = list.filter((item, index) => index < cardsShowParams.sum);
      setShowList(res);
    }
  }, [list, savedMoviesPage, cardsShowParams.sum]);

  // ---ОБРАБОТЧИКИ---
  // обработчик клика по кнопке "Еще"
  function handleClickMoreMovies() {
    const start = showList.length;
    const end = start + cardsShowParams.more;
    const residual = list.length - start;

    if (residual > 0) {
      const newCards = list.slice(start, end);
      setShowList([...showList, ...newCards]);
    }
  };

  // ф-ия создания массива избранных карточек
  function getSavedMoviesPage() {
    return list.map((item) => (
      <MoviesCard
        key={item._id}
        card={item}
        savedPage={savedMoviesPage}
        onDelete={onDelete}
      />
    ))
  };

  // ф-ия создания массива стандартных карточек
  function getInitialMoviesPage() {
    return showList.map((item) => {
      const likedMovieCard = getSavedMovieCard(savedMovies, item.id);
      const likedMovieId = likedMovieCard ? likedMovieCard._id : null;
      return (
        <MoviesCard
          key={item.id}
          card={{ ...item, _id: likedMovieId }}
          onLike={onLike}
          onDelete={onDelete}
          liked={likedMovieCard ? true : false}
        />)
    })
  };

 //---РАЗМЕТКА JSX---
 return (
  <section className='movies-list'>
    {isLoading ? (
      <Preloader />
    ) : (
      isEmptyList || isError ? (
        <p className={`movies-list__message ${isError && 'movies-list__message_type_err'}`}>
          {isError ? `Во время запроса произошла ошибка. 
            Возможно, проблема с соединением или сервер недоступен.
            Подождите немного и попробуйте ещё раз.` : 'Ничего не найдено'}
        </p>
      ) : (
        <>
          <div className='movies-list__container'>
            {savedMoviesPage ? getSavedMoviesPage() : getInitialMoviesPage()}
          </div>
          <button
            className={`movies-list__more-btn button
              ${(savedMoviesPage || isEmptyList || showList.length === list.length) &&
              'movies-list__more-btn_hidden'}`
            }
            type='button'
            aria-label='Показать еще'
            onClick={handleClickMoreMovies}
          >
            Ещё
          </button>
        </>
      )
    )}
  </section>
);
}

export default MoviesCardList;