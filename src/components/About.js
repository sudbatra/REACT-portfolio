import React from 'react';

function About() {
    return (
        
        <section className="container">
            <div className ="row">
                 <div className ="col-6">
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2 className="text">Full Stack Web Developer</h2>
                    <br />
                    <p className="text">
                        Web Developer student studying to obtain a certificate in Full Stack Web Development from the University of Toronto. I am
                        a detail-oriented professional who has been consistently praised as quality-oriented by my
                        co-workers and management.
                        <br />
                        <br />
                        Throughout the program I developed skill set directly relevant to web development, including strong knowledge of HTML, CSS,
                        and scripting languages; experience working with other developers remotely to accomplish desired results.
                        <br />
                        <br />
                        I enjoy learning about new technologies and I am looking for an environment that will allow me to reach my full potential.  
                    </p>
                 </div>
                 <div className ="col-6">
                    <img className="pic img-fluid" src={require('../assets/images/sud.png').default} alt="Sud Batra" />
                 </div>

            </div>
        </section>
    );
};

export default About;