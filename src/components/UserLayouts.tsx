import { useParams, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
import CaullyHome from '../pages/Home/CaullyHome';
import FredHome from '../pages/Home/FredHome';

function UserLayout() {
  const { userId } = useParams();
  const { setUserName } = useUser();
  
  useEffect(() => {
    setUserName(userId);
  }, [userId, setUserName]);
  
  return (
    <div>
      <Routes>
      <Route index element={userId === 'caully' ? <CaullyHome /> : <FredHome />} />
    </Routes>
    </div>
  );
}

export default UserLayout;