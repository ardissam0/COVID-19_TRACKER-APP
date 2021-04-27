import React, { useCallback } from "react";
import fire from "./fire";

import './App.css';

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
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button className="mainLogin-btn" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;