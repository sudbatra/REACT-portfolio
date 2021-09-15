import React from 'react';

function About() {
    return (
        <section className="container">
            <div className="row">
                <div className="col-12">
                <br />
                    <br />
                    <br />
                    <br />
                <h2 className="text">Resume</h2>
                <br />
                <p>Download my <a href={require(`../assets/downloads/sud-resume.pdf`).default} target="_blank">Resume</a> here</p>
                </div>
                <div className="col-4">
                    <h2 className="text">Front End Skills</h2>
                    <ul className="skillsList">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Media Queries</li>
                        <li>Responsive Design</li>
                        <li>Version Control (Git, TFS)</li>
                        <li>Testing/Debugging (Jest)</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h2 className="text">Back End Skills</h2>
                    <ul className="skillsList">
                        <li>API's</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>Handlebars.js</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>GraphQL</li>
                        <li>Apollo</li>
                        <li>MVC.net</li>
                        <li>XML</li>
                        <li>XSL</li>
                        <li>JSON</li>
                        <li>REST</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h2 className="text">Technologies</h2>
                    <ul className="skillsList">
                        <li>Github</li>
                        <li>GitHub Pages</li>
                        <li>Heroku</li>
                        <li>MySQL Workbench</li>
                        <li>Adobe Photoshop</li>
                        <li>Visual Studio 2019</li>
                        <li>Visual Studio Code</li>
                        <li>WalkMe</li>
                        <li>Visio</li>
                        <li>Insomnia</li>
                        <li>Robo 3T</li>
                        <li>Microsoft Suite</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;