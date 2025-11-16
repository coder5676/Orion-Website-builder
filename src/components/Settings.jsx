import React, { useState } from "react";
import Toolbox from "./toolbox";
import "../canvas.css";
import select from "react-select"
import Textsetter from "./textsettings";



function Settings({ selectedcomp, updatecomp }) {

  const [grad, opengradiant] = useState(false)
  const selectionfields = [


    { id: "in30", tag: "Image Position", label: "backgroundPosition", options: ["center", "left center", "left bottom", "left top", "center top", "center bottom", "right top", "right center", "right bottom"] },
    { id: "in31", tag: "Image Size", label: "backgroundSize", options: ["cover", "contain", "auto"] },
    { id: "in32", tag: "Image Repeat", label: "backgroundRepeat", options: ["no-repeat", "repeat", "repeat-x", "repeat-y"] },
    { id: "in33", tag: "Background Type", label: "backgroundAttachment", options: ["scroll", "fixed", "local"] },




  ]
  const selectionfields2 = [
    { id: "in37", tag: "Display Type", label: "display", options: ["grid","flex","none"] },
    { id: "in38", tag: "Align Self", label: "alignSelf", options: ["start","end","center","strech"] },
    { id: "in39", tag: "Justify Self", label: "justifySelf", options: ["start","end","center","strech"] },

    { id: "in34", tag: "Element Placement", label: "position", options: ["absolute", "fixed", "relative", "sticky"] },
    { id: "in35", tag: "Cursor Type", label: "cursor", options: ["default", "pointer", "text", "move"] },
    { id: "in36", tag: "Content Visibility", label: "visibility", options: ["visible", "hidden"] },
  ]


  const styleinputs = [


    { id: "in2", label: "backgroundColor", type: "color" },


  ]
  const styleinputs2 = [
  
    { id: "in4", label: "borderColor", type: "color" },

  ]
  const rangeinputs = [
    { id: "in5", tag: "Border Width", label: "borderWidth", type: "range", min: "0", max: "100", step: "1",unit:"px" },
    { id: "in6", tag: "Border Curve", label: "borderRadius", type: "range", min: "0", max: "100", step: "1",unit:"px" },
    { id: "in11", tag: "Padding", label: "padding", type: "range", min: "0", max: "100", step: "1",unit:"%" }

  ]
   const margininputs = [
    { id: "in50", tag: "Top Margin", label: "marginTop", type: "range", min: "-300", max: "300", step: "1" },
    { id: "in56", tag: "Left Margin", label: "marginLeft", type: "range", min: "-300", max: "300", step: "1" },
    { id: "in44", tag: "Right Margin", label: "marginRight", type: "range", min: "-300", max: "300", step: "1" },
    { id: "in45", tag: "Bottom Margin", label: "marginBottom", type: "range", min: "-300", max: "300", step: "1" }


  ]
  const selectionfields3 = [
    { id: "in38", tag: "Box Border", label: "borderStyle", options: ["solid", "dashed", "dotted", "double", "groove", "ridge", "none"] },
  ]

  const gradiantsfield = [
    {
      id: "in39", tag: "Gradiants", label: "background", options: [
        "",
        "linear-gradient(to right, #fceabb, #fff312ff)",        // soft yellow → golden
        "linear-gradient(to right, #d9a7c7, #fffcdc)",        // light pink → cream
        "linear-gradient(to right, #89f7fe, #66a6ff)",        // aqua → soft blue
        "linear-gradient(to right, #f6d365, #fda085)",        // peach → light coral
        "linear-gradient(to right, #fbc2eb, #a6c1ee)",        // pastel pink → lavender blue
        "linear-gradient(to right, #ffecd2, #fcb69f)",        // cream → peach
        "linear-gradient(to right, #cfd9df, #e2ebf0)",        // grey → very light blue
        "linear-gradient(to right, #fdfbfb, #ebedee)",        // white → light grey
        "linear-gradient(to right, #ff9a9e, #fecfef)",        // rose pink → baby pink
        "linear-gradient(to right, #a1c4fd, #c2e9fb)",        // sky blue → light aqua
        "linear-gradient(to right, #d4fc79, #96e6a1)",        // lime green → mint
        "linear-gradient(to right, #fff1eb, #ace0f9)",        // peach → ice blue
        "linear-gradient(to right, #fddb92, #d1fdff)",        // golden cream → pale blue
        "linear-gradient(to right, #ffdde1, #ee9ca7)",        // blush pink → rose
        "linear-gradient(to right, #e0c3fc, #8ec5fc)",
        "linear-gradient(to right, #ffecd2, #fcb69f)",   // cream → peach
        "linear-gradient(to right, #fbc2eb, #a6c1ee)",   // pink → lavender
        "linear-gradient(to right, #ffdde1, #ee9ca7)",   // blush pink → rose
        "linear-gradient(to right, #a1c4fd, #c2e9fb)",   // light blue → aqua
        "linear-gradient(to right, #e0c3fc, #8ec5fc)",   // lilac → blue
        "linear-gradient(to right, #d9a7c7, #fffcdc)",   // pastel purple → cream
        "linear-gradient(to right, #fdfbfb, #ebedee)",   // white → light grey
        "linear-gradient(to right, #d4fc79, #96e6a1)",   // lime → mint
        "linear-gradient(to right, #fff1eb, #ace0f9)",   // peach → icy blue
        "linear-gradient(to right, #fad0c4, #ffd1ff)",
        "radial-gradient(circle, #ffecd2, #fcb69f)",     // cream → peach
        "radial-gradient(circle, #fbc2eb, #a6c1ee)",     // pink → lavender
        "radial-gradient(circle, #ffdde1, #ee9ca7)",     // blush → rose
        "radial-gradient(circle, #a1c4fd, #c2e9fb)",     // soft blue → aqua
        "radial-gradient(circle, #e0c3fc, #8ec5fc)",     // lilac → sky blue
        "radial-gradient(circle, #fff1eb, #ace0f9)",     // peach → icy blue
        "radial-gradient(circle, #fddb92, #d1fdff)",     // cream → pale blue
        "radial-gradient(circle, #fad0c4, #ffd1ff)",     // peach → baby pink
        "radial-gradient(circle, #fdfbfb, #ebedee)",     // white → light grey
        "radial-gradient(circle, #d9a7c7, #fffcdc)",
        "radial-gradient(circle, #c1dfc4, #deecdd)",     // pale green → light grey
        "radial-gradient(circle, #d4fc79, #96e6a1)",     // lime → mint
        "radial-gradient(circle, #84fab0, #8fd3f4)",     // mint → aqua
        "radial-gradient(circle, #c2e9fb, #e2ebf0)",     // blue → pale grey
        "radial-gradient(circle, #e0eafc, #cfdef3)",     // soft sky → icy blue
        "radial-gradient(circle, #cfd9df, #e2ebf0)",     // grey → light blue
        "radial-gradient(circle, #a8edea, #fed6e3)",     // aqua → pink
        "radial-gradient(circle, #fceabb, #f8b500)",     // light yellow → golden
        "radial-gradient(circle, #d3cce3, #e9e4f0)",     // lavender grey → soft grey
        "radial-gradient(circle, #f9f9f9, #e0e0e0)",     // w // peach → baby pink         // lavender → light blue]},
        "radial-gradient(circle, #89f7fe, #66a6ff)",     // aqua → sky
        "radial-gradient(circle, #a1c4fd, #c2e9fb)",     // soft blue → aqua
        "radial-gradient(circle, #d0eefd, #f9f9f9)",     // icy blue → white
        "radial-gradient(circle, #8ec5fc, #e0c3fc)",     // sky blue → lavender
        "radial-gradient(circle, #b2fefa, #0ed2f7)",     // teal → aqua
        "radial-gradient(circle, #e0f7fa, #b9fbc0)",     // ice blue → mint
        "radial-gradient(circle, #2193b0, #6dd5ed)",     // ocean → cyan
        "radial-gradient(circle, #1c92d2, #f2fcfe)",     // blue → white
        "radial-gradient(circle, #b6fbff, #83a4d4)",     // ice blue → sky blue
        "radial-gradient(circle, #43cea2, #185a9d)",       // w

      ]
    }]



  const handlechange = (prop, value) => {
    let newStyles = {};

    // case 1: single property
    if (typeof prop === "string") {
      newStyles = { [prop]: value };
    }

    // case 2: object with multiple properties
    else if (typeof prop === "object") {
      newStyles = prop; // already a batch of styles
    }

    updatecomp(selectedcomp.id, {
      style: {
        ...(selectedcomp?.props?.style || {}),
        ...newStyles,
      },
    });
  };

  const handlechange2 = (value) => {
    // Ensure selectedcomp and its props are defined and check if children is a string
    if (typeof selectedcomp.props.children === "string") {
      updatecomp(selectedcomp.id, {

        ...selectedcomp.props,
        children: value, // Update the children (text) with the new value

      });
    }
  };

  //******************************************************************************************** */
  return (
    <>



      <div className="styling">
        <p>Section dimensions</p>
        
        <button
          onClick={() =>
            handlechange({
              width: "100%",
              minHeight: "100vh",
            })
          }
        >
          Full Screen
        </button>

        
        <button
          onClick={() =>
            handlechange({
              aspectRatio:"16/9",
              minHeight:0,
              position:"relative",
              height:"fit-content",
             

            })
          }
        >
          Proportional sizing
        </button>


        <label>Width | {selectedcomp?.props?.style?.width}</label>
        <input type="range" max="100" min="0" step="1" value={parseInt(selectedcomp?.props?.style?.width) || 0} onChange={(e) => handlechange("width", `${e.target.value}%`)}></input>
       {/* <label>Height | {selectedcomp?.props?.style?.minHeight}</label>
        <input type="range" max="1000" min="0" step="1" value={parseInt(selectedcomp?.props?.style?.minHeight) || 0} onChange={(e) => handlechange("minHeight", `${e.target.value}px`)}></input>*/}
<hr></hr>
         <p>Margin</p>

           {
          margininputs.map(inputs => {
            // Get style value (strip px if present)
            const rawValue = selectedcomp?.props?.style?.[inputs.label] || "0";
            const numericValue = parseInt(rawValue, 10);

            return (
              <div key={inputs.id}>
                <label>{inputs.tag}: {numericValue}%</label>
                <input
                  type={inputs.type}  // "range"
                  min={inputs.min}
                  max={inputs.max}
                  step={inputs.step}
                  value={numericValue}
                  onChange={(e) =>
                    handlechange(inputs.label, `${e.target.value}%`)
                  }
                />
              </div>
            );
          })
        }
        
<hr></hr>

        <p>Box Background</p>
        {

          styleinputs.map(inputs => (

            <div key={inputs.id}>
              <label>{inputs.label}</label>
              <input type={inputs.type}

                class={inputs?.type === "color" ? "color-circle" : ""}
                value={
                  selectedcomp?.props?.style?.[inputs.label] || ''} onChange={(e) => handlechange(inputs.label, e.target.value)}></input></div>
          ))
        }
        <button class="uplimg" onClick={() => handlechange("backgroundColor", "transparent")}>Transparent</button>
        {gradiantsfield.map((selects) => (
          <div key={selects.id} className="field">
            <label htmlFor={selects.id}>{selects.tag}:</label>
            <div id={selects.id} name={selects.label} className="selecdiv" style={{ background: `${selectedcomp?.props?.style?.[selects.label] || "none"}` }} >
              <button onClick={() => opengradiant(!grad)}>{grad ? "Done" : "Change"}</button>
            </div>
            <div class="seldivcont" style={{ display: grad ? "flex" : "none" }}>
              {selects.options.map((option, idx) => (
                <div key={idx} value={option} style={{ background: `${option}` }} onClick={() => handlechange(selects.label, option)}>

                </div>
              ))}
            </div>
          </div>
        ))}
<hr></hr>

        <p>Glass Effect</p>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={parseInt(selectedcomp?.props?.style?.backdropFilter?.replace(/\D/g, "")) || 0}
          onChange={(e) =>
            handlechange("backdropFilter", `blur(${e.target.value}px)`)
          }
        />


<hr></hr>

        <p>Container Image</p>
        <label>Background Image

        </label>
        <input type="text" placeholder="Image url" onChange={(e) => handlechange("backgroundImage", `url(${e.target.value})`)}></input>
        <button class="uplimg">Upload</button>


<hr></hr>


        <p>Visibility Settings</p>



        {selectionfields.map((selects) => (
          <div key={selects.id} className="field">
            <label htmlFor={selects.id}>{selects.tag}:</label>
            <select id={selects.id} name={selects.label} className="selec" value={selectedcomp?.props?.style?.[selects.label]} onChange={(e) => handlechange(selects.label, e.target.value)}>
              {selects.options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}



        <Textsetter selectedcomp={selectedcomp} handlechange={handlechange}></Textsetter>
<hr></hr>

        <p>Box Model</p>


        {selectionfields2.map((selects) => (
          <div key={selects.id} className="field">
            <label htmlFor={selects.id}>{selects.tag}:</label>
            <select id={selects.id} name={selects.label} className="selec" value={selectedcomp?.props?.style?.[selects.label]} onChange={(e) => handlechange(selects.label, e.target.value)}>
              {selects.options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
<hr></hr>

        <p>Box Border</p>
        {selectionfields3.map((selects) => (
          <div key={selects.id} className="field">
            <label htmlFor={selects.id}>{selects.tag}:</label>
            <select id={selects.id} name={selects.label} className="selec" value={selectedcomp?.props?.style?.[selects.label]} onChange={(e) => handlechange(selects.label, e.target.value)}>
              {selects.options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}

        {
          rangeinputs.map(inputs => {
            // Get style value (strip px if present)
            const rawValue = selectedcomp?.props?.style?.[inputs.label] || "0";
            const numericValue = parseInt(rawValue, 10);

            return (
              <div key={inputs.id}>
                <label>{inputs.tag}: {numericValue}{inputs.unit}</label>
                <input
                  type={inputs.type}  // "range"
                  min={inputs.min}
                  max={inputs.max}
                  step={inputs.step}
                  value={numericValue}
                  onChange={(e) =>
                    handlechange(inputs.label, `${e.target.value}${inputs.unit}`)
                  }
                />
              </div>
            );
          })
        }
          {

          styleinputs2.map(inputs => (

            <div key={inputs.id}>
              <label>{inputs.label}</label>
              <input type={inputs.type}
                min={inputs?.min}
                max={inputs?.max}
                step={inputs?.step}
                class={inputs?.type === "color" ? "color-circle" : ""}
                value={
                  selectedcomp?.props?.style?.[inputs.label] || ''} onChange={(e) => handlechange(inputs.label, e.target.value)}></input></div>
          ))

        }

<hr></hr>

        <p>Advanced Styling</p>
        <label>Z Axis Indexing | {selectedcomp?.props?.style?.zIndex||0}</label>

      <input type="range" min="-100" max="100" value={selectedcomp?.props?.style?.zIndex||0} step="1" onChange={(e) => handlechange("zIndex",e.target.value)}></input>
<label>Grid template column {selectedcomp?.props?.style?.gridTemplateColumns||0}</label>
      <input  onChange={(e) => handlechange("gridTemplateColumns",e.target.value)}></input>


        <label>Button text</label><input type="text" value={typeof selectedcomp?.props?.children === "string" ? selectedcomp?.props?.children : ""} onChange={(e) => handlechange2(e.target.value)}></input>
<hr></hr>

      </div>

    </>

  )

}
export default Settings;