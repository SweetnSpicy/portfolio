import './Resume.scss'

function FredResume() {
    return (
        <div className="resume-wrapper">
            <div className="header">
                <h1>Frederic Yao</h1>
                <div className="contact-info">
                    <span>819-923-4238</span> |
                    <a href="mailto:fredericyao@outlook.com"> <u> Email</u> </a> |
                    <a href="https://www.linkedin.com/in/frederic-yao-814b45383/"> <u> LinkedIn</u> </a>|
                    <a href="https://github.com/Frederic-Yao"> <u> GitHub</u></a>
                </div>
            </div>
            <section className="education">
                <h2>EDUCATION</h2>
                <div className="education-entry">
                    <div className="entry-header">
                    <div>
                    <strong>McGill University</strong>
                    </div>
                    <div>Expected May 2029
                    </div>
                    </div>
                    <div className="entry-details">
                        <div><em>B.Eng. in Software Engineering(Co-op)</em></div>
                        <div><em>Montreal, QC</em></div>
                    </div>
                    <div className="education-entry">
                        <div className="entry-header">
                            <div>
                                <strong>Cegep Heritage College</strong>
                            </div>
                            <div>Aug. 2023 - May 2025</div>
                        </div>
                        <div className="entry-details">
                            <div><em>DEC in Science - Diplôme d'Études Collégiales</em></div>
                        <div><em>Gatineau, QC</em></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="education">
                <h2>EXPERIENCE</h2>
            </section>
        </div>
    );
}

export default FredResume;