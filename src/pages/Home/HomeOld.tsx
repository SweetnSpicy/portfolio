import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import CaullyHome from './CaullyHome';
import FredHome from './FredHome';
import Navbar from '@components/Navbar';
import About from '@pages/About/About'
import FredResume from '@pages/Resume/FredResume';
import CaullyResume from '@pages/Resume/CaullyResume';
import ProjectHome from '@pages/Projects/ProjectHome';
import Art from '@pages/Art/Art';

import caullylogo from '@assets/CaullyLogo.png'
import fredlogo from '@assets/FredLogo.png'

function HomeOld() {
    const [userName, setUserName] = useState('');

  return (
    <div className="main">
      <BrowserRouter>
        <Link to="/cauldierre">Cauldierre</Link>
        <Link to="/fred">Fred</Link>
        <div className='navAdjust'></div>

        <Routes>
          <Route path="/cauldierre" element={<CaullyHome />} />
          <Route path="/fred" element={
            <>
              <FredHome />
            </>
          } />

          <Route path="/about" element={<About />} />
          <Route path="/caully-experience" element={<CaullyResume />} />
          <Route path="/fred-experience" element={<FredResume />} />
          <Route path="/projects" element={<ProjectHome />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </BrowserRouter>

      <div className="cards-container">
        <div className="card">
          {/* add onclick to shift pages */}
          <h2>Cauldierre McKay</h2>
          <h4>Software Developer</h4>
          <p>5+ years of fullstack development experience</p>
        </div>
        <div className="card">
          <h2>Frederic Yao</h2>
          <h4>CS Kid</h4>
          <p>Something about CS kids</p>
        </div>
      </div>
      <a href="https://github.com/sweetnspicy" target="_blank">
        <img src={caullylogo} className="logo caully" alt="Cauldierre's logo" />
      </a>

      <a href="https://github.com/frederic-yao" target="_blank">
        <img src={fredlogo} className="logo fred" alt="Fred's logo" />
      </a>
    </div>
  );
}

export default HomeOld;