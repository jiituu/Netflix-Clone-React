import React from 'react'
import "./login.css"
import SignupScreen from './SignupScreen'
export default function Login() {


    const[signIn , setSignIn]=React.useState(false)

//    function handleClick(){
//     setSignIn(true)
//    }

  return (
    <div className='loginScreen'>

     <div className="logingScreen__background">
        <img
         className='loginScreen__logo'
        src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'/>
         <button onClick={()=>{setSignIn(true)}}
          className='loginScreen_button'>
            Sign In
         </button>

         <div className="loginScreen__gradient">
<div className="loginScreen__body">
    {signIn ?( 
<SignupScreen/>        ):(
    <>
       <h1> Unlimited films, TV programs and more.</h1>
        <h2> Watch anywhere, Cancel at any time.</h2>
        <h3> Ready to watch? Enter your email to 
            create or restart your membership </h3>
    <div className="loginScreen__input">
        <form>
            <input type='email'
            placeholder='Email Adress'/>
            <button className='loginScreen__getStarted' onClick={()=>{setSignIn(true)}}>GET STARTED </button>
        </form>

    </div>
    </>
    )}

</div>
         </div>


     </div>




    </div>
  )
}

