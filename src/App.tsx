import Home from './pages/Home/Home';

import './App.css'
import '@/components/Navbar.scss'

function App() {
  return (
    <div>
      <Home />
      
          {/* Copyright info here just cuz */}
          <div>
            <span className='text-3xl font-bold underline copyright'>Copyright (icon here) 2026</span>
          </div>
    </div>

  )
}

export default App
