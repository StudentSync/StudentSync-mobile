import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const updateName = (newName) => {
    setName(newName);
  };

  return (
    <AuthContext.Provider value={{ name, updateName }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
