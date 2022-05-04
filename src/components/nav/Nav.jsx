import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <div class="nav_title">
        <h2>Annie Medley / Software Engineer</h2>
      </div>
      <div class="nav_links">
        <a href="#about">About Me</a>
        <a href="#resume">Resume</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Nav;