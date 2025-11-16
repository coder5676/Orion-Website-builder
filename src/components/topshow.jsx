import react from "react";
import { useState } from "react";
import "../App.css";
function Topshow({text,txtcolor,gradiant,buttontxt,topimageurl,click}){
    return(
        <>
        <div className="topshowtemp" style={{background:gradiant}}>
            <h1>{text} {" "}<span style={{color:txtcolor}}>ShowcaseStudio</span> templates.</h1>
            <div style={{backgroundImage:`url(${topimageurl})`}}>
                <button onClick={click} style={{backgroundColor:txtcolor}}>{buttontxt}</button>
            </div>
        </div>
        </>
    )

}
export default Topshow;