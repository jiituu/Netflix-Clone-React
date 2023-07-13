import React, { useEffect } from 'react'
import "./Nav.css"

function Nav() {
  const[show, handleShow]=React.useState(false);
     const transitionNav=()=>{
         if(window.scrollY>90){
          handleShow(true);
         } else{
          handleShow(false)
         }

     }
     React.useEffect(()=>{
      window.addEventListener("scroll", transitionNav)

         return() => window.removeEventListener("scroll",transitionNav)

     },[])



  return (
    <div className={ show ? 'nav nav__black' : "nav "}>
        <div className="nav__contents">
        <img
        className='nav__logo'
src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'/>        <img
        className='nav__avatar'
         src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'/>


        </div>

      
    </div>
  )
}

export default Nav
