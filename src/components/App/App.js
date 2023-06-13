import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProfilePage from '../ProfilePage/ProfilePage';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function App() {
  const [loading, setLoading] = useState(false);

  function handleFetchData() {
    setLoading(true);
  }

  return (
    <div className="App">
      
        <BrowserRouter>
       {/*  <Preloader loading={loading} /> */}
           <Routes>
             <Route path='/' element={<Main/>} />
             <Route path="/signin" element={<Login />} />
             <Route path="/signup" element={<Register />} />
             <Route path="/movies" element={<Movies onFetchData={handleFetchData} />} />
             <Route path="/saved-movies" element={<SavedMovies onFetchData={handleFetchData} />} />
             <Route path="/profile" element={<ProfilePage />} />
             <Route path="*" element={<PageNotFound />}/>
           </Routes>
           <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;