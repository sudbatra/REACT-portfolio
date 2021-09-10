import React from 'react';

function About() {
    return (
        <section className="container">
            <div className="about">
                <div className="pic">
                    <img className="pic" src={require(`../assets/images/`).default} alt="Sud Batra" />
                </div>
                <div className="text">
                    <h2>Full Stack Web Developer</h2>
                    <p className="mTopBottom">
                        Web Developer student studying to obtain a certificate in Full Stack Web Development from the University of Toronto. I am
                        a detail-oriented professional who has been consistently praised as quality-oriented by my
                        co-workers and management.</p>
                    <p className="mTopBottom">
                        Throughout the program I developed skill set directly relevant to web development, including strong knowledge of HTML, CSS,
                        and scripting languages; experience working with other developers remotely to accomplish desired results.
                    </p>
                    <p className="mTopBottom">
                        I am self-motivated and can work alone as well as with a team of developers to meet deadlines. I have
                        consistently demonstrated teamwork, problem-solving and interpersonal skills in every aspect of my previous role.</p>
                    <p className="mTopBottom">
                        I enjoy learning about new technologies and I am looking for an environment that will allow me to reach my full potential.   
                    </p>

                </div>
            </div>
        </section>
    );
};

export default About;