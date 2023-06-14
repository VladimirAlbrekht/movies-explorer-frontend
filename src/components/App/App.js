import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProfilePage from '../ProfilePage/ProfilePage';
import Preloader from '../Preloader/Preloader';


function App() {

  return (
    <div className="App">
      <Router>
       {/*  <Preloader/> */}
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;