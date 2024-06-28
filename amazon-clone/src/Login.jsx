import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db, auth } from "./firebase.js";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let signIn = (e) => {
    e.preventDefault();
    console.log("signing In");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  let register = (e) => {
    e.preventDefault();
    console.log("working");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (userCredential) {
          navigate("/");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
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
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login__button" onClick={signIn}>
            Sign in
          </button>
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

      <button className="signup__button" type="submit" onClick={register}>
        Create your Nexzon Account
      </button>
    </div>
  );
}

export default Login;
