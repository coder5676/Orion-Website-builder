import React, { Children, cloneElement, useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import "./canvas.css";

import { Rnd } from "react-rnd";
import Button from "./tempaltecont/button";
import { useRef } from "react";
import Toolbox from "./components/toolbox";
import "./components/comp.css";
import cloneDeep from "lodash/cloneDeep"
import { add, isString, set, transform } from "lodash";
import Settings from "./components/Settings";
import RenderComponent from "./Renderer";
import { NavLink } from "react-router-dom";
import Componentsbox from "./components";
import { useLocation } from "react-router-dom";
import RouteLoaderLogic from "./routerloader";
import html2canvas from "html2canvas";

import jsPDF from 'jspdf';
import Pdftools from "./pdftools";
function Canvassidebar({work,togglebar,setcodebox,setbreakpoint,addelement,selectedcomp,openbar,setshowbox,findnodebyid,tree,updatecomp,addsection,setopenbar,showbox}){
    return (<>
     
         <div className="chbox" style={{ display: work==="pdf" ? "flex" : "none" }}>
  <button onClick={() => setcodebox(true)}><i className="fi fi-rr-code-simple"></i></button>
        <Pdftools addelement={addelement} setbreakpoint={setbreakpoint} selectedcomp={selectedcomp}></Pdftools>




        </div>


        <div className="inputbox" style={{ display: openbar  ? "flex" : "none" }}>
  
            <Componentsbox addelement={addelement} selectedcomp={selectedcomp} findnodebyid={findnodebyid} tree={tree} updatecomp={updatecomp} addsection={addsection} setopenbar={setopenbar} showbox={showbox} setshowbox={setshowbox} work={work}/>
        
        </div>

    </>)

}
export default Canvassidebar;