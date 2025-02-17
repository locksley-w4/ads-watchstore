import React, { createContext, useEffect, useId, useState } from "react";
import CryptoJS from "crypto-js";

// localStorage.setItem("userCredentials", JSON.stringify({}));
// localStorage.setItem("usersData", JSON.stringify({}));

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [isAuthError, setIsAuthError] = useState(null);
  const [authErrorMsg, setAuthErrorMsg] = useState(null);
  const [id, setId] = useState(null);

  function clearAuthError() {
    setIsAuthError(false);
    setAuthErrorMsg("");
  }

  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth") === "true");
    const _id = localStorage.getItem("userId");
    setId(_id !== "undefined" ? _id : null);
  }, []);

  async function logout() {
    setIsAuth(false);
    localStorage.setItem("isAuth", "false");
  }
  async function login(credit) {
    // input: {login, password}
    setIsAuthLoading(true);
    try {
      if (!credit.login || !credit.password)
        throw new Error("Enter your login and password.");
      const userCredentials = JSON.parse(
        localStorage.getItem("userCredentials")
      );
      if(!userCredentials) {
        localStorage.setItem("userCredentials", "{}");
      }
      const userData = userCredentials?.[credit.login];
      if (!userData)
        throw new Error("User is not found.");

      if (String(userData.password) === String(credit.password)) {
        setIsAuth(true);
        setIsAuthLoading(false);
        setIsAuthError(false);
        setAuthErrorMsg(null);
        localStorage.setItem("isAuth", "true");
        localStorage.setItem("userId", userData.userId);
        setId(userData.userId);
      } else if (userData) throw new Error("Incorrect password.");
      else throw new Error("Authentication error. Please, try again.");
    } catch (er) {
      setIsAuthLoading(false);
      setIsAuthError(true);
      setAuthErrorMsg(er.message);
    }
  }
  async function register({ email, password, fullName, phoneNumber }) {
    // input: {login, password}
    setIsAuthLoading(true);
    try {
      if (!email || !password) throw new Error("Enter new login and password.");

      const userCredentials = JSON.parse(
        localStorage.getItem("userCredentials") || "{}"
      );
      if (!userCredentials[email]) {
        // const crypto = require('crypto');
        const userId = CryptoJS.SHA256(email).toString();
        userCredentials[email] = { password, userId };
        localStorage.setItem(
          "userCredentials",
          JSON.stringify(userCredentials)
        );
        setIsAuth(true);
        setIsAuthLoading(false);
        setIsAuthError(false);
        setAuthErrorMsg(null);
        localStorage.setItem("isAuth", "true");
        localStorage.setItem("userId", userId);
        const userData = { userId, email, password, fullName, phoneNumber, cart: [] };
        const users = JSON.parse(localStorage.getItem("usersData") || "{}");
        users[userId] = userData;
        setId(userId);
        localStorage.setItem("usersData", JSON.stringify(users));
      } else
        throw new Error(
          "User already exists. Please login or choose different login."
        );
    } catch (er) {
      setIsAuthLoading(false);
      setIsAuthError(true);
      setAuthErrorMsg(er.message);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        isAuthLoading,
        isAuthError,
        authErrorMsg,
        userId: id,
        login,
        logout,
        register,
        clearAuthError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
