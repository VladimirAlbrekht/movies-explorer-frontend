import './Footer.css';

function Footer() {
    return (
            <footer className="footer">
                <div className='container'>
                    <div className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</div>
                    <div className="footer__container">
                        <div className="footer__copyright">© 2020</div>
                        <div className="footer__links">
                            <a href="https://practicum.yandex.ru" target="_blank" className="link footer__link">Яндекс.Практикум</a>
                            <a href="https://github.com/VladimirAlbrekht" target="_blank" className="link footer__link">Github</a>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer;

