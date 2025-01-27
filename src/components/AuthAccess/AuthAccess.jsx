import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { Link } from "react-router-dom";
import "./AuthAccess.css"

const AuthAccess = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) return children;

  return (
    <div className="auth-error-page">
      <div className="auth-error-page__box">
        <p>
          You need to be logged in to access this page. Please{" "}
          <Link to="login">Log in</Link> or <Link to="signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default AuthAccess;
