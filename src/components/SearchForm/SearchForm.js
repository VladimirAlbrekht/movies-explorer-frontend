import './SearchForm.css';

function SearchForm() {
  // ---РАЗМЕТКА JSX---
  return (
    <div className='search-form'>
      <form className='search-form__form'>
        <div className='search-form__container'>
          <input type='text' placeholder='Фильм' className='search-form__input' name='query' required />
          <span id='email-error' className='search-form__error'></span>
          <button className='search-form__btn' type='submit'>Поиск</button>
        </div>
        <div className='search-form__filter-box'>
          <label className='search-form__filter'>
            <input className='search-form__radio search-form__radio_off'
              type='radio'
              name='shortFilms'
              value='off'
            />
            <input className='search-form__radio search-form__radio_on'
              type='radio'
              name='shortFilms'
              value='on'
            />
            <span className='search-form__switch'></span>
          </label>
          <p className='search-form__filter-name'>Короткометражки</p>
        </div> 
      </form>
    </div>
  );
};

export default SearchForm;