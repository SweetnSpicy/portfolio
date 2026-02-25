import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../contexts/UserContext';

import FredLogo from '../assets/FredLogo.png';
import CaullyLogo from '../assets/CaullyLogo.png';

import './Navbar.scss';

const Navbar = () => {

  const { userName } = useUser();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#snapshot" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Top</a>
          {/*Move to be a flaoting arrow button at bottom of screen maybe?? Or a paper airplane next to nav? */}
        </li>
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
        <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
        <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
        {userName === 'caully' && <li><a href="#art" onClick={(e) => { e.preventDefault(); scrollToSection('art'); }}>Art Studio</a></li>}
        <li style={{ marginLeft: 'auto' }}>
          <Link to="/">Home</Link>
          {/* gonna have to change this eventually lol */}
        </li>
        {userName === 'fred' && (
          <a href="https://github.com/frederic-yao" target="_blank">
            <img src={FredLogo} className="logo fred" alt="Fred's logo" />
          </a>
        )}
        {userName === 'caully' && (
          <a href="https://github.com/sweetnspicy" target="_blank">
            <img src={CaullyLogo} className="logo caully" alt="Cauldierre's logo" />
          </a>
        )}
      </ul>

    </nav>
  );
}

export default Navbar;