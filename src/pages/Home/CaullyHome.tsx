import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import About from '@/pages/About/About'
import CaullyResume from '@/pages/Resume/CaullyResume';
import Projects from '@/pages/Projects/CaullyProjects';
import Art from '@/pages/Art/Art';

const CaullyHome = () => {
    return (
    <div>
      <section id="snapshot">
        <h1>Sweetnspicy</h1>
        <h2>Swen</h2>
      </section>

      <Navbar />

      <section id="about">
        <h2>About</h2>
      </section>

      <section id="experience">
        <CaullyResume /> 
      </section>

      <section id="projects">
        <Projects/>
      </section>

      <section id="art">
        <Art/>
      </section>
    </div>
  );
}

export default CaullyHome;