import React from "react";
import { Rnd } from "react-rnd";
import { useState } from "react";
import { toInteger, transform } from "lodash";
import "./canvas.css";

 

function Minirender({ json}) {
  
  const { id, type, props = {}, children = [] } = json;



  const renderChildren = () => {
    if (!children) return null;
    if (typeof props.children === "string") return props.children;
    if (Array.isArray(children)) {
      return children.map((child, index) =>
        typeof child === "string"
          ? child
          : (
            <Minirender
              key={child.id || index}
              json={child}
        
            />
          )
      );
    }
    return null;
  };

  const Type=type;
  return <Type {...props}>
    {renderChildren()}
  </Type>




}
export default Minirender;