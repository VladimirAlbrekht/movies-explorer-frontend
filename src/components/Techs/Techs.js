import './Techs.css';


function Techs() {

  // ---РАЗМЕТКА JSX---
  return (
      <section className='technologies'>
        <div className='container'>
          <h2 className='title'>Технологии</h2>
          <div className='technologies__container'>
                <h3 className='technologies__subtitle'>7 технологий</h3>
                <p className='technologies__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
             </div>
          <ul className='technologies__list'>
            <li className='technologies__item'>HTML</li>
            <li className='technologies__item'>CSS</li>
            <li className='technologies__item'>JS</li>
            <li className='technologies__item'>React</li>
            <li className='technologies__item'>Git</li>
            <li className='technologies__item'>Express.js</li>
            <li className='technologies__item'>mongoDb</li>
        </ul>
        </div>
      </section>
  );
};
  
export default Techs;