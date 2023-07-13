import React from 'react'
import "./SignupScreen.css"
import { auth } from '../firebase';
// import { sign } from 'crypto';

function SignupScreen() {

    const emailRef=React.useRef(null);
    const passworfRef=React.useRef(null)


    function SignupScreen(){
        
        const register =(e)=> {
                e.preventDefault();

            auth.createUserWithEmailAndPassword(
                emailRef.current.values,
                passworfRef.current.value
            ).then((authUser)=>{
                console.log(authUser)
            }).catch((error)=>{
                alert(error.message)
            })

        };
        const signIn =(e)=>{
            e.preventDefault();
    
        }
           }

  return <div className='signupScreen'>

    <form>
      <h1>Sign In</h1>
      
      <input ref={emailRef} placeholder='Email ' type='email'/>
      <input ref={passworfRef} placeholder='password' type='password'/>
      <button onClick={SignupScreen.signIn} type='submit>'>Sign In</button>

      <h4>
            <span className='signupScreen__gray'>New to Netflix? </span>
        
         <span className='signupScreen__link' onClick={SignupScreen.register}>Sign Up Now</span></h4>
      </form>
    </div>;
  
}

export default SignupScreen
