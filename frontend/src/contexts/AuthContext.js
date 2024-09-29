import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Add logic here to check if user is authenticated
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// export default AuthProvider;

