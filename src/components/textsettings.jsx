import React from "react";
import "../canvas.css";

export default function Textsetter({selectedcomp,handlechange}){ 
    const textselectionfields=[
  
   {id:"in40",tag:"Font Name",label:"fontFamily",options:["Comfortaa","Questrial","Lexend","Outfit","Pacifico","Montserrat","Quicksand","Roboto"]},
   {id:"in42",tag:"Weight",label:"fontWeight",options:["normal","bold","lighter","bolder"]},
   {id:"in43",tag:"Style",label:"fontStyle",options:["normal","oblique","italic"]},
   {id:"in44",tag:"Align",label:"textAlign",options:["left","center","right","justify"]},
   {id:"in45",tag:"Decoration",label:"textDecoration",options:["none","underline","line-through"]},
   {id:"in46",tag:"Transform",label:"textTransform",options:["none","uppercase","lowercase","capitalize"]},
  
   
  

]
 const textstyleinputs=[
     
     
         {id:"in55",label:"color",type:"color"},


    ]

const textrangefields=[
   {id:"in50",tag:"Text Size",label:"fontSize",type:"range",min:"0",max:"250",step:"1"},
         {id:"in51",tag:"Letter Spacing",label:"letterSpacing",type:"range",min:"0",max:"100",step:"1"},
          {id:"in52",tag:"Word Spacing",label:"wordSpacing",type:"range",min:"0",max:"100",step:"1"},
         {id:"in53",tag:"Line Height",label:"lineHeight",type:"range",min:"0",max:"300",step:"1"}
]
   return(<>
<hr></hr>
   <p>Text Sizing</p>
    {

            textstyleinputs.map(inputs=>(
             
              <div key={inputs.id}>
                <label>{inputs.label}</label>
                <input type={inputs.type}
                
                class={inputs?.type==="color"?"color-circle":""}
                 value={
              selectedcomp?.props?.style?.[inputs.label] || ''} onChange={(e)=>handlechange(inputs.label,e.target.value)}></input></div>
            ))
          }

          {
  textrangefields.map(inputs => {
    // Get style value (strip px if present)
    const rawValue = selectedcomp?.props?.style?.[inputs.label] || "0";
    const numericValue = parseInt(rawValue, 10);

    return (
      <div key={inputs.id}>
        <label>{inputs.tag}: {numericValue}px</label>
        <input
          type={inputs.type}  // "range"
          min={inputs.min}
          max={inputs.max}
          step={inputs.step}
          value={numericValue}
          onChange={(e) =>
            handlechange(inputs.label, `${e.target.value}px`)
          }
        />
      </div>
    );
  })
}
<hr></hr>

          <p>Apply text background</p>
          <h2>Make sure a Gradiant or an Image is selected from above field and weight is set to bold.</h2>
<button
  className="uplimg"
  onClick={() => 
  handlechange({background:'linear-gradient(90deg, #ff7e5f, #feb47b)',
    WebkitBackgroundClip: "text",WebkitTextFillColor:"transparent"})
  }
>
  Apply Gradient Text
</button>

<button
  className="uplimg"
  onClick={() => {
    handlechange("background", "");
    handlechange("WebkitBackgroundClip", "");
    handlechange("backgroundClip", "");
    handlechange("color", "#000000"); // restore normal black text
    handlechange("WebkitTextFillColor", "");
  }}
>
  Remove Gradient
</button>



<hr></hr>

   <p>Text Styling</p>

     {textselectionfields.map((selects) => (
           <div key={selects.id} className="field">
             <label htmlFor={selects.id}>{selects.tag}:</label>
             <select id={selects.id} name={selects.label} className="selec" value={selectedcomp?.props?.style?.[selects.label]} onChange={(e)=>handlechange(selects.label,e.target.value)}> 
               {selects.options.map((option, idx) => (
                 <option key={idx} value={option}>
                   {option}
                 </option>
               ))}
             </select>
           </div>
         ))}


           
    </>)

};