import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import caullylogo from '@assets/LacyLogo.png'
import fredlogo from '@assets/SkitLogo.png'


import About from './pages/About/About';
import Home from './pages/Home/Home';
import FredResume from './pages/Resume/FredResume';
import CaullyResume from './pages/Resume/CaullyResume';
import ProjectHome from './pages/Projects/ProjectHome';
import Art from './pages/Art/Art';

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li className='dropdown'>Resumes
              <div className="dropdown-content">
                <a href="#"><Link to="/resume-caully">Caully's Resume</Link></a>
                <a href="#"><Link to="/resume-fred">Fred's Resume</Link></a>
              </div>
            </li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/art">Art Studio</Link></li>
            <li>
              <a href="https://github.com/sweetnspicy" target="_blank">
                <img src={caullylogo} className="logo caully" alt="Cauldierre's logo" />
              </a>
            </li>
            <li className='navLogo'>
              <a href="https://github.com/frederic-yao" target="_blank">
                <img src={fredlogo} className="logo fred" alt="Fred's logo" />
              </a>
            </li>
          </ul>
        </nav>
        <div className='navAdjust'></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume-caully" element={<CaullyResume />} />
          <Route path="/resume-fred" element={<FredResume />} />
          <Route path="/projects" element={<ProjectHome />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
