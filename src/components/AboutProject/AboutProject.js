import './AboutProject.css';


function AboutProject() {

  // ---РАЗМЕТКА JSX---
  return (
      <section className='about-project' id='about-project'>
        <div className='container'>
          <h2 className='title'>О проекте</h2>
          <div className='about-project__container'>
             <div className='about-project__item'>
                <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
                <p className='about-project__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
             </div>
             <div className='about-project__item'>
                <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
                <p className='about-project__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
             </div>
          </div>
          <div className='about-project__grid-container'>
          <div className='about-project__backend'>
             <p className='about-project__time about-project__time_color'>1 неделя</p>
             <p className='about-project__name'>Backend</p>  
          </div>
          <div className='about-project__fontend'>
             <p className='about-project__time'>4 недели</p>
             <p className='about-project__name'>Front-end</p>  
          </div>
          </div>
        </div>
      </section>
  );
};
  
export default AboutProject;