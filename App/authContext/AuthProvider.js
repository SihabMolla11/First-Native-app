import React, { createContext } from 'react';
export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

  const contextInfo = {
    user: 'sihabmolla'
  }

  return (
    <AuthContext.Provider value={contextInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;