import React from "react";
import { Rnd } from "react-rnd";
import { useState } from "react";
import { toInteger } from "lodash";
import "./canvas.css"
import { useLocation } from "react-router-dom";
function sayhello(d) {
    console.log(d);
  }


  function showid(id) {
   

  }
const winwidth=window.innerWidth;
console.log(winwidth)
function Watch(){
  const canwidth=1183;
    const location=useLocation();
    const json=location?.state?.treejson;
    console.log(JSON.parse(json));
    function RenderComponent({json}){
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
          const { id, type, props = {}, children = []} = json;

      
    
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
            
            console.log(`Calling ${funcname} with`, finalParams); // ✅ DEBUG
            functionEntry.func(...finalParams);
          }
        });
      }
    };
  
       
          const renderChildren = () => {
            if (!children) return null;
            if (typeof props.children==="string") return props.children;
            if (Array.isArray(children)){
              return children.map((child, index) =>
                typeof child === "string"
                  ? child
                  : (
                    <RenderComponent
                      key={child.id || index}
                      json={child}
                     
                    />
                  )
              );
            }
            return null;
          };
    const Type=type;
    return <Type {...props} onClick={handleclick}>
{renderChildren()}
    </Type>
    }

    



return(
    <>

<div  className="mainrendererdiv">
         <div className="canvas2">
<RenderComponent json={JSON.parse(json)}/></div>
</div>
</>

)
  
}
export default Watch;