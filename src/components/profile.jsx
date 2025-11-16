import react, { useState } from "react";
import "../App.css";
import Cardloader from "./cardloader";
import Button from "../tempaltecont/button";
import Sidebar from "./sidebar";
function Profile(props){
    const profbutarray=[
        {
            id:"pr1",
            text:"",
            icon:"Portfolios",
            func:"any",
    
         },
         {
            id:"pr2",
            text:"Resumes",
            icon:"Resumes",
            func:"any",
    
         },
         {
            id:"pr3",
            text:"Collaborators",
            icon:"Collaborators",
            func:"any",
    
         }
         ,
         {
            id:"pr4",
            text:"Contributions",
            icon:"Contributions",
            func:"any",
    
         },
         {
            id:"pr5",
            text:"Achievements and badges",
            icon:"Achievements and badges",
            func:"any",
    
         },
         {
            id:"pr6",
            text:"Professional summary",
            icon:"Professional summary",
            func:"any",
    
         }
    ];
    const [par,setpar]=useState("Portfolio");
    return(
    <>
    <div className="maincontainerprof">
      <div className="userinfoabout">
        <button className="editprof"><i className="fi fi-rr-pencil"></i></button>
         <div className="profilepic"></div>
         <h1>Abhai maurya <i className="fi fi-rr-share"></i></h1>
         <p>Passionate web developer skilled in React, JavaScript, and modern web technologies.</p>
         <div className="interests"><p>Webd</p><p>Fitness</p><p>Designing</p><p>Photography</p><p>Tech</p></div>
         <button className="collaborate">Collaborate</button>
         <h2>Analytics</h2>
         <div className="reviewbox">
         </div>

      </div>
      <div className="moreinfoprof">

      </div>
    </div>
    </>)

}
export default Profile;
