import React, { createContext, useContext, useState } from 'react';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null);

  const setRoleAndNavigate = (selectedRole, navigation) => {
    setRole(selectedRole);
    navigation.navigate('Main');
  };

  return (
    <RoleContext.Provider value={{ role, setRoleAndNavigate }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};
