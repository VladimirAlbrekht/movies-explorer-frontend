import './App.css';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';

import { SUCCESSFUL_CODE } from '../../utils/constants';
import mainApi from '../../utils/MainApi';

function App() {
  const navigate = useNavigate();

  // состояния авторизации пользователя и его данных
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  // состояния фильмов пользователя
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isError, setIsError] = React.useState(false);
  // состояния уведомлений пользователя 
  const [infoMessage, setInfoMessage] = React.useState({
    isShown: false,
    message: '',
    code: SUCCESSFUL_CODE,
  });

  const hiddenRoutes = ['/signup', '/signin'];


  // ---ЭФФЕКТЫ---
  // при логине, если получаем пользователя то обновляем стейты
  React.useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);
      mainApi.getUserData()
        .then((data) => {
          handleLoggedIn();
          setCurrentUser(data);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    }
    else {
      setIsLoading(false);
    }
  }, [loggedIn]);

  // при загрузке страницы получаем данные избранных пользователем фильмов
  React.useEffect(() => {
    if (loggedIn) {
      mainApi.getUsersMovies()
        .then((data) => {
          setSavedMovies(data);
          setIsError(false);
        })
        .catch(err => {
          setIsError(true);
          console.log(err);
        })
    }
  }, [loggedIn]);


  // ---ОБРАБОТЧИКИ---
  // обработчик установки стейта входа/логина пользователя
  function handleLoggedIn() {
    setLoggedIn(true);
  };

  // обработчик регистрации пользователя
  function handleRegister(name, email, password) {
    mainApi.register(name, email, password)
      .then((data) => {
        if (data) {
          handleLogin(email, password);
        }
      })
      .catch(({ message, statusCode }) => {
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          message,
          code: statusCode,
          type: 'register',
        });
      })
  };

  // обработчик авторизации пользователя
  function handleLogin(email, password) {
    setIsLoading(true);
    mainApi.login(email, password)
      .then(res => {
        handleLoggedIn();
        navigate('/movies');
      })
      .catch(({ message, statusCode }) => {
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          message,
          code: statusCode,
          type: 'login',
        });
      })
      .finally(() => setIsLoading(false))
  };

  // обработчик выхода пользователя
  function handleSignOut() {
    mainApi.signOut()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({});
        navigate("/");
      })
      .catch((err) => console.error(err));
  }

  // обработчик изменения данных пользователя
  function handleUpdateUser(name, email) {
    if (!loggedIn) {
      return;
    }

    mainApi.updateUserProfile(name, email)
      .then(data => {
        setCurrentUser(data);
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          type: 'profile',
        });
      })
      .catch(({ message, statusCode }) => {
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          message,
          code: statusCode,
          type: 'profile',
        });
      });
  }

  // обработчик добавления фильма в избранное
  function handleSaveMovie(movie) {
    const { _id, created_at, updated_at, ...movieData } = movie; // удаляем поле id из объекта фильма
    mainApi.saveNewMovie(movieData)
      .then(newCard => {
        setSavedMovies([newCard, ...savedMovies]);
      })
      .catch(err => console.log(err))
  };

  // обработчик удаления фильма из избранного
  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        const newMoviesList = savedMovies.filter((m) => m._id === movie._id ? false : true);
        setSavedMovies(newMoviesList);
      })
      .catch(err => console.log(err))
  };

  // обработчик сброса вывода сообщения с сервера
  function handleClickResetInfoMessage() {
    if (infoMessage.isShown) {
      setInfoMessage({
        ...infoMessage,
        isShown: false,
        message: '',
        type: '',
        code: SUCCESSFUL_CODE,
      });
    }
  };


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App' onClick={infoMessage.isShown ? handleClickResetInfoMessage : null}>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            {!hiddenRoutes.includes(window.location.pathname) && <Header loggedIn={loggedIn} onSignOut={handleSignOut} />}
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/movies' element={
                <ProtectedRoute
                  exact path='/movies'
                  loggedIn={loggedIn}
                  element={Movies}
                  savedMoviesList={savedMovies}
                  onLikeClick={handleSaveMovie}
                  onDeleteClick={handleDeleteMovie}
                />} />
              <Route path='/saved-movies' element={
                <ProtectedRoute
                  exact path='/saved-movies'
                  loggedIn={loggedIn}
                  element={SavedMovies}
                  list={savedMovies}
                  onDeleteClick={handleDeleteMovie}
                  isError={isError}
                />} />
              <Route path='/profile' element={
                <ProtectedRoute
                  exact path='/profile'
                  loggedIn={loggedIn}
                  element={Profile}
                  onSignOut={handleSignOut}
                  onUpdate={handleUpdateUser}
                  infoMessage={infoMessage}
                />} />

              <Route path='/signup' element=
                {loggedIn ? <Navigate to='/movies' /> : <Register onRegister={handleRegister} infoMessage={infoMessage} />} />
              <Route path='/signin' element=
                {loggedIn ? <Navigate to='/movies' /> : <Login onLogin={handleLogin} infoMessage={infoMessage} />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes></>)}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;