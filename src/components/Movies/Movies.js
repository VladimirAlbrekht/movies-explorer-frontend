import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import * as moviesApi from '../../utils/MoviesApi';
import { filterMovies, filterShortMovies, changeMovies } from '../../utils/utils';


function Movies({ onLikeClick, savedMoviesList, onDeleteClick }) {

  const forCheckbox = localStorage.getItem('shortFilms') === 'on' ? 'on' : 'off';

  // состояния запросов
  const [searchQuery, setSearchQuery] = React.useState('');
  const [shortFilms, setShortFilms] = React.useState(forCheckbox);
  // состояния фильмов
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [allMovies, setAllMovies] = React.useState([]);
  // состояния вспомогательные
  const [isNothingFound, setIsNothingFound] = React.useState(false);
  const [isMoviesLoaging, setIsMoviesLoaging] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  // ф-я фильтрации массива и установки его в хранилище и стейт
  function handleSetFilteredMovies(movies, query, checkbox) {
    const moviesList = filterMovies(movies, query);
    setFilteredMovies(checkbox === 'on' ? filterShortMovies(moviesList) : moviesList);
    localStorage.setItem('movies', JSON.stringify(moviesList));
  }

  // ---ОБРАБОТЧИКИ---
  // обработчик отправки формы
  function handleSearchSubmit(value) {
    setIsMoviesLoaging(true);
    setSearchQuery(value);
    localStorage.setItem('searchQuery', value);
    localStorage.setItem('shortFilms', shortFilms);

    if (!allMovies.length) {
      moviesApi.getMovies()
        .then((data) => {
          changeMovies(data);
          setAllMovies(data);
          handleSetFilteredMovies(data, value, shortFilms);
        })
        .catch((err) => {
          setIsError(true);
          console.log(err);
        })
        .finally(() => setIsMoviesLoaging(false))
    } else {
      handleSetFilteredMovies(allMovies, value, shortFilms);
      setIsMoviesLoaging(false);
    }
  }

  // обработчик клика по радиокнопке
  function handleShortFilms(e) {
    setShortFilms(e.target.value);
    localStorage.setItem('shortFilms', e.target.value);
  }

  // обработчик устновки значения, когда ничего не найдено
  function handleCheckFilteredMovies(arr) {
    arr.length === 0 ? setIsNothingFound(true) : setIsNothingFound(false);
  }

  // ---ЭФФЕКТЫ---
  // проверяем есть ли данные в хранилище
  React.useEffect(() => {
    const arr = JSON.parse(localStorage.getItem('movies'));
    if (arr && !searchQuery) {
      setShortFilms(localStorage.getItem('shortFilms'));
      setFilteredMovies(shortFilms === 'on' ? filterShortMovies(arr) : arr);
      handleCheckFilteredMovies(arr);
    }
  }, [shortFilms, searchQuery])

  // по новому запросу фильтруем фильмы
  React.useEffect(() => {
    if (searchQuery) {
      const arr = filterMovies(allMovies, searchQuery, shortFilms);
      setFilteredMovies(arr);
      handleCheckFilteredMovies(arr);
    }
  }, [searchQuery, shortFilms, allMovies])

  // ---РАЗМЕТКА JSX---
  return (
    <React.Fragment>
      <section className='movies'>
        <div className='container'>
          <SearchForm
            onSearchClick={handleSearchSubmit}
            onCheckbox={handleShortFilms}
            shortFilms={shortFilms}
          />
          <MoviesCardList
            isLoading={isMoviesLoaging}
            list={filteredMovies}
            isEmptyList={isNothingFound}
            isError={isError}
            onLike={onLikeClick}
            onDelete={onDeleteClick}
            savedMovies={savedMoviesList}
          />
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Movies;