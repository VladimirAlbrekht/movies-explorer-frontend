import './PageNotFound.css';
import { Link } from "react-router-dom";



function PageNotFound() {
  
    // ---ОБРАБОТЧИКИ---
    function handleClick() {
        window.history.back();
    };

  //---РАЗМЕТКА JSX---
  return (
    <section className='not-found-page'>
      <div className='not-found-page_container'>
        <h2 className='not-found-page__title'>404</h2>
        <p className='not-found-page__subtitle'>Страница не найдена</p>
      </div>
      <Link onClick={handleClick} className='link not-found-page__link'>Назад</Link>
    </section>
  );
};
  
export default PageNotFound;