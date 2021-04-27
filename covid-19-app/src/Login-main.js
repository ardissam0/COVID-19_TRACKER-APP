import React from 'react';
import './App.css';

const LoginMain = (props) => {
    const {
    email,
    setEmail,
    password, 
    setPassword, 
    handleLogin,
    handleSignup,
    hasAccount, 
    setHasAccount,
    emailError,
    passwordError
 } = props;

    return(
        <section className="login-main">
            <div className="login-container">
                <label>Username </label>
                <input 
                type="text" 
                autoFocus required value={email} 
                onChange={e => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password </label>
                <input 
                type="password" 
                required value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer-login">
                    {hasAccount ? (
                        <>
                        <button className="mainLogin-btn" onClick={handleLogin}>Sign In</button>
                        <br/>
                        <p>Don't have an account?</p>
                        <button onClick={() => setHasAccount(!hasAccount)}> Sign Up</button>
                        </>
                    ) : (
                        <>
                        <button className="mainLogin-btn" onClick={handleSignup}>Sign Up</button>
                        <br/>
                        <p>Have an account?</p>
                        <button onClick={() => setHasAccount(!hasAccount)}> Sign In</button>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default LoginMain;