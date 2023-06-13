import './Profile.css';
import React from 'react';


function Profile({ currentUser }) {

  function onSignOut() {
    console.log('Выход из системы')
  }

  function onSubmit() {
    console.log('Изменения созранены')
  }


  // ---РАЗМЕТКА JSX---
  return (
    <section className='profile'>
      <div className='profile__box'>
        <h2 className='profile__title'>{`Привет, ${currentUser}!`}</h2>
        <form className='profile__form' onSubmit={onSubmit}>
          <label className='profile__label'>Имя
            <input
              type='text'
              className='profile__input'
              name='name'
              minLength='2'
              maxLength='30'
              required
              title='Разрешено использовать латиницу, кириллицу, пробел или дефис'
              pattern='^[A-Za-zА-Яа-яЁё /s -]+$'
              id='name'
            />
          </label>
          <label className='profile__label'>Email
            <input
              type='email'
              className='profile__input'
              name='email'
              minLength='2'
              maxLength='30'
              required
              id='email'
            />
          </label>
          <>
            <button
              className={`profile__btn profile__btn_type_redact link`}
              type='button'>Редактировать</button>
            <button
              className='profile__btn profile__btn_type_logout link'
              type='button'
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </button>
          </>
        </form>
      </div>

    </section>
  );
};

export default Profile;