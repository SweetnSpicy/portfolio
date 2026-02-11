import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../contexts/UserContext';

import './Navbar.scss';


const Navbar = () => {

  const { userName } = useUser();

  return (
    <nav>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to={`/${userName}-experience`}>Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/art">Art Studio</Link></li>
        {/* add an up arrow or something here to return to top */}
      </ul>
    </nav>
  );
}

export default Navbar;