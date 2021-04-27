import React, {useState, useEffect} from 'react';
import fire from './fire'; 
import LoginMain from './Login-main';
import Home from './Home';
import './App.css';

const Login = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => {
                switch(error.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(error.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(error.message);
                        break;
                }
            });
    };

    const handleSignup = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error => {
                switch(error.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(error.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(error.message);
                        break;
                }
            });
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, [])

        return (
            <div>
                {user ? (
                    <>
                    <Home />
                    </>
                ) : (
                    <div className="Login__page">
                    <LoginMain
                        email={email} 
                        setEmail={setEmail} 
                        password={password} 
                        setPassword={setPassword} 
                        handleLogin={handleLogin} 
                        handleSignup={handleSignup} 
                        hasAccount={hasAccount} 
                        setHasAccount={setHasAccount} 
                        emailError={emailError} 
                        passwordError={passwordError} 
                    />
                </div>
                )}
            </div>
        );
};

export default Login;