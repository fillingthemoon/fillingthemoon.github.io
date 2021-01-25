import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

const Nav = () => {

  return (
    <div id="nav-container">
      <nav>
        <Link to="/about-me">
          <h1>Philemon Heng</h1>
        </Link>
        <br/>
        <ul id="nav-links">
          <li>
            <Link to="/about-me">about me</Link>
          </li>
          <li>
            <Link to="/work">work</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
