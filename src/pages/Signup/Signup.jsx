import React, { useContext, useEffect, useState } from "react";
import "./Signup.css";
import bgPic from "../../components/assets/signup-pic.png"; // photo from vecteezy website
import logo from "../../components/assets/Logo Mark.png";
import googleLogo from "../../components/assets/google-logo.webp";
import MyInput from "../../components/ui/MyInput/MyInput";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const {
    isAuth,
    clearAuthError,
    register,
    isAuthLoading,
    isAuthError,
    authErrorMsg,
  } = useContext(AuthContext);

  function handleSignup(e) {
    e.preventDefault();
    register({ email, password, fullName, phoneNumber});
  }
  useEffect(() => {
    clearAuthError()
  }, []);

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth]);

  if (isAuthLoading) {
    return "Loading..";
  }

  return (
    <div className="signup-page">
      <div className="bg-pic">
        <img src={bgPic ?? null} alt="Background picture" />
      </div>
      <form>
        <div className="signup-box">
          <div className="logo-container">
            <img src={logo ?? null} alt="" />
          </div>
          <h1>Let's Sign up</h1>
          <h3>Fill the details below to continue</h3>
          <MyInput
            label="Email"
            type="email"
            value={email}
            setValue={setEmail}
            required
          >
            <button type="button" tabIndex="-1">
              <i className="fa fa-user" />
            </button>
          </MyInput>
          <MyInput
            label="Full Name"
            value={fullName}
            setValue={setFullName}
            required
          >
            <button type="button" tabIndex="-1">
              <i className="fa fa-envelope" />
            </button>
          </MyInput>
          <MyInput
            label="Phone Number"
            value={phoneNumber}
            setValue={setPhoneNumber}
          >
            <button type="button" tabIndex="-1">
              <i className="fa fa-phone" />
            </button>
          </MyInput>
          <MyInput
            required
            type="password"
            label="Password"
            value={password}
            setValue={setPassword}
            showHideBtn={true}
          />
          {isAuthError ? <p className="error">{authErrorMsg} </p> : ""}
          <button type="submit" onClick={handleSignup} className="myBtn">
            Sign up
          </button>
          <Link to={"/signin"} className="signinLink">
            Joined us before? <strong>Sign in</strong>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
