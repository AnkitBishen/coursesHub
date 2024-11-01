import React, { useState, useEffect } from "react";
import  AuthContext from "./AuthContext";

export default function AuthProvider({ children }) {
    const [contextUser, setContextUser ] = useState(null);
    const [userInfo, setUserInfo ] = useState(null);
    const [loading, setLoading] = useState(true);
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    function logout() {
      localStorage.removeItem('userAccessToken');
      setContextUser(null);
    }

    useEffect( () => {
      const userAccessToken = localStorage.getItem('userAccessToken');
      if (userAccessToken) {
        setContextUser(JSON.parse(userAccessToken));
        getdetails(JSON.parse(userAccessToken));
      } else {
        setRedirectToLogin(true);
      }
      setLoading(false);
    }, []);

    const getdetails = async (token)=> {
      const userInfoRes = await fetch('http://localhost:5000/api/auth/userinfo', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'auth-token': token.accessToken
        } 
      })  
      const userInfo = await userInfoRes.json();
      setUserInfo(userInfo);
    }
  
    return (
      <AuthContext.Provider value={{ contextUser, setContextUser, loading, redirectToLogin, userInfo }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
