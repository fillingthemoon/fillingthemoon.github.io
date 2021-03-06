import React from 'react'

import {
  Link
} from 'react-router-dom'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const Nav = () => {
  return (
    <div id="nav-container">
      <nav>
        <Link to="/"><h1><span id="phil">Phil</span>emon Heng</h1></Link>
        <br />
        <ul id="nav-links">
          <li><Link to="/about-me">about me</Link></li>
          <li><Link to="/experience">experience</Link></li>
          <li><Link to="/projects">projects</Link></li>
          <li><Link to="/skills">skills</Link></li>
        </ul>
        <div id="contact">
          <a
            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjzw5zKk7fuAhXDT30KHcDQAQIQFjAAegQIARAC&url=https%3A%2F%2Fsg.linkedin.com%2Fin%2Fphilemonheng&usg=AOvVaw0oSGmlBwqSpuTH4MabH5lw"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/fillingthemoon"
            target="_blank"
            rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="mailto:philemon.hsy@gmail.com"
            target="_blank"
            rel="noreferrer">
            <IoMail />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Nav
