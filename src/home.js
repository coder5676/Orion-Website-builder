import React, { useState } from "react";
import './App.css';
import Canvas from "./canvas";
import Card from "./components/card";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Topshow from "./components/topshow";
import Toolbox from "./components/toolbox";
import newd2 from './assets/newd2.png';
import newd3 from './assets/newd.png';
import newd4 from './assets/mnimg3.png'
import newd5 from './assets/imgf1.png'
import newd6 from './assets/imgtop2.webp'

function Home(){
  const [loader,setloader]=useState(false);
    const arr=["About","Learn","Personal","Business","Help"];
const butarray3=[
     { id: "cme1", text: "Themes", icon: <i className="fi-rr-briefcase"><p>Portfolio</p></i>, func: "any" },
    { id: "cme2", text: "Table", icon: <i className="fi-rr-apps-add"><p>Landing Page</p></i>, func: "any" },
    { id: "cme3", text: "Links", icon: <i className="fi-rr-magic-wand"><p>Personal Website</p></i>, func: "any" },
    { id: "cme4", text: "Contact Form", icon: <i className="fi-rr-pen-square"><p>PDF Editor</p></i>, func: "any" },
    { id: "cme5", text: "List", icon: <i className="fi-rr-pen-nib"><p>Blog and articles</p></i>, func: "any" },
    { id: "cme6", text: "Divider", icon: <i className="fi-rr-vector"><p>Advertisement</p></i>, func: "any" },
    { id: "cme7", text: "Image Carousel", icon: <i className="fi-rr-share"><p>Form</p></i>, func: "any" }, 
    { id: "cme8", text: "Image Carousel", icon: <i className="fi-rr-copy-image"><p>Corousel</p></i>, func: "any" }, 


]

    return(
        <>
        <div className="homemaincontainer">

        <div className="divtp">
      <div className="texttp"> <p>Featured</p>
        <h1>UIBRIX: Design companinon for everyone. </h1>
        <h2>Design, build websites get code, plan App designs collaborate with others and share url.</h2></div>
        <div className="imagetp">

        </div>
        </div>

        <h2 className="titles">Build using UIBRIX templates</h2>
       <div className="hdbox">

        
        </div>
        <h2 className="titles">My Designs</h2>

            <div className="hdbox">

              <div className="card">
                <div className="cardimg" style={{backgroundImage:`url(${newd2})`}}>

                </div>
                <button>Edit Design</button>
              </div>
                <div className="card">
                <div className="cardimg" style={{backgroundImage:`url(${newd3})`}}>

                </div>
                <button>Edit Design</button>
              </div>
                <div className="card">
                <div className="cardimg" style={{backgroundImage:`url(${newd4})`}}>

                </div>
                <button>Edit Design</button>
              </div>
                <div className="card">
                <div className="cardimg" style={{backgroundImage:`url(${newd5})`}}>

                </div>
                <button>Edit Design</button>
              </div>

        </div>
      <h2 className="titles">Learn in sandbox environment</h2>

        <div className="hdbox">
        </div>
        </div>
        </>
    )
}
export default Home;