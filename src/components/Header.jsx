import React from 'react';
import "./Header.component.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Lauren Camin-Calixto</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#welcome">Welcome</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;