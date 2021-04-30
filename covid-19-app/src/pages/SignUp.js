import React, { useCallback } from "react";
import { Link } from 'react-router-dom';
import fire from "../config/fire";

import '../CSS/App.css';

function SignUp({ history }) {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await fire
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);

        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="login-main">
      <form onSubmit={handleSignUp}>
      <h1>Sign up</h1>
      <br/>
        <label>
          Email
        </label>
        <input name="email" type="email" placeholder="Email" />
        <label>
          Password
        </label>
        <input name="password" type="password" placeholder="Password" />
        <button className="mainLogin-btn" type="submit">Sign Up</button>
        <p className="login-redirect">Have an account already?</p><Link to="/signin"><p>Sign in here</p></Link>
      </form>
    </div>
  );
}

export default SignUp;