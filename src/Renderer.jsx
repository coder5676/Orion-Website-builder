
import React from "react";
import { Rnd } from "react-rnd";
import { useState } from "react";
import { toInteger, transform } from "lodash";
import "./canvas.css";



function RenderComponent({ json, selectedcomp, updatecomp, tree, currref, parentref, parcomp, dimensions, sayhello, showid, setselectedcomp, breakpoint, candim }) {
  const [disableDrag, setDisableDrag] = useState(true);

  const builtinfunctionmap = {
    "showid": {
      func: showid,
      params: [""]

    },
    "sayhello": {
      func: sayhello,
      params: [""]
    },
  }
  console.log(parcomp.id);
  const { id, type, props = {}, children = [] } = json;
  const [isEmpty, setIsEmpty] = useState(false);
  const typebutton = type === "button";
  const parwidth = dimensions.width;
  const parheight = dimensions.height;

  const isselectedcomp = id === selectedcomp;
  const typeh1 = type === "h1";
  const vg = props?.vg;



  const handleclick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (Array.isArray(props.onclick)) {
      props.onclick.forEach(action => {
        const { funcname, param = [] } = action;
        const functionEntry = builtinfunctionmap[funcname];
        if (functionEntry && typeof functionEntry.func === "function") {
          // Replace "$id" with the actual component id
          const finalParams = param.map(p => p === "$id" ? id : p);

          functionEntry.func(...finalParams);
        }
      });
    }

  };
  console.log(currref)



  const renderChildren = () => {
    if (!children) return null;
    if (typeof props.children === "string") return props.children;
    if (Array.isArray(children)) {
      return children.map((child, index) =>
        typeof child === "string"
          ? child
          : (
            <RenderComponent
              key={child.id || index}
              json={child}
              selectedcomp={selectedcomp}
              updatecomp={updatecomp}
              tree={tree}
              currref={currref}
              parentref={parentref}
              parcomp={parcomp}
              dimensions={dimensions}
              sayhello={sayhello}
              showid={showid}
              setselectedcomp={setselectedcomp}
              breakpoint={breakpoint}
              candim={candim}

            />
          )
      );
    }
    return null;
  };

  let width = props?.style?.width || 200;
  let height = props?.style?.height || 100;
  const newscale = candim.width / 1200;

  const xPercent = parseFloat(props?.x || 0);

  const yPercent = parseFloat(props?.y || 0);

  const x = (xPercent / 100) * parwidth;
  const y = (yPercent / 100) * parheight;
  if (isselectedcomp && vg === "edit") {
    if (typeh1) {
      return (
        <Rnd
          bounds={"parent"}
          disableDragging={disableDrag}
          contentEditable
          suppressContentEditableWarning
          size={{ width: `${((parseFloat(width) / 100) * parwidth)}px`, height: `fit-content` }}
          position={{ x, y }}
          style={{
            ...props.style,
            outline: "2px solid black",
            fontSize: `${parseInt(props.style.fontSize) * newscale}px`,
            background: `${props?.style?.background}`,
            WebkitBackgroundClip: `${props?.style?.WebkitBackgroundClip}`,
            WebkitTextFillColor: `${props?.style?.WebkitTextFillColor}`,



          }}
          resizeHandleStyles={{
            bottomRight: {
              width: "10px", height: "10px",
              margin: "0",
              backgroundColor: "white",

              border: "2px solid black",
              borderRadius: '0px',
              boxShadow: "none"
            },
            // You can style other handles too:
            topLeft: {
              width: "10px", height: "10px",
              margin: "0",
              border: "2px solid black",
              backgroundColor: "white",

              borderRadius: '0px',

              boxShadow: "none"

            },
            topRight: {
              width: "10px", height: "10px",
              margin: "0",
              border: "2px solid black",
              backgroundColor: "white",
              borderRadius: '0px',

              boxShadow: "none"

            }, bottomLeft: {
              width: "10px", height: "10px",
              margin: "0",
              border: "2px solid black",
              backgroundColor: "white",
              borderRadius: '0px',

              boxShadow: "none"

            }
            // etc.

          }}
          onDragStop={(e, d) => {
            e.stopPropagation();
            e.preventDefault();

            // Convert pixel position to percentage for storage
            const xPercent = (d.x / parwidth) * 100;
            const yPercent = (d.y / parheight) * 100;

            updatecomp(id, {
              x: `${xPercent}%`, // Save as percentage string
              y: `${yPercent}%`, // Save as percentage string
              style: {
                ...props.style,
                // Keep transform in pixels for immediate visual feedback

              }
            });
          }}

          onResize={(e, direction, ref, delta, position) => {
            e.stopPropagation();
            e.preventDefault();
            const xPercent = (position.x / parwidth) * 100;
            const yPercent = (position.y / parheight) * 100;
            const prevWidthPx = (parseFloat(props.style.width) / 100) * parwidth; // old width in px
            const newWidthPx = ref.offsetWidth; // new width in px
            const oldFontSize = parseFloat(props.style.fontSize) || 16; // current font size
            const scale = newWidthPx / prevWidthPx; // how much width changed

            const newFontSize = oldFontSize * scale; // proportional font
            updatecomp(id, {
              x: `${xPercent}%`, // Save as percentage
              y: `${yPercent}%`, // Save as percentage
              style: {
                ...props.style,
                width: `${(ref.offsetWidth / parwidth) * 100}%`,
                height: `${(ref.offsetHeight / parheight) * 100}%`,
                // Keep transform in pixels for immediate visual feedback
                fontSize: `${newFontSize}px`,
              }
            });
          }}
          onFocus={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          onMouseOver={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setDisableDrag(true);
          }}

          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();

          }}
          onBlur={(e) => {
            e.stopPropagation();
            e.preventDefault();


            const element = e.currentTarget;

            // Check if content is empty after blur
            if (element.innerText.trim() === "") {
              setIsEmpty(true); // Set placeholder back
              element.innerText = "Enter text here"; // Placeholder text
            } else {
              setIsEmpty(false); // There's valid content
            }



            updatecomp(id, {

              style: {
                ...props.style,

              },
              children: element.innerText.trim(),
            });


          }

          }

        >

          {/* <h1
            contentEditable
            suppressContentEditableWarning

            style={{
              minHeight:"10px",
              width: "100%",
              outline: "none",
              overflowWrap: "break-word",
              position: props.style.position,
              fontSize: `${props.style.fontSize}`,
              fontWeight: props.style.fontWeight,
             
                          boxShadow: "inset 0 0 0 2px #4520ffff",

              marginTop: `${(parseInt(props.style.fontSize) - parseInt(props.style.fontSize) / 3)}px`,
              background: `${props?.style?.background}`,
              WebkitBackgroundClip: `${props?.style?.WebkitBackgroundClip}`,
              WebkitTextFillColor: `${props?.style?.WebkitTextFillColor}`,


            }}
            onFocus={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            onMouseOver={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setDisableDrag(true);
            }}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}

            onBlur={(e) => {
              e.stopPropagation();
              e.preventDefault();


              const element = e.currentTarget;

              // Check if content is empty after blur
              if (element.innerText.trim() === "") {
                setIsEmpty(true); // Set placeholder back
                element.innerText = "Enter text here"; // Placeholder text
              } else {
                setIsEmpty(false); // There's valid content
              }



              updatecomp(id, {
              
                style: {
                  ...props.style,
                
                },
                children: element.innerText.trim(),
              });


            }

            }
          >
            {isEmpty ? "Enter text here" : props.children}
          </h1>
*/}
          {isEmpty ? "Enter text here" : props.children}
          <div className="res" onMouseOver={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setDisableDrag(false)
          }}></div>

        </Rnd>
      );



    }
    if (typebutton) {
      const prevWidthPx = (parseFloat(props.style.width) / 100) * parwidth; // old width in px

      return (
        <Rnd
          bounds="parent"
          size={{
            width: `${(parseFloat(width) / 100) * parwidth}px`,
            height: `${(parseFloat(height) / 100) * parheight}px`,

          }}
          position={{
            x, y
          }}
          style={{
            ...props.style,
            fontSize: `${parseInt(props.style.fontSize) * newscale}px`,

            boxShadow: "inset 0 0 0 2px #006cfb",
            position: "absolute",

          }}
          resizeHandleStyles={{
            bottomRight: {
              width: "10px", height: "10px",
              backgroundColor: "#006cfb",
              borderRadius: "40px",
              boxShadow: "none",
            },
            topLeft: {
              width: "10px", height: "10px",
              backgroundColor: "#006cfb",
              borderRadius: "40px",
              boxShadow: "none",
            },
            topRight: {
              width: "10px", height: "10px",
              backgroundColor: "#006cfb",
              borderRadius: "40px",
              boxShadow: "none",
            },
            bottomLeft: {
              width: "10px", height: "10px",
              backgroundColor: "#006cfb",
              borderRadius: "40px",
              boxShadow: "none",
            },
          }}
          onDragStop={(e, d) => {
            e.stopPropagation();
            e.preventDefault();

            // Convert pixel position to percentage for storage
            const xPercent = (d.x / parwidth) * 100;
            const yPercent = (d.y / parheight) * 100;

            updatecomp(id, {
              x: `${xPercent}%`, // Save as percentage string
              y: `${yPercent}%`, // Save as percentage string
              style: {
                ...props.style,
                // Keep transform in pixels for immediate visual feedback


              }
            });
          }}
          onResize={(e, direction, ref, delta, position) => {
            e.stopPropagation();
            e.preventDefault();

            const xPercent = (position.x / parwidth) * 100;
            const yPercent = (position.y / parheight) * 100;
            const newWidthPx = ref.offsetWidth; // new width in px
            const oldFontSize = parseFloat(props.style.fontSize) || 16; // current font size
            const scale = newWidthPx / prevWidthPx; // how much width changed
            const scale2 = candim.width / 1200;
            const newFontSize = oldFontSize * scale * scale2;
            updatecomp(id, {
              x: `${xPercent}%`, // Save as percentage
              y: `${yPercent}%`, // Save as percentage
              style: {
                ...props.style,
                width: `${(ref.offsetWidth / parwidth) * 100}%`,
                height: `${(ref.offsetHeight / parheight) * 100}%`,
                fontSize: `${parseFloat(newFontSize)}px`
                // Keep transform in pixels for immediate visual feedback
              }
            });
          }}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          {renderChildren()}
        </Rnd>)
    }


    // Convert stored percentages to pixels for RND



    return (
      <Rnd
        bounds={"parent"}
        size={{ width: `${((parseFloat(width) / 100) * parwidth)}px`, height: `${(parseFloat(height) / 100) * parheight}px` }}
        position={{ x, y }}
        style={{
          ...props.style,
          boxShadow: "inset 0 0 0 2px #5323ffff",
          position: "absolute"

        }}
        resizeHandleStyles={{
          bottomRight: {
            width: "10px", height:"10px",
            backgroundColor: "#5323ffff",
           
            border: "2px solid white",
            borderRadius: '40px',
            boxShadow: "none",
          },
          topLeft: {
            width: "10px", height: "10px",
            backgroundColor: "#5323ffff",
            borderRadius: "40px",
            boxShadow: "none",
            margin: 0,
            border: "2px solid white",
          },
          topRight: {
            width: "10px", height: "10px",
            backgroundColor: "#5323ffff",
            margin: 0,
            border: "2px solid white",
            borderRadius: "40px",
            boxShadow: "none"
          },
          bottomLeft: {
            width: "10px", height: "10px",
            backgroundColor: "#5323ffff",
            margin: 0,
            border: "2px solid white",
            borderRadius: "40px",
            boxShadow: "none"
          }
        }}
        onDragStop={(e, d) => {
          e.stopPropagation();
          e.preventDefault();

          // Convert pixel position to percentage for storage
          const xPercent = (d.x / parwidth) * 100;
          const yPercent = (d.y / parheight) * 100;

          updatecomp(id, {
            x: `${xPercent}%`, // Save as percentage string
            y: `${yPercent}%`, // Save as percentage string
            style: {
              ...props.style,
              // Keep transform in pixels for immediate visual feedback
            }
          });
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          e.stopPropagation();
          e.preventDefault();


          const xPercent = (position.x / parwidth) * 100;
          const yPercent = (position.y / parheight) * 100;

          updatecomp(id, {
            x: `${xPercent}%`, // Save as percentage
            y: `${yPercent}%`, // Save as percentage
            style: {
              ...props.style,
              width: `${(ref.offsetWidth / parwidth) * 100}%`,
              height: `${(ref.offsetHeight / parheight) * 100}%`,
              // Keep transform in pixels for immediate visual feedback

            }
          });
        }}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        {renderChildren()}
      </Rnd>
    );
  }
  if (isselectedcomp && vg === "noedit") {
    if (typeh1) {

      return (

        <h1
          contentEditable
          suppressContentEditableWarning
          style={{
            outline: "none", // Prevent outline on focus
            overflowWrap: "break-word",
            width: "fit-content",
            height: "fit-content",
            fontSize: props.style.fontSize,
            fontWeight: props.style.fontWeight,
            ...props.style,
            zIndex: "40",
            cursor: "pointer",
            boxShadow: "inset 0 0 0 2px #05b8c5ff",
            borderRadius: "3px",
            textAlign: props.style.textAlign,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around"

          }}
          onFocus={(e) => {
            // Remove placeholder on focus
            if (isEmpty) {
              e.currentTarget.innerText = "";
            }
          }}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();


          }

          }

          onBlur={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const element = e.currentTarget;

            // Check if content is empty after blur
            if (element.innerText.trim() === "") {
              setIsEmpty(true); // Set placeholder back
              element.innerText = "Enter text here"; // Placeholder text
            } else {
              setIsEmpty(false); // There's valid content
            }



            updatecomp(id, {
              x,
              y,
              style: {
                ...props.style,
                width: props.style.width,
                height: props.style.height,

              },
              children: element.innerText.trim(),
            });
          }

          }
        >
          {isEmpty ? "Enter text here" : props.children}
        </h1>






      );
    }


    return (

      <div
        ref={parcomp?.id === id ? parentref : null}
        style={{
          ...props.style, boxShadow: " inset 0 0 0 1px  #006cfb",

        }}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >

        {renderChildren()}

      </div>





    );
  }


  const scaledFontSize = parseInt(props?.style?.fontSize) * newscale;

  const normalStyle = {
    ...props.style,
    left: `${props.x}`,
    top: `${props.y}`,
    fontSize: `${scaledFontSize}px`

  };


  const Type = type;

  return <Type {...props

  }
    style={normalStyle}
    onClick={(e) => {
      e.stopPropagation();
      handleclick(e);// Select this component ONLY
    }} ref={parcomp?.id === id ? parentref : null}>

    {renderChildren()}
  </Type>
}
export default RenderComponent;