import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext({ id: null, admin: null });
const AuthProvider = ({ children }) => {
  const [id, setId] = useState('');
  const [admin, setAdmin] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const idFromStorage = localStorage.getItem('id');
    const adminFromStorage = localStorage.getItem('admin');
    if (adminFromStorage) setAdmin(adminFromStorage);
    if (idFromStorage) setId(idFromStorage);
  }, []);

  const login = (id, admin) => {
    localStorage.setItem('id', id);
    localStorage.setItem('admin', admin);
    setId(id);
    setAdmin(admin);
    history.push('/offer');
  };

  const logout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('admin');
    setId(null);
    setAdmin(null);
    history.push('/login');
  };

  return (
    <AuthContext.Provider value={{ id, admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const withAuth = Component => props => {
  const value = useContext(AuthContext);
  return <Component auth={value} {...props} />;
};

export { AuthProvider, withAuth };