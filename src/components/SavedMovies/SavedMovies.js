import './SavedMovies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';
import Footer from '../Footer/Footer';

function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);

  //обработчик клика по кнопке удаления сохраненного фильма
  function handleDeleteMovie(movie) {
    const newSavedMovies = savedMovies.filter((m) => m.movieId !== movie.movieId);
    setSavedMovies(newSavedMovies);
  }

  return (
    <React.Fragment>
      <section className='section saved-movies'>
        <div className='container'>
          <Navigation loggedIn={true} />
          <SearchForm />
          <MoviesCardList savedPage={true} movies={savedMovies} onDelete={handleDeleteMovie} />
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default SavedMovies;