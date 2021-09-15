import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, fas, faMobileAlt, faEnvelope, faTree } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
library.add(fas);

library.add(fas, faEnvelopeSquare, faMobileAlt);

function Footer() {
    return (

        <footer id="contact">
            <div>
                <a href="mailto:sudhanshubatra.19@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} size="3x" color="#000" />
                </a>
            </div>
            <div>
                <a href="https://github.com/sudbatra" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="3x" color="#000" />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/sudhanshu-batra-548167109/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} size="3x" color="#000" />
                </a>
            </div>
            <div>
                <a href="https://linktr.ee/djsud" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTree} size="3x" color="#000" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;