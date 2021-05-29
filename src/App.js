import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Nav from './Nav'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Projects from './Projects'

import './style.css'

const App = () => {
  return (
    <Router>
      <div id='app-div'>
        <div id='site-container'>
          <Nav />
          <div id='vl' />
          <Switch id='switch'>
            <Route replace path={['/', '/about-me']} exact component={AboutMe} />
            <Route replace spath='/experience' exact component={Experience} />
            <Route replace path='/projects' exact component={Projects} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App