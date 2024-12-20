import React, { createContext, useState, FC, useContext } from "react";
import { storage } from "../services/localStorage.service.ts";

const AuthContext = createContext();
const AuthUpdateContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useAuthUpdate = () => {
  return useContext(AuthUpdateContext);
};

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<null | string>(storage.getUser);

  const handleChangeUser = (userName: string): void => {
    storage.saveUser(userName);
    setUser(userName);
  };

  return (
    <AuthContext.Provider value={user}>
      <AuthUpdateContext.Provider value={handleChangeUser}>
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  );
};
