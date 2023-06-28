import './Profile.css';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {useFormWithValidation} from '../../hooks/useFormWithValidation';
import InfoMessage from '../InfoMessage/InfoMessage';


function Profile({ onSignOut, onUpdate, infoMessage }) {

  const currentUser = React.useContext(CurrentUserContext);
  const {values, errors, isValid, handleChange, setValues, setIsValid} = useFormWithValidation();
  const [isInputActive, setIsInputActive] = React.useState(false);

  // ---ЭФФЕКТЫ---
  // получаем текущие значения для установки в поля формы
  React.useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [setValues, currentUser]); 

   // блокируем отправку формы если значения в полях и контексте одинаковые
   React.useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsValid(false);
    }
  }, [setIsValid, values, currentUser]);

  // блокируем поля если редактирование прошло успешно
  React.useEffect(() => {
    if (infoMessage.isShown && infoMessage.code === 200) {
      setIsInputActive(false);
    }
  }, [setIsInputActive, infoMessage.isShown, infoMessage.code]);

  
  // ---ОБРАБОТЧИКИ---
  // обработчик отправки формы
  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(values.name, values.email);
  };

  // обработчик для разблокирования полей ввода
  function handleRedactClick() {
    setIsInputActive(true);
  };
  
  // ---РАЗМЕТКА JSX---
  return (
    <div className='profile'>
      <div className='profile__box'>
        <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
        <form className='profile__form' onSubmit={handleSubmit}>
          <label className='profile__label'>Имя
            <input
              value={values.name || ''}
              onChange={handleChange}
              type='text'
              className='profile__input'
              name='name'
              minLength='2'
              maxLength='30'
              required
              id='name'
              disabled={!isInputActive}
              placeholder="Введите имя"
              title="Введите имя"
            />
            <span id="name-error" className='profile__error'>
              {errors.name ? `Что-то пошло не так...` : ''}
            </span>
          </label>
          <label className='profile__label'>Email
            <input
              value={values.email || ''}
              onChange={handleChange}
              type='email'
              className='profile__input'
              name='email'
              minLength='2'
              maxLength='30'
              required
              pattern="^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,6}$"
              id='email'
              disabled={!isInputActive}
              placeholder="Укажите ваш email"
              title="Укажите ваш email"
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
