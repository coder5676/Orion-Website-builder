import ReactDOM from 'react-dom/client';
import React from "react";
import { useState } from 'react';
import "../App.css";
import {NavLink} from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Sidebar({butarray,butarray2,isopen,setselproject,opentoggle}){
 const location=useLocation();
    if(location.pathname.includes("canvas")){
       return null;
    }
    function inityu(e){
        setselproject(true)
        opentoggle(false)
        e.stopPropagation();
        window.scrollTo(0,0);

    }
    const butsty={
         padding:"7px",
         width:"23px",
    borderRadius:"30px",
    backgroundColor:"white",
  color:"grey",
    marginLeft:"10px"
    }
    return (
        <>
        <div className='sidebar'  style={{ width: isopen ? "fit-content" : "40px" }}>
      
     
            <div className='fe2'></div>
             <p2 style={{display:isopen?"flex":"none",marginTop:"80px"}}>Get started</p2>

         <button onClick={(e)=>inityu(e)} className="tlu" style={{marginTop:isopen?"":"70px"}}><i className='fi fi-rr-plus'></i><p>Blank Canvas</p></button>
            {butarray.map((button,index)=>(
                 
              
                  <NavLink key={index} to={button.linkto} className="sidelink"><button style={button.buttonstyle}>{button.icon} <p style={button.textstyle}>{button.text}</p></button></NavLink>  
                   
           
            ))}
             <div className='fe2' style={{marginBottom:"5px"}}></div>
             <p2 style={{display:isopen?"flex":"none",marginTop:"30px"}}>Featured</p2>
                   
            <div className='ytr' style={{display:isopen?"flex":"none"}}>
             <button><i class="fi fi-rr-magic-wand" style={butsty}></i><p>Custom template</p></button>
             <button><i class="fi fi-rr-square-code" style={butsty}></i><p>Design to Code</p></button>
           
             <button><i class="fi fi-rr-vector" style={butsty}></i><p>App designs</p></button>

            </div>
            

           
            <div className='fe2'></div>
         <p2 style={{display:isopen?"flex":"none",marginTop:"30px"}}>Account and feedback</p2>
             {butarray2.map((button,index)=>(
              
                  <NavLink key={index} to={button.linkto} className="sidelink"><button style={button.buttonstyle}>{button.icon} <p style={button.textstyle}>{button.text}</p></button></NavLink>  
                   
            ))}
        </div>
        </>
    )

}
export default Sidebar;
