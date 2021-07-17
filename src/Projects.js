import React from 'react'

import img_001 from './imgs/projects/sgmangroves.png'
import img_002 from './imgs/projects/pomodoro-timer.png'
import img_003 from './imgs/projects/tic-tac-toe.png'
import img_004 from './imgs/projects/trbc.png'
import img_005 from './imgs/projects/memory-game.png'
import img_006 from './imgs/projects/the-office-script-search.png'

const projectsData = [
  {
    url: 'https://theofficescriptsearch.herokuapp.com',
    title: 'The Office Script Search App',
    imgSrc: img_006,
    description: 'This is a web app for searching for any line from the popular sitcom "The Office", built using React, Redux, AntDesign, Node, Express, MongoDB, and Heroku.',
  },
  {
    url: 'https://trbc.herokuapp.com',
    title: 'TRBC Website',
    imgSrc: img_004,
    description: 'This is a website for Thomson Road Baptist Church, built using React, Redux, AntDesign, Node, Express, MongoDB, and Heroku.',
  },
  {
    url: 'https://sgmangroves.com',
    title: 'SGMangroves',
    imgSrc: img_001,
    description: 'SGMangroves, a web map application that provides users with an overview of Singapore\'s mangroves, was built using JavaScipt, CSS, HTML, MapBox GL JS, QGIS, and OpenStreetMap.'
  },
  {
    url: 'https://fillingthemoon.github.io/pomodoro-timer/',
    title: 'Pomodoro Timer',
    imgSrc: img_002,
    description: 'This is a pomodoro timer web app built using JavaScipt, CSS, and HTML.',
  },
  {
    url: 'https://fillingthemoon.github.io/tictactoe/',
    title: 'Tic-Tac-Toe',
    imgSrc: img_003,
    description: 'This is a tic-tac-toe web app built using JavaScipt, CSS, and HTML.',
  },
  {
    url: 'https://fillingthemoon.github.io/memory-card/',
    title: 'Memory Game',
    imgSrc: img_005,
    description: 'This is a memory game built using React.',
  },
]

const Projects = () => {
  return (
    <div>
      <div id="content-container">
        <h2 id="content-title">projects</h2>
        <div id="projects">
          {projectsData.map((project, i) =>
            <a key={i} href={project.url} target='_blank' rel='noreferrer'>
              <div className='project'>
                <h1>{project.title}</h1>
                <img src={project.imgSrc} alt=''></img>
                <p>{project.description}</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects
