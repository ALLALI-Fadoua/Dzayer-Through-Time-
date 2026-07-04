import React, { createContext, useContext, useState, useEffect } from "react";
import * as authService from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(authService.isAuthenticated());

  useEffect(() => {
    if (authService.isAuthenticated() && !user) {
      setUser({ name: "مدير الموقع", username: "admin" });
    }
  }, [user]);

  async function login(username, password) {
    const res = await authService.login(username, password);
    setUser(res.user);
    setIsAuthenticated(true);
    return res;
  }

  function logout() {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth يجب أن يُستعمل داخل AuthProvider");
  return ctx;
}
