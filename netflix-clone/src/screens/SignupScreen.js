import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { signInWithEmailAndPassword } from 'firebase/auth';
import "./SignupScreen.css";
import { auth } from '../firebase';

function SignupScreen() {
    const emailRef = React.useRef(null);
    const passwordRef = React.useRef(null);

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
    };

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
    };

    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email ' type='email'/>
                <input ref={passwordRef} placeholder='password' type='password'/>
                <button onClick={signIn} type='submit'>Sign In</button>
                <h4>
                    <span className='signupScreen__gray'>New to Netflix? </span>
                    <span className='signupScreen__link' onClick={register}>Sign Up Now</span>
                </h4>
            </form>
        </div>
    );
}

export default SignupScreen;