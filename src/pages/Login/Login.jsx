import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import bgPic from "../../components/assets/login-pic.webp"; // photo from vecteezy website
import logo from "../../components/assets/Logo Mark.png";
import googleLogo from "../../components/assets/google-logo.webp";
import MyInput from "../../components/ui/MyInput/MyInput";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const {
    isAuth,
    clearAuthError,
    login: loginFn,
    isAuthLoading,
    isAuthError,
    authErrorMsg,
  } = useContext(AuthContext);

  function handleLogin(e) {
    e.preventDefault();
    loginFn({ login, password });
  }
  
  useEffect(() => {
    clearAuthError();
  }, []);
  
  useEffect(() => {
    if (isAuth) navigate("/", {replace: true});
  }, [isAuth]);

  if (isAuthLoading) {
    return "Loading..";
  }

  return (
    <div className="login-page">
      <div className="bg-pic">
        <img src={bgPic ?? null} alt="Background picture" />
      </div>
      <form>
        <div className="login-box">
          <div className="logo-container">
            <img src={logo ?? null} alt="" />
          </div>
          <h1>Let's Sign in</h1>
          <h3>Fill the details below to continue</h3>
          <MyInput
            label="Username or Email"
            value={login}
            setValue={setLogin}
            required
            className="login__input"
          >
            <button type="button" tabIndex="-1">
              <i className="fa fa-envelope" />
            </button>
          </MyInput>
          <MyInput
            required
            type="password"
            label="Password"
            value={password}
            setValue={setPassword}
            showHideBtn={true}
            className="login__input"
          />
          {isAuthError ? (
            <p className="error">
              {authErrorMsg}{" "}
              <Link to={"/signup"} className="signupLink">
                Sign up
              </Link>
            </p>
          ) : (
            ""
          )}
          <Link to="/reset-pass" className="pass-reset">
            Forgot password?
          </Link>
          <button type="submit" onClick={handleLogin} className="myBtn">
            Sign in
          </button>
          <span style={{ margin: "-10px auto", fontSize: 18 }}>OR</span>
          <button className="myBtn google">
            <img src={googleLogo} alt="Google" className="btnIcon" />
            <span>Sign in with google</span>
          </button>
          <Link to={"/signup"} className="signupLinkBottom">
            New to ADS Watch? <strong>Sign up</strong>
          </Link>
          <Link to={"/"}>
            <h3>Continue as a guest.</h3>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
