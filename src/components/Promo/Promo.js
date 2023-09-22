import "./Promo.css"
import earthPhoto from '../../images/earth.svg'


function Promo() {
    return (
        <section className="promo">
            <div className="promo_contaner">
                <div className="promo__info">
                    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                    <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <a href="#about-project" className="promo__link"><button className="promo__button">Узнать больше</button></a>
                </div>
                <img className="promo__photo" src={earthPhoto} alt="Фото Земли"></img>
            </div>
        </section>
    );
}

export default Promo;