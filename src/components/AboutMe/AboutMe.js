import './AboutMe.css';
import myPhoto from "../../images/my-photo.png";


function AboutMe() {
    // ---РАЗМЕТКА JSX---
    return (
        <section className='about-me'>
            <div className='container'>
                <h2 className='title'>Студент</h2>
                <div className='about-me__container'>
                    <div className='about-me__content'>
                        <h3 className='about-me__subtitle'>Виталий</h3>
                        <p className='about-me__info'>Фронтенд-разработчик, 30 лет</p>
                        <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                            начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        <a href="https://github.com/VladimirAlbrekht" target="_blank" className='link about-me__link'>Github</a>
                    </div>
                    <img className='about-me__photo' src={myPhoto} alt="Моя фотография" />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;