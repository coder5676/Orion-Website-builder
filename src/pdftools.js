import React, { useState } from "react";
import Toolbox from "./components/toolbox";
import "./canvas.css"

export default function Pdftools({addelement,setbreakpoint,selectedcomp}){
   
    function adddivider(contid){
        addelement("", "div", {
            style: {
            width:"90%",
            height:"10%",
            backgroundColor:"black",
      position:"absolute"

            },
           
            vg: "noedit"

          }, [{ funcname: "showid", param: ["$id"] }], contid);
      
    
    }
    function selectedtolist(){
     const selection=window.getSelection();
     if (!selection || selection.rangeCount === 0) return;

const anchorNode = selection.anchorNode;
const parentElement = anchorNode?.parentElement;

if (parentElement) {
  console.log("Selected tag:", parentElement.tagName); // e.g., "P", "SPAN", "DIV"
}
    }
    const butarraypdf=[{
      id: "cmp101", text: "", icon: <i className="fi-rr-cloud-upload"></i>, func: "any", drfunc: () => {
       addelement("", "div", {
            style: {
              backgroundColor: '#ffffff',
              marginTop: "0px",
              marginBottom: "0px",
              position: "relative",
              width:"100%",
              height:"100%",
              borderRadius: "0px",
              left: 0,
              fontFamily:"",
              top: 0,
              textAlign:"center",
              maxWidth: "100%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: "",
             

            },
            x: "0",
            y: "0",
            vg: "noedit"

          }, [{ funcname: "showid", param: ["$id"] }], "root");
      }, drg: () => {}
    },
   
     {
       id: "cmp1", text: "", icon: <i className="fi-rr-edit"></i>, func: ()=>{setbreakpoint("A4")}, },{
      id: "cmp101", text: "", icon: <i className="fi-rr-text"></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "15px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",
            transform: "translate(10px,10px)",
            cursor: "pointer",
            textAlign:"center",
          
            width: "30%",
            height:"3%",
            letterSpacing: "0.1px",
            lineHeight: "",
            zIndex:"2",
          },
          x: "10",
          y: "10",
          children: "Enter text here",

          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { }
    },{
      id: "cmp2", text: "", icon:<i class="fi fi-rr-heading"></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "25px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "900",
            transform: "translate(10px,10px)",
            cursor: "pointer",
            textAlign:"center",
           
            width: "30%",
            height:"5%",
            letterSpacing: "0.1px",
            lineHeight: "",
            minHeight:"30px"
          },
          x: "10",
          y: "10",
          children: "Header text",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => {  }
    },{
      id: "cmp2", text: "", icon:<i class="fi fi-rr-bold"></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "15px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "900",
            transform: "translate(10px,10px)",
            cursor: "pointer",
            textAlign:"center",
          
            width: "30%",
            height:"3%",
            letterSpacing: "0.1px",
            lineHeight: "",
            minHeight:"30px"
          },
          x: "10",
          y: "10",
          children: "Header text",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => {  }
    },{
      id: "cmp3", text: "", icon: <i className="fi-rr-italic"></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "15px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",
            transform: "translate(10px,10px)",
            cursor: "pointer",
          fontStyle:"italic",
            textAlign:"center",
        
            width: "30%",
            height:"3%",
            letterSpacing: "0.1px",
            lineHeight: "",

            
          
          },
          x: "10",
          y: "10",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => {  }
    },{
      id: "cmp23", text: "", icon: <i class="fi fi-rr-square"></i>, func: "any", drfunc: () => {
        addelement("", "div", {
          // To allow the user to edit the content
          style: {
          
       backgroundColor: '#ffffff',
              marginTop: "0px",
              marginBottom: "0px",
              position: "absolute",
              width: `100%`,
              height: `fit-content`,
            transform:"translate(20px,100px)",
              borderRadius: "0px",
              left: 0,
              top: 0,
              fontFamily:"",
            
              gap:"0",
               height:"30%",
              width: "70%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: "",
            zIndex:"2",
            
            
          
          },
          x: "20",
          y: "100",
      
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => {  }
    },{
      id: "cmp25", text: "", icon: <i class="fi fi-rr-horizontal-rule"></i>, func: "any", drfunc: () => {
       const contid= addelement("", "div", {
          // To allow the user to edit the content
          style: {
          
    
      width:"90%",
      height:"3%",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      transform:"translate(20px,20px)",
      position:"absolute"
        
            
            
          
          },
          x: "20",
          y: "20",

          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
        adddivider(contid);
      }, drg: () => {  }
    },{
      id: "cmp26", text: "", icon:<i class="fi fi-rr-images"></i>, func: "any", drfunc: () => {
    addelement("", "div", {
          // To allow the user to edit the content
          style: {
          
    
      width:"40%",
      height:"30%",
    backgroundImage:"",
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    boxShadow:"",
    backgroundColor:"#ebebeb",
    borderRadius:"20px",
    border:"",

      transform:"translate(20px,20px)",
      position:"absolute"
        
            
            
          
          },
          x: "20",
          y: "20",

          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
        
      }, drg: () => {}
    },{
      id: "cmp27", text: "", icon:<i class="fi fi-rr-rectangle-list"></i>, func: ()=>{
        selectedtolist();
      }, drfunc: () => {
    
        
      }, drg: () => {}
    },{
      id: "cmp28", text: "", icon:<i class="fi fi-rr-list-check"></i>, func: "any", drfunc: () => {
        
        
      }, drg: () => {}
    },{
      id: "cmp29", text: "", icon:<i class="fi fi-rr-circle-1"></i>, func: "any", drfunc: () => {
    
        
      }, drg: () => {}
    },{
      id: "cmp30", text: "", icon:<i class="fi fi-rr-table-layout"></i>, func: "any", drfunc: () => {
    
        
      }, drg: () => {}
    },{
      id: "cmp31", text: "", icon:<i class="fi fi-rr-sidebar"></i>, func: "any", drfunc: () => {
    
        
      }, drg: () => {}
    }
  ]
    return (
<>
 <Toolbox buttarray={butarraypdf}></Toolbox>
</>
    );
};