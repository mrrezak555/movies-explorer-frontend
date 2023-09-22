import "./Techs.css"

function Techs() {
    return (
        <section className="techs">
            <div className="techs__bloks">
                <div className="techs__container">
                    <h2 className="techs__title">Технологии</h2>
                </div>
                <div className="techs__elements">
                    <h3 className="techs__elements-title">7 технологий</h3>
                    <p className="techs__elements-subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <ul className="techs__elements-grid">
                        <li className="techs__element">
                            <p className="techs__element-name">HTML</p>
                        </li>
                        <li className="techs__element">
                            <p className="techs__element-name">CSS</p>
                        </li>
                        <li className="techs__element">
                            <p className="techs__element-name">JS</p>
                        </li>
                        <li className="techs__element">
                            <p className="techs__element-name">React</p>
                        </li>
                        <li className="techs__element">
                            <p className="techs__element-name">Git</p>
                        </li>
                        <li className="techs__element">
                            <p className="techs__element-name">Express.js</p>
                        </li>
                        <li className="techs__element">
                            <p className="techs__element-name">mongoDB</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Techs;