import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import About from '@/pages/About/About'
import Home from '@/pages/Home/Home';
import FredResume from '@/pages/Resume/FredResume';
import CaullyResume from '@/pages/Resume/CaullyResume';
import ProjectHome from '@/pages/Projects/ProjectHome';
import Art from '@/pages/Art/Art';

const CaullyHome = () => {
return(
    <div>
        <h2>C sPlash</h2>
        <Navbar />
        <div className='navAdjust'></div>

    </div>
);
}

export default CaullyHome;