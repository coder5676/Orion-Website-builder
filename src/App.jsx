import react from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

import Card from './components/card';
import Feedback from './components/feedback';
import Canvas from './canvas';
import Home from './home';
import Land from './landingpage';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import Footer from './components/footer';
import ScrollToTop from './scrolltotop';

function App() {
  const id=useParams();
  console.log(id.usid);
  const [isopen,opentoggle]=useState(false);
  const [selproject,setselproject]=useState(false);
  
  const togglesidebar=()=>{
   opentoggle(!isopen);
  }
  const propbutarray=[
    
    {
      id:"sidbut2",
      text:"Landing pages",
      icon:<i className="fi fi-rr-home" ></i>,
      linkto:"/app",
      click:"",
     
    
    
    

    }, {
      id:"sidbut4",
      text:"Blog page",
      icon:<i className="fi fi-rr-signal-alt-2"></i>,
      linkto:"profile",
      click:""

    }, {
      id:"sidbut5",
      text:"Portfolio",
      icon:<i className="fi fi-rr-boxes"></i>,
      linkto:"library",
      click:""
    }, {
      id:"sidbut6",
      text:"Project plan",
      icon:<i className="fi fi-rr-paper-plane" ></i>,
      linkto:"",
      hrefto:"",
      click:""
    }
]
const butarray2=[
  {
      id:"sidbut7",
      text:"User feedback",
      icon:<i className="fi fi-rr-star"></i>,
      linkto:"feedback",
      click:"",
    
      
    },
    {
      id:"sidbut8",
      text:"Site settings",
      icon:<i className="fi fi-rr-settings" ></i>,
      linkto:"settings",
      click:"",
     
    },

   {
      id:"sidbut97",
      text:"Logout",
      icon:<i className="fi fi-rr-sign-out-alt" ></i>,
      linkto:"logout",
      click:""
    },
]
function initcanvas(e){
  e.stopPropagation();
  setselproject(false);
}


  return (
   <>
   <ScrollToTop/>
   <Navbar/>
   <button className='togglebut3'  onClick={togglesidebar}>{isopen?<i className="fi fi-rr-angle-small-left"></i>:<i className="fi fi-rr-angle-small-right"></i>}</button>

   <div className='maincontainerpar'>
   <Sidebar butarray={propbutarray} butarray2={butarray2} isopen={isopen} setselproject={setselproject} opentoggle={opentoggle}/>




   
    <div className='crp' style={{display:selproject?"flex":"none"}}>
      <h2 className='block' style={{marginTop:"85px"}} onClick={()=>{setselproject(false);opentoggle(true);}}><i className='fi fi-rr-cross-small'></i></h2>




<div className='se'>
  <h1>What type of web page are you looking for?</h1>
  <h2><h3 ><i className="fi fi-rr-badge-check"></i></h3>Portfolio page</h2><h2><h3><i className="fi fi-rr-badge-check"></i></h3>Landing page</h2><h2><h3 ><i className="fi fi-rr-badge-check"></i></h3>Blog / article page</h2><h2><h3 ><i className="fi fi-rr-badge-check"></i></h3>Data collection page</h2></div>
<p>Generate wireframe or select a template <i className="fi fi-rr-magic-wand"></i></p>



<div className='gy'>

<NavLink to={"canvas"} style={{textDecoration:"none"}} className='opencanvs' onClick={(e)=>initcanvas(e)}>Generate wireframe <i className='fi fi-rr-angle-right'></i></NavLink>
<button className='opentemplate'>Choose a template.</button>

</div>

    </div>
    
   <div className="maincontainer" style={{display:selproject?"none":"flex"}}>
   
   <Outlet/>
   </div>
   </div>
   </>
  );
}

export default App;
