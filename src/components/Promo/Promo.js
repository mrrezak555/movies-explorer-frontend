import "./Promo.css"
import earthPhoto from '../../images/earth.svg'


function Promo() {
    return (
        <section className="promo">
            <div className="promo__contaner">
                <div className="promo__info">
                    <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                    <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <a href="#about-project" className="promo__link">Узнать больше</a>
                </div>
                <img className="promo__photo" src={earthPhoto} alt="Фото Земли"></img>
            </div>
        </section>
    );
}

export default Promo;