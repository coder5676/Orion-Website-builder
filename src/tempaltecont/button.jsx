import React from "react";
import "./tempstyling.css";
function Button({id,text,icon,bgcolor}){
const style1="";
const style2="";
const style3="";
const style4="";
const style5="";
const style6="";
const style7="";
const style8="";
const style9="";
const style10="";

const stylearr=[style1,style2,style3,style4,style5,style6,style7,style8,style9,style10];

return(
    <>
    <button title={text} style={{backgroundColor:bgcolor,fontFamily:"Questrial,helvetica"}}>{icon}{}</button>
    </>
    );



}
export default Button;