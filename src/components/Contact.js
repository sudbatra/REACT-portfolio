import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, fas, faMobileAlt, faEnvelope, faTree } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas);

library.add(fas, faEnvelopeSquare, faMobileAlt);

function About() {
    return (
        <section className="container">
            <div className ="row">
                 <div className ="col-6">
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2 className="text">Contact Me</h2>
                    <br />
                    <FontAwesomeIcon icon={faEnvelope} size="3x" color="#000" />
                        <p>sudhanshubatra.19@gmail.com</p>
                    <FontAwesomeIcon icon={faMobileAlt} size="3x" color="#000" />
                    <p>416.902.9121</p>
                 </div>
                 <div className ="col-6">
                    <img className="pic img-fluid" src={require('../assets/images/sud.png').default} alt="Sud Batra" />
                 </div>

            </div>
        </section>
    );
};

export default About;