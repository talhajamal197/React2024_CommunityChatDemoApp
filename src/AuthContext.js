import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  // Load users from local storage if available
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
    }
    setLoading(false);
  }, []);

  const signup = (email, password) => {
    // Add new user to the list
    const newUser = { email, password };
    setUsers([...users, newUser]);
    // Update local storage
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
  };
  
  const login = (email, password) => {
    // Check if entered credentials match any stored user
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    } else {
      throw new Error('Incorrect email or password');
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
