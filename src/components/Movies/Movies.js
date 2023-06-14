import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';


function Movies() {

  // ---РАЗМЕТКА JSX---
  return (
<React.Fragment>
    <section className='movies'>
      <div className='container'>
        <Navigation loggedIn={true}/>
        <SearchForm />
        <MoviesCardList />
      </div>
    </section>
    <Footer/>
    </React.Fragment>
  );
};

export default Movies;