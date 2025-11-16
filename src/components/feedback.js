import React from "react";
import "../App.css";
import Button from "../tempaltecont.js/button";

function Feedback(){
    const feedbutarray=[
        {   
            id:"fb1",
            text:"My Feedback",
            icon:"Feedback",

        },
        {
            id:"fb2",
            text:"Others Feedback",
            icon:"Community",

        },
      
    ];
    return(
        <>
        <div className="topdivfeedback">
            {feedbutarray.map((button,id)=>(
                <Button key={id}{...button}/>
            ))}
            
       </div>
       <div className="mainfeedback">
        <div className="imagefeed">
            <h1>Your feedback will help us make your experience better.</h1>
        </div>
        <div className="writebox">
            <p></p>
        </div>

       </div>
       <button className="submitf">Submit</button>
        </>
    )

}
export default Feedback;