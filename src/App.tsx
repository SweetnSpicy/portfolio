import Home from './pages/Home/Home';

import './App.css'
import '@/components/Navbar.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CaullyHome from './pages/Home/CaullyHome';
import FredHome from './pages/Home/FredHome';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/caullyhome" element={<CaullyHome />} />
          <Route path="/fredhome" element={<FredHome />} />
        </Routes>
      </BrowserRouter>

      {/* Copyright info here just cuz */}
      {/* <div>
        <span className='text-3xl font-bold underline copyright'>Copyright (icon here) 2026</span>
      </div> */}
    </UserProvider>

  )
}

export default App
