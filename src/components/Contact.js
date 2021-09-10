import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    return (
        <section className="container">
            <div className="about">
                <div className="pic">
                    <img className="pic" src={require(`../assets/images/`).default} alt="Sud Batra" />
                </div>
                <div className="text">
                    <h2 className="mAll">Contact me</h2>
                    <div className="mAll">
                        <a href="mailto:sudhanshubatra.19@gmail.com">
                            <FontAwesomeIcon icon={["fas", "envelope-square"]} size="1x" color="#607d8b" />
                        </a> <a href="mailto:sudhanshubatra.19@gmail.com">sudhanshubatra.19@gmail.com</a>
                    </div>
                    <div className="mAll">
                        <div>
                            <FontAwesomeIcon icon={["fas", "mobile-alt"]} size="1x" color="#607d8b" /> +1 (416)-902-9121

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;