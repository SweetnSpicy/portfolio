import { useParams, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
import UserHome from './UserHome';
import fred from '../data/fred';
import caully from '../data/caully';

function UserLayout() {
  const { userId } = useParams();
  const { setUserName } = useUser();

  useEffect(() => {
    setUserName(userId ?? '');
  }, [userId, setUserName]);

  return (
    <div>
      <Routes>
        <Route index element={<UserHome data={userId === 'caully' ? caully : fred} />} />
      </Routes>
    </div>
  );
}

export default UserLayout;
