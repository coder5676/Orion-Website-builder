import React from "react";
import "../App.css";
import { Link, NavLink } from "react-router-dom";
function Card({cardid,type,desc,buttontxt,gotolink,authorname,cardimgurl}){
    const cardstyle=[
        {
            maxHeight:"300px",
            maxWidth:"400px",
            bordeR:"2px solid black",
        },
        {
                maxHeight:"350px",
                bordeR:"2px solid black",
                fontSize:"19px",
                marginTop:"20px",
                fontSize:"30px"
                
        },
        {

        },

    ]
    const txtstyle=[
        {
            fontSize:"20px",
            width:"96%",
            maxWidth:"400px",
        },
        {
            fontSize:"31px",
            color:"black",
            fontWeight:"900",
        },
        {

        },

    ]

    return (<>

    <div className="card">
       <div className="cardimg" style={{backgroundImage:`url(${cardimgurl})`,...cardstyle[type]}}></div>
       <div className="cardtxt" style={txtstyle[type]}>
       <p>{desc}</p>
      <div>
      <p2>{authorname}</p2>
       <button className="svbutton"><i className="fi fi-rr-bookmark"></i>
      </button> 
      <NavLink to={gotolink}><button className="usetemplatebut">{buttontxt}</button></NavLink></div>
       </div>

    </div>
    </>)
}
export default Card;