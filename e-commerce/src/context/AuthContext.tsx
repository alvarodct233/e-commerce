import { ReactNode, createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { User } from '../utils/interfaces/user';

interface IAuthContextProps {
  children?: ReactNode;
}

interface AuthContextType {
  user: User | null;
  setUser: Function;
}

const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: IAuthContextProps) {
  const userLocalStorage = JSON.parse(localStorage.getItem('user')!);
  const [user, setUser] = useState<User | null>(userLocalStorage);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children ? props.children : <Outlet />}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within a DataContextProvider');
  }

  return context;
}
