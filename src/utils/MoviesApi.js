import { MOVIES_URL } from './constants';

// --- API ДЛЯ ОТПРАВКИ ЗАПРОСА НА СТОРОННИЙ СЕРВЕР ---
export function getMovies() {
  return fetch(MOVIES_URL)
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
};