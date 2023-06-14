import './Portfolio.css';


function Portfolio() {

  // ---РАЗМЕТКА JSX---
  return (
      <section className='portfolio'>
        <div className='container'>
          <h3 className='portfolio__title'>Портфолио</h3>
             <a href='https://github.com/VladimirAlbrekht/how-to-learn' target='_blank' className='link portfolio__link'>
                <h3 className='portfolio__name'>Статичный сайт</h3>
                <p className='portfolio__icon'>↗</p>
             </a>
             <a href='https://github.com/VladimirAlbrekht/russian-travel' target='_blank' className='link portfolio__link'>
                <h3 className='portfolio__name'>Адаптивный сайт</h3>
                <p className='portfolio__icon'>↗</p>
             </a>
             <a href='https://mesto-15.nomoredomains.monster' target='_blank' className='link portfolio__link'>
                <h3 className='portfolio__name'>Одностраничное приложение</h3>
                <p className='portfolio__icon'>↗</p>
             </a>
        </div>
      </section>
  );
};
  
export default Portfolio;