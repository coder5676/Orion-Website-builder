import react from "react";
import { useState,useRef } from "react";
import "../App.css";
import Button from "../tempaltecont.js/button";
function Toolbox({buttarray}){
return (<>
{buttarray.map((button,index)=>(
    <button draggable key={button.id} title={button.text} onClick={()=>button.func()} onDragEnd={()=>button.drfunc()} onDrag={()=>button?.drg()}>{button.icon}</button>

))

}
</>)
}
export default Toolbox;