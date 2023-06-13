import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';


function Movies() {

  // ---РАЗМЕТКА JSX---
  return (
    <section className='section movies'>
      <div className='container'>
        <Navigation loggedIn={true}/>
        <SearchForm />
        <MoviesCardList />
      </div>
    </section>

  );
};

export default Movies;