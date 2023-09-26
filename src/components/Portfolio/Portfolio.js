import "./Portfolio.css"
import pointer from '../../images/pointer.svg'

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__bloks">
                <h3 className="portfolio__title">Портфолио</h3>
                <ul className="portfolio__links">
                    <li>
                        <a href="https://github.com/mrrezak555/how-to-learn" className="portfolio__link" target="_blank" rel="noreferrer">
                            <p className="portfolio__link__text">Статичный сайт</p>
                            <img className="portfolio__link__pointer" src={pointer} alt="Стрелка" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/mrrezak555/russian-travel" className="portfolio__link" target="_blank" rel="noreferrer">
                            <p className="portfolio__link__text">Адаптивный сайт</p>
                            <img className="portfolio__link__pointer" src={pointer} alt="Стрелка" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/mrrezak555/react-mesto-api-full-gha" className="portfolio__link" target="_blank" rel="noreferrer">
                            <p className="portfolio__link__text">Одностраничное приложение</p>
                            <img className="portfolio__link__pointer" src={pointer} alt="Стрелка" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;