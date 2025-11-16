import React, { useState } from "react";
import './App.css';
import './land.css';
import Canvas from "./canvas";
import Card from "./components/card";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Navbar from "./components/navbar";
function Land(){
    return (
        <>
        <Navbar></Navbar>
        <div className="herosection">
            <h1 className="j1">Visual builder for professionals.</h1>
           
            <div>
                <div className="j2">
                     

                </div>
                <h1 className="g2">Build responsive web pages and share.</h1>
                <button className="g14" >Explore Templates</button>
            </div>
            <div>
                 <div className="j4"></div>
                <h1 className="g6">Drag n Drop editor to build landing pages in minutes.</h1>
                <button className="g4">Get started</button>
            </div>
            <div>
                <div className="j15"></div>
               <div className="h8" style={{backgroundColor:"transparent",borderColor:"white"}}><h1 className="g16">Drag n Drop editor to build landing pages in minutes.</h1>
              <NavLink to={"./app"}><button className="g14">Get started</button></NavLink> </div>
            </div>
        </div>
   <div className="mainlanddiv2">
   <h1>Need help getting started ?</h1>
    <video controls></video>
    <div
    className="vdocont"
    >
        <div className="vdo">
            <div></div>
         <div>
            <p>Creating your sitemap using AI</p>
            <button >Watch <i className="fi fi-rr-play"></i></button>
          </div>
           
        </div>
        <div className="vdo">
            <div></div>
         <div>
            <p>Creating your sitemap using AI</p>
            <button >Watch <i className="fi fi-rr-play"></i></button>
          </div>
           
        </div>
        <div className="vdo">
            <div></div>
         <div>
            <p>Creating your sitemap using AI</p>
            <button >Watch <i className="fi fi-rr-play"></i></button>
          </div>
           
        </div>
        <div className="vdo">
            <div></div>
         <div>
            <p>Creating your sitemap using AI</p>
            <button >Watch <i className="fi fi-rr-play"></i></button>
          </div>
           
        </div>
        <div className="vdo">
            <div></div>
         <div>
            <p>Creating your sitemap using AI</p>
            <button >Watch <i className="fi fi-rr-play"></i></button>
          </div>
           
        </div>
    </div>

   </div>
       </>
    )
}
export default Land;