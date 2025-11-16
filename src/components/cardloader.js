import React from "react";
import "../App.css"
import Card from "./card";
function Cardloader(props){
    console.log(props.parent,props.type,props.par)
    return<>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </>
    

}
export default Cardloader;