import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { movies } from '../../utils/constants';

function MoviesCardList({ savedPage, onDelete }) {
  // фильтруем массив фильмов, чтобы отобразить только сохраненные фильмы, если savedPage=true
  const filteredMovies = savedPage ? movies.filter((movie) => movie.saved) : movies;

  // создаем массив JSX элементов, содержащих компонент MoviesCard для каждого объекта в массиве filteredMovies
  const moviesCards = filteredMovies.map((movie) => (
    <MoviesCard
      key={movie.movieId}
      card={movie}
      onDelete={onDelete}
      savedPage={savedPage}
    />
  ));

  // ---РАЗМЕТКА JSX---
  return (
    <ul className='movie-list'>
        <div className='movie-list__container'>
          {moviesCards}
        </div>
      <button className='button movies-list__more-btn' type='button' aria-label='Показать еще'>Ещe</button>
    </ul>
  );
};

export default MoviesCardList;