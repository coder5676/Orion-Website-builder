import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
function showloop(i) {
 const textarr = [
  "Collaborate seamlessly with your team and friends on every project.",
  "Test and optimize your website across multiple breakpoints for perfect responsiveness.",
  "Build stunning landing pages in minutes using drag-and-drop components and templates.",
  "Resizable and draggable components are perfect for layouts — not just static PDFs.",
  "Preview your designs live on mobile, tablet, and desktop screens effortlessly.",
  "Keep your design consistent with smart snapping, alignment, and spacing tools.",
  "Instantly share and collaborate with others — no downloads or installs required."
];

  const imgarr = [
    "https://static.vecteezy.com/system/resources/previews/035/794/975/original/biophilic-office-isolated-cartoon-illustrations-vector.jpg",
    "", "", ""
  ];
  return {
    text: textarr[i],
    image: imgarr[i]
  };
}

export default function RouteLoaderLogic({ loader, setloader }) {
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes("canvas")) {
      setloader(false);
      return;
    }

    setloader(true);
    let i = 0;

    const interval = setInterval(() => {
      const data = showloop(i);
      const uih = document.getElementsByClassName("uih")[0];
      const bg = document.getElementsByClassName("lddivimg")[0];
      const vo = document.getElementsByClassName("vo")[i];

      if (uih && bg && vo) {
        uih.innerHTML = data.text;
        bg.style.backgroundImage = `url(${data.image})`;
        vo.style.backgroundColor = "black";
      }

      i = (i + 1) % 7;
    }, 4000);

    const timer = setTimeout(() => {
      clearInterval(interval);
      setloader(false);
    }, 30000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [location.pathname, setloader]);

  return (
    <div className="loadingdiv" style={{ display: loader ? "flex" : "none" }}>
       
      <div className="rt">
           <p>Getting your build environment ready.</p>
        <h1 className="uih">Test on different screen to check your website’s compatibility.</h1>
        <div className="lddiv">
         
            <div  className="vo"></div>
            <div  className="vo"></div>
            <div  className="vo"></div>
            <div  className="vo"></div>
            <div  className="vo"></div>
            <div  className="vo"></div>
            <div  className="vo"></div>
          
       
        </div>
    
      </div>
      <div className="lddivimg" />
    </div>
  );
}
