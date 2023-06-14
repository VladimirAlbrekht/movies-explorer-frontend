import './Profile.css';
import React from 'react';
import {useFormWithValidation} from '../../hooks/useFormWithValidation';
import InfoMessage from '../InfoMessage/InfoMessage';


function Profile({ onSignOut, infoMessage }) {

  const {values, errors, isValid, handleChange} = useFormWithValidation();
  const [isInputActive, setIsInputActive] = React.useState(false);



  
  // ---ОБРАБОТЧИКИ---
  // обработчик отправки формы
  function handleSubmit(e) {
   console.log('Сохранены изменения')
  };

  // обработчик для разблокирования полей ввода
  function handleRedactClick() {
    setIsInputActive(true);
  };

  // ---РАЗМЕТКА JSX---
  return (
    <div className='profile'>
      <div className='profile__box'>
        <h2 className='profile__title'>{`Привет, Виталий!`}</h2>
        <form className='profile__form' onSubmit={handleSubmit}>
          <label className='profile__label'>Имя
            <input
              value={values.name || 'Виталий'}
              onChange={handleChange}
              type='text'
              className='profile__input'
              name='name'
              minLength='2'
              maxLength='30'
              required
              id='name'
              disabled={!isInputActive}
            />
            <span id="name-error" className='profile__error'>
              {errors.name ? `Что-то пошло не так...` : ''}
            </span>
          </label>
          <label className='profile__label'>Email
            <input
              value={values.email || 'dvsvv@mail.ru'}
              onChange={handleChange}
              type='email'
              className='profile__input'
              name='email'
              minLength='2'
              maxLength='30'
              required
              id='email'
              disabled={!isInputActive}
            />
            <span id='email-error' className='profile__error'>
              {errors.email ? `Что-то пошло не так...` : ''}
            </span>
          </label>

          <InfoMessage {...infoMessage} />
          
          {isInputActive ? (
            <button
              className={`profile__btn profile__btn_type_submit link`}
              type='submit'
              disabled={!isValid }
            >
              Сохранить
            </button>
          ) : (
            <>
            <button
              className={`profile__btn profile__btn_type_redact link`}
              type='button'
              onClick={handleRedactClick}
            >
              Редактировать
            </button>
            <button
              className='profile__btn profile__btn_type_logout link'
              type='button'
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </button>
            </>
          )}             
        </form>
      </div> 
    </div>
  );
};
  
export default Profile;