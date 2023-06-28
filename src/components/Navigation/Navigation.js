import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';


function Navigation({ loggedIn }) {

  const [isClicked, setIsClicked] = useState(false);

  //---ОБРАБОТЧИКИ---
  function handleMenuOpen() {
    setIsClicked(true)
  };

  function handleMenuClose() {
    setIsClicked(false)
  };

  //---РАЗМЕТКА JSX---
  return (
    <div className='menu-container'>
      <nav className={`menu ${isClicked ? 'menu_open' : ''}`}>
        {loggedIn ? (
          <>
            <button
              className={`button menu__btn ${isClicked ? 'button menu__btn_type_close' : 'menu__btn_type_burger'} `}
              onClick={isClicked ? handleMenuClose : handleMenuOpen}
            />
            <div className={`menu__cover ${isClicked ? 'menu__cover_active' : ''}`}>  </div>
            <div className={`menu__box ${isClicked ? 'menu__box_open' : ''}`}>
              <NavLink exact="true" to='/' className='link menu__film-link' activeclassname="active" onClick={handleMenuClose}>
                Главная
              </NavLink>
              <NavLink to='/movies'  className='link menu__film-link'  activeclassname="active" onClick={handleMenuClose}>
                Фильмы
              </NavLink>
              <NavLink to='/saved-movies'  className='link menu__film-link' activeclassname="active" onClick={handleMenuClose}>
                Сохраненные фильмы
              </NavLink>
              <Link to='/profile' className='menu__link menu__link_type_profile_active link' onClick={handleMenuClose}>
                Аккаунт
              </Link>
            </div>

            <Link to='/profile' className='menu__link menu__link_type_profile link'
              onClick={handleMenuClose}>
              Аккаунт
            </Link>
          </>
        ) : (
          <>
            <div className='menu__links'>
              <Link to='/signup' className='menu__link link'>Регистрация</Link>
              <Link to='/signin' className='menu__link menu__link_type_signin link'>Войти</Link>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navigation;