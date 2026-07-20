import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface UserContextValue {
  userName: string;
  setUserName: (name: string) => void;
}

const UserContext = createContext<UserContextValue>({
  userName: '',
  setUserName: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState('');

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components -- context hook lives with its provider
export const useUser = () => useContext(UserContext);
