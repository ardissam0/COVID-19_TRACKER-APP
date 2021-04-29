import React, { useCallback } from "react";
import { Redirect } from "react-router";
import { Link } from 'react-router-dom';
import fire from "./fire";
import { useUser } from './hooks';

import './App.css';

function Login({ history }) {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fire
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const currentUser = useUser();

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-main">
      <form onSubmit={handleLogin}>
      <h1>Log in</h1>
      <br/>
        <label>
          Email
        </label>
        <input name="email" type="email" placeholder="Email" />
        <label>
          Password
        </label>
        <input name="password" type="password" placeholder="Password" />

        <button className="mainLogin-btn" type="submit">Log in</button>
        <p className="login-redirect">Don't have an account?</p><Link to="/signup"><p>Sign up here</p></Link>
      </form>
    </div>
  );
};

export default Login;