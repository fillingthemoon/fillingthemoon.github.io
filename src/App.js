import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from "./Nav";
import AboutMe from "./AboutMe";
import Work from "./Work";
import Contact from "./Contact";

import "./App.css";

const  App = () => {

  return (
    <Router>
      <div id="app-div">
        <div id="site-container">
          <Nav /> 
          <div id="vl"/>
          <Switch id="switch">
            <Route path="/" exact component={AboutMe} />
            <Route path="/about-me" exact component={AboutMe} />
            <Route path="/work" exact component={Work} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
