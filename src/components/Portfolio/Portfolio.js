import './Portfolio.css';


function Portfolio() {

  // ---РАЗМЕТКА JSX---
  return (
      <section className='portfolio'>
        <div className='container'>
          <h3 className='portfolio__title'>Портфолио</h3>
             <div className='portfolio__item'>
                <h3 className='portfolio__name'>Статичный сайт</h3>
                <a href='https://github.com/VladimirAlbrekht/how-to-learn' target='_blank' className='link portfolio__link'>↗</a>
             </div>
             <div className='portfolio__item'>
                <h3 className='portfolio__name'>Адаптивный сайт</h3>
                <a href='https://github.com/VladimirAlbrekht/russian-travel' target='_blank' className='link portfolio__link'>↗</a>
             </div>
             <div className='portfolio__item'>
                <h3 className='portfolio__name'>Одностраничное приложение</h3>
                <a href='https://mesto-15.nomoredomains.monster' target='_blank' className='link portfolio__link'>↗</a>
             </div>
        </div>
      </section>
  );
};
  
export default Portfolio;