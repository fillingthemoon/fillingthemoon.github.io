import React, { useState } from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from "./Nav";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";

import "./App.css";

const  App = () => {

  return (
    <Router>
      <div id="app-div">
        <div id="site-container">
          <Nav /> 
          <div id="vl"/>
          <HashRouter id="switch">
            <Route path="/" exact component={AboutMe} />
            <Route path="/about-me" exact component={AboutMe} />
            <Route path="/experience" exact component={Experience} />
            <Route path="/projects" exact component={Projects} />
          </HashRouter>
        </div>
      </div>
    </Router>
  );
}

export default App;
