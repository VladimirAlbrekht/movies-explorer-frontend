import { BASE_URL } from "./constants";

// --- КЛАСС ДЛЯ ОТПРАВКИ ЗАПРОСОВ НА СЕРВЕР ПРИЛОЖЕНИЯ ---
class MainApi {
    constructor({
        baseUrl,
        headers
    }) {
        this._baseUrl = baseUrl;
        this._userUrl = `${this._baseUrl}/users/me`;
        this._moviesUrl = `${this._baseUrl}/movies`;
        this._headers = headers;
    };

    _getResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }


    register(name, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        }).then((res) => this._getResponse(res));
    };


    login(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password,
            }),
        }).then((res) => this._getResponse(res));

    };


    checkToken() {
        return fetch(this._userUrl, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: 'include'
        }).then((res) => this._getResponse(res));
    };


    signOut() {
        return fetch(`${this._baseUrl}/signout`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: 'include',
        }).then((res) => this._getResponse(res));
    };


    //метод получения информации о пользователе с сервера
    getUserData() {
        return fetch(this._userUrl, {
            headers: this._headers,
            credentials: 'include',
        }).then((res) => this._getResponse(res));
    }

    // метод сохранения отредактированных данных пользователя на сервере
    updateUserProfile(name, email) {
        return fetch(this._userUrl, {
            method: 'PATCH',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                name,
                email,
            })
        })
            .then((res) => this._getResponse(res));
    };

    // метод получения избранных пользователем фильмов с сервера
    getUsersMovies() {
        return fetch(this._moviesUrl, {
            headers: this._headers,
            credentials: 'include',
        })
            .then((res) => this._getResponse(res));
    };

    // метод добавления нового фильма в избранное (создание карточки)
 saveNewMovie({
      country,
      director,  
      duration,
      year,
      description,
      image,
      trailerLink,
      nameRU,
      nameEN, 
      thumbnail,
      id,
     }
      ) {  
      
      return fetch(this._moviesUrl, {
        method: 'POST',
        headers: this._headers,
        credentials: 'include', 
        body: JSON.stringify({
          country,
          director, 
          duration,
          year, 
          description,
          image,
          trailerLink,
          nameRU: nameRU,
          nameEN: nameEN, 
          thumbnail,
          movieId: id,        
        })     
      }).then(res => this._getResponse(res));
      
   }

    //метод удаления карточки пользователя с сервера
    deleteMovie(movieId) {
        return fetch(`${this._moviesUrl}/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
            credentials: 'include',
        })
            .then((res) => this._getResponse(res));
    };
}

//создаем экземпляр класса
const mainApi = new MainApi({
    baseUrl: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

export default mainApi;