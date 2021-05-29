import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'

import { MemoryRouter } from 'react-router'

import Nav from './Nav'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'

import './style.css'

const App = () => {
  return (
    <MemoryRouter>
      <div id='app-div'>
        <div id='site-container'>
          <Nav />
          <div id='vl' />
          <Switch id='switch'>
            <Route replace path={['/', '/about-me']} exact component={AboutMe} />
            <Route replace path='/experience' exact component={Experience} />
            <Route replace path='/projects' exact component={Projects} />
            <Route replace path='/skills' exact component={Skills} />
          </Switch>
        </div>
      </div>
    </MemoryRouter>
  )
}

export default App