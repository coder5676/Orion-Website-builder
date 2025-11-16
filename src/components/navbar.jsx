import ReactDOM from 'react-dom/client';
import React, { useState } from "react";
import "../App.css";
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
function Navbar(){
    const location=useLocation();
    if(location.pathname.includes("canvas")){
        return null;
    }

    return(
        <>
        <div className='navtop'>
        <NavLink to={"/"} style={{textDecoration:"none",userSelect:"none"}}>
        <h1 ><i class="logoi" ></i>UIBRIX <div className='showdiv'></div></h1>
       
  </NavLink>
   <div className='moread' ><button>My templates <i class="fi fi-rr-angle-small-down"></i></button><button>Our Services <i class="fi fi-rr-angle-small-down"></i></button><button>Community <i class="fi fi-rr-angle-small-down"></i></button><button>Tutorials <i class="fi fi-rr-angle-small-down"></i></button></div>
      <div className='gr'>
     <button className='moreapps'><i class="fi fi-rr-apps"></i></button>
        <button className='signup'>Create account</button>
        
</div>
        </div>
        </>
    )

}
export default Navbar;