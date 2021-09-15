import React, { useState } from 'react';


function Portfolio() {

    const [projects] = useState([
        {
            image: 'Run-Buddy.JPG',
            alt: 'Run Buddy',
            title: 'Run Buddy',
            description: 'App helps you find the running buddy',
            code: 'HTML Advance CSS',
            url: 'https://sudbatra.github.io/run-buddy/',
            git: 'https://github.com/sudbatra/run-buddy'
        },   
        {
            image: 'workday-scheduler.JPG',
            alt: 'Workday-Scheduler',
            title: 'Workday-Scheduler',
            description: 'Code refactor of the original Horiseon site for accessibility and responsiveness.',
            code: '(HTML / CSS)',
            url: 'https://sudbatra.github.io/Work-day-scheduler/',
            git: 'https://github.com/sudbatra/Work-day-scheduler'
        },
        {
            image: 'budget.JPG',
            alt: 'Budget Tracker',
            title: 'Budget Tracker',
            description: 'Progressive web app that allows for adding and subtracting money from a budget.',
            code: '(Express / MySQL / Sequelize / dotenv)',
            url: 'https://cryptic-mountain-73454.herokuapp.com/',
            git: 'https://github.com/sudbatra/Budget-Tracker'
        },
        {
            image: 'blog-it.JPG',
            alt: 'Blog-it',
            title: 'Blog-It',
            description: 'Blog site where developers can publish posts and comment on other developer posts.',
            code: '(Express / MySQL / Sequelize / dotenv)',
            url: 'https://arcane-scrubland-87193.herokuapp.com/',
            git: 'https://github.com/sudbatra/blog-it'
        },
        {
            image: 'note-taker.JPG',
            alt: 'Note Taker',
            title: 'Note Taker',
            description: 'App that allows a user to add notes or tasks. Notes can be edited or removed as needed.',
            code: '(Express / Jest)',
            url: 'https://sud-note-taker.herokuapp.com/',
            git: 'https://github.com/sudbatra/note-taker'
        },
        {
            image: 'weather-dashboard.JPG',
            alt: 'Weather Dashboard',
            title: 'Weather Dashboard',
            description: 'Weather forecast application using Server-Side API,s. History is stored in localstorage.',
            code: '(OpenWeather API / HTML / CSS)',
            url: 'https://sudbatra.github.io/weather-dashboard/',
            git: 'https://github.com/sudbatra/weather-dashboard'
        },      
        {
            image: 'smart-fix.JPG',
            alt: 'smart-fix',
            title: 'smart-fix',
            description: 'Smart Fix is a platform for users and service providers to easily manage their requests. Navigate through your request via dashboard. ',
            code: '(jQuery / Moment.js / Express / )',
            url: 'https://floating-cove-91289.herokuapp.com/',
            git: 'https://github.com/groupsixzerotwo/smart-fix'
        },
        {
            image: 'coviinfo.JPG',
            alt: 'coviinfo',
            title: 'coviiinfo',
            description: 'Coviinfo is the app taht is designed to provide you with covid-19 related updates and news',
            code: '(HTML, CSS, JS, API)',
            url: 'https://group6-uot.github.io/uot-project1-group6/',
            git: 'https://github.com/Group6-UoT/uot-project1-group6'
        },
    ])

    return (

        <div className="container">
            <div className="row">         
                {projects.map((project, i) =>
                    <div className="col-4">
                        <div className="card">
                            <div className="#" key={i}>
                                <img className ="img-fluid portfolioPic" src={require(`../assets/images/${project.image}`).default} alt={project.alt} />
                                
                                <div className="card-body">
                                    <h2 className="card-title">{project.title}</h2>
                                    <p className="card-text">{project.description}<br /><span>{project.code}</span></p>
                                    <a href={project.url} target="_blank" rel="noreferrer">View Site</a>
                                    <br />
                                    <a href={project.git} target="_blank" rel="noreferrer">View GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                    
            </div>        
            
        </div>
    )
}

export default Portfolio;