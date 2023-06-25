// ---ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ---

// ф-ия фильтрации фильмов по длительности
export function filterShortMovies(movies){
    return movies.filter((item) => item.duration < 40);
  };
  
  // ф-ия фильтрации фильмов по запросу и длительности
  export function filterMovies(movies, searchQuery, shortFilms) {
    const moviesByQuery =  movies.filter((item) => {
      const strRu = String(item.nameRU).toLowerCase();
      const strEn = String(item.nameEN).toLowerCase();
      const searchStr = searchQuery.toLowerCase().trim();
      return (strRu.indexOf(searchStr) !== -1 || strEn.indexOf(searchStr) !== -1);
    });
  
    if(shortFilms === 'on'){
      return filterShortMovies(moviesByQuery);
    }
    return moviesByQuery;
  };
  
  // ф-ия проверки ссылок изображений на осутствие и их преобразование
  export function changeMovies(movies) {
    movies.forEach(movie => {
      if(!movie.image){
        movie.image = 'https://g2.dcdn.lt/images/pix/kinas-76443525.jpg';
        movie.thumbnail = 'https://g2.dcdn.lt/images/pix/kinas-76443525.jpg'
      } else {
        movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
        movie.image = `https://api.nomoreparties.co${movie.image.url}`
      }
    });
  };
  
  // ф-ия получения сохраненной карточки фильма
  export function getSavedMovieCard(arr, id) {
    if(Array.isArray(arr)){
      return arr.find((item) => item.movieId === id);
    } else {
      console.error('Parameter "arr" is not an array');
      return null;
    }
  }
  
  // ф-ия преобразования времени
  export function getTimeFromMin(mins) {
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  };