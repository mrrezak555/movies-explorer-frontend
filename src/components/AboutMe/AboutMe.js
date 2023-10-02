import "./AboutMe.css"
import kirillPhoto from '../../images/kirill.jpg'

function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-me__bloks">
                <div className="about-me__container">
                    <h2 className="about-me__title">Студент</h2>
                </div>
                <div className="about-me__elements">
                    <div className="about-me__info">
                        <h3 className="about-me__info-title">Кирилл</h3>
                        <p className="about-me__info-subtitle">Фронтенд-разработчик, 25 лет</p>
                        <p className="about-me__info-description">Я родился и живу в Москве, закончил физический факультет МГУ. Также имею второе высшее - ИТ факультет МГТУ. Я люблю волейбол, а ещё увлекаюсь гитарой. Иногда люблю кодить.
                            С 2020 года работаю в компании ВТБ на позиции системного аналитика. В свободное время воспитываю кошку по имени Пушинка.</p>
                        <a href="https://github.com/mrrezak555" className="about-me__info-link" target="_blank" rel="noreferrer">Github</a>
                    </div>
                    <img className="about-me__image" src={kirillPhoto} alt="Фото Кирилла"></img>
                </div>
            </div>
        </section>
    );
}

export default AboutMe; 