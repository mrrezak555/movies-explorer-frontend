import "./AboutProject.css"

function AboutProject() {
    return (
        <section className="about-project" id="about-project">
            <div className="about-project__bloks">
                <div className="about-project__container">
                    <h2 className="about-project__title">О проекте</h2>
                </div>
                <ul className="about-project__grid">
                    <li className="about-project__grid-item">
                        <h3 className="about-project__grid-title">Дипломный проект включал 5 этапов</h3>
                        <p className="about-project__grid-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </li>
                    <li className="about-project__grid-item">
                        <h3 className="about-project__grid-title">На выполнение диплома ушло 5 недель</h3>
                        <p className="about-project__grid-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </li>
                </ul>
                <div className="about-project__line">
                    <p className="about-project__line-backend">1 неделя</p>
                    <p className="about-project__line-frontend">4 недели</p>
                    <p className="about-project__title-backend">Back-end</p>
                    <p className="about-project__title-frontend">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;