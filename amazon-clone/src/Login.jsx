import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <div className="logoContainer">
          <img
            className="login__logo"
            src="https://cdn.pixabay.com/photo/2021/08/10/16/02/amazon-6536326_1280.png"
            alt="nexzon"
          />
        </div>
        <div className="login__container">
          <h1>Sign in</h1>
          <form>
            <h5>E-mail</h5>
            <input type="email" name="email" id="email" />
            <h5>Password</h5>
            <input type="password" name="password" id="password" />
            <button className="login__button">Sign in</button>
          </form>
          <p>
            By continuing, you agree to Nexzon's{" "}
            <span className="hoverLink">Conditions of Use</span> and{" "}
            <span className="hoverLink">Privacy Notice</span>.
          </p>
        </div>
        <div className="text-with-lines">
          <div className="line"></div>
          <span className="text">New to Nexzon?</span>
          <div className="line"></div>
        </div>

        <button className="signup__button">Create your Nexzon Account</button>
      </Link>
    </div>
  );
}

export default Login;
