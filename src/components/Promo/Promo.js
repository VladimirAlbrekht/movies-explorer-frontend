import './Promo.css';
import Header from '../Header/Header';
import promoImage from '../../images/background.png'


function Promo() {

  // ---РАЗМЕТКА JSX---
  return (
    <section className='promo'>
      <div className='container'>
      <Header />
        <div className='promo__container'>
          <div className='promo__content'>
            <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
            <h2 className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
            <a href='#about-project'className='button promo__button'>Узнать больше</a>
          </div>
          <img
          className='promo__image'
          src={promoImage}
          alt="анимация веб-разработка"
        />
        </div>

      </div>
    </section>
  );
};

export default Promo;
