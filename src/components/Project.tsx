import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
// import mock07 from '../assets/images/mock07.png';
// import mock08 from '../assets/images/mock08.png';
// import mock09 from '../assets/images/mock09.png';
// import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            {/* <div className="project">
                <a href="URL" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="URL" target="_blank" rel="noreferrer"><h2>TITLE</h2></a>
                <p>DESCRIPTION</p>
            </div>
            <div className="project">
                <a href="URL" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="URL" target="_blank" rel="noreferrer"><h2>TITLE</h2></a>
                <p>DESCRIPTION</p>
            </div>
            <div className="project">
                <a href="URL" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="URL" target="_blank" rel="noreferrer"><h2>TITLE</h2></a>
                <p>DESCRIPTION</p>
            </div>
            <div className="project">
                <a href="URL" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="URL" target="_blank" rel="noreferrer"><h2>TITLE</h2></a>
                <p>DESCRIPTION</p>
            </div> */}
            <div className="project">
                <a href="https://docs.google.com/presentation/d/1YEnSuNe4byp8yF9oYtojmKxADf4CyM-v/edit?usp=sharing&ouid=111448393799928732283&rtpof=true&sd=true" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://docs.google.com/presentation/d/1YEnSuNe4byp8yF9oYtojmKxADf4CyM-v/edit?usp=sharing&ouid=111448393799928732283&rtpof=true&sd=true" target="_blank" rel="noreferrer"><h2>Instagram Reel PM Case Study</h2></a>
                <p>By analyzing current market trends and user stories, I built a case study on instagram reels and their competitors, helping to improve a specific lacking feature.</p>
            </div>
            <div className="project">
                <a href="https://github.com/matthewstarks/notionbot" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/matthewstarks/notionbot" target="_blank" rel="noreferrer"><h2>Notion Bot</h2></a>
                <p>Using DiscordJS and NodeJS, I developed a discord bot to make integration between discord and notion simple for product managers who want to communicate with their team over both platforms.</p>
            </div>
            <div className="project">
                <a href="https://github.com/trenton125/Sudoku-Project" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/trenton125/Sudoku-Project" target="_blank" rel="noreferrer"><h2>Sudoku Project</h2></a>
                <p>Organizing, designing and coding a fully functional sudoku game powered by pygame that allows users to select difficulty and solve in any combination they would like.</p>
            </div>
            <div className="project">
                <a href="https://docs.google.com/presentation/d/1qc8sqvotdfCf_v-QUEFjS5lV_LJ-RAPh740lkAyPyyY/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://docs.google.com/presentation/d/1qc8sqvotdfCf_v-QUEFjS5lV_LJ-RAPh740lkAyPyyY/edit?usp=sharing" target="_blank" rel="noreferrer"><h2>Unison Autograder</h2></a>
                <p>Took on the role of product manager in making design decisions, user stories, mind maps and flowcharts along with acting as a project manager within the team.</p>
            </div>
            <div className="project">
                <a href="https://github.com/matthewstarks/SnakeAI" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/matthewstarks/SnakeAI" target="_blank" rel="noreferrer"><h2>Snake AI Game</h2></a>
                <p>Using pygame and pytorch, I created an agent controlled snake game that learns through a reinforcement algorithm and neural network to effectively learn snake in under 15 minutes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/matthewstarks/MERN_InternshipsTracker" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/matthewstarks/MERN_InternshipsTracker" target="_blank" rel="noreferrer"><h2>MERN Internship Tracker</h2></a>
                <p>Built a MERN (MongoDB, Express, React, Node) full stack web application that allows users to input, edit, track and timeline internships in a database with user authentication.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;