import Home from './pages/Home/Home';
import './App.css'
import '@/components/Navbar.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import UserLayout from './components/UserLayouts';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:userId/*" element={<UserLayout />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App