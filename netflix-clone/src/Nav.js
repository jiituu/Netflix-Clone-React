import React from 'react'
import "./Nav.css"
import { useNavigate } from "react-router-dom";

function Nav() {
  const[show, handleShow]=React.useState(false);
  
  const navigate=useNavigate();


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
        onClick={()=>navigate("/")}
        className='nav__logo'
        src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'/>
        
        <img
        onClick={()=>navigate("./Profile")}
        className='nav__avatar'
         src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'/>


        </div>

      
    </div>
  )
}

export default Nav
