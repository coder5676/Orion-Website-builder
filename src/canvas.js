import React, { Children, cloneElement, useEffect, useLayoutEffect, useState } from "react";

import "./canvas.css";

import { Rnd } from "react-rnd";
import Button from "./tempaltecont.js/button";
import { useRef } from "react";
import Toolbox from "./components/toolbox";
import "./components/comp.css";
import cloneDeep from "lodash/cloneDeep"
import { add, isString, set, transform } from "lodash";
import Settings from "./components/Settings";
import RenderComponent from "./Renderer";
import { NavLink } from "react-router-dom";
import Componentsbox from "./components";
import { useLocation } from "react-router-dom";
import RouteLoaderLogic from "./routerloader";
import html2canvas from "html2canvas";

import jsPDF from 'jspdf';
import Pdftools from "./pdftools";
import Canvassidebar from "./canvassidebar";
import Popup from "./popupdiv";
import Minirender from "./minirender";













class Treenode {

  constructor(id, type, props = {}, actions = {}, vg) {
    this.id = id;
    this.type = type;
    this.props = props;
    this.children = [];
    this.vg = vg;

  }

}



//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------


function Canvaspart() {
  const [breakpoint, setbreakpoint] = useState("desktop");
  const [work, setwork] = useState("website");
  // const [candim,setcandim]=useState({width:0,height:0})
  const [openpopup, setopenpopup] = useState(false);
  const [typecont, settypecont] = useState(null);
  var componentCount = 0;
  const canref = useRef(null);
  const parentref = useRef(null);
  const currref = useRef(null);

  //const [dimensions, setdimensions] = useState({ width: 0, height: 0 });
  const [currdimensions, setcurrdimensions] = useState({ width: 0, height: 0 });


  const [edit, setedit] = useState(true);
  const [view, setview] = useState(false);
  const [loader, setloader] = useState(true);

  const [x, setx] = useState("none");
  const [openbar, setopenbar] = useState(false);
  const [openset, opensetbar] = useState(false);
  const [par, setpar] = useState("root");
  const [vis, setcodebox] = useState(false);
  const [showbox, setshowbox] = useState("components");
  const [scale, setscale] = useState("null");
  const [selectedcomp, setselectedcomp] = useState("root");
  const selectednode = "";
  const dimensions = useElementSize(parentref, [selectedcomp]);
  const candim = useElementSize(canref, []);

  const [tree, setTree] = useState(() => {
    const root = new Treenode("root", "div", {
      className: "root",
      style: {
        width: "100%",
        backgroundColor: "transparent",

        minheight: 0,
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(150, 150, 150, 1) black",
      }, x: "0",
      y: "0",

    }
    );
    return root;
  });



  /*  useEffect(() => {
      const updatebreakpoint = () => {
        const width = window.innerWidth;
        if (width <= 500) {
          setbreakpoint("responsive");
  
        }
        else if(width<=1200 && width>=500){
          setbreakpoint("fullscreen")
        }
        else {
          setbreakpoint("desktop");
  
        }
      }
      updatebreakpoint()
      window.addEventListener("resize", updatebreakpoint);
      return () => window.removeEventListener("resize", updatebreakpoint);
    }
      , []
    )
  */
  //-------------------------------------------------------------------------------------------------------

  //------------------------------------------------------------------------------------------------------------

  const togglebar = () => {
    setopenbar(!openbar)

  }

  const addnode = (rootnode, parentid, newnode) => {
    if (rootnode.id === parentid) {
      rootnode.children = [...(rootnode.children || []), newnode]
      return true;
    }
    for (let child of rootnode.children) {
      if (addnode(child, parentid, newnode)) {
        return true;

      }
    }
    return false;

  }
  const findnodebyid = (id, nodetr) => {
    if (nodetr?.id === id) {
      return nodetr
    }
    if (nodetr.children && nodetr.children.length > 0) {
      for (let child of nodetr.children) {
        const result = findnodebyid(id, child)
        if (result) {
          return result;
        }
      }
    }
    return null;

  }
  const findparent = (root, targetId) => {
    if (!root || !root.children) {
      return null;
    }
    if (targetId === "root") {
      return root;
    }

    for (let child of root.children) {
      if (child.id === targetId) {
        return root;
      }

      const result = findparent(child, targetId);
      if (result !== null) {
        return result;
      }
    }

    return null;
  };





  function addelement(passedid, type, props = {}, onclick = [], parid) {

    let id = "";
    if (passedid === "") {
      id = `${type}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }
    else {
      id = passedid
    }
    setTree(prevTree => {
      const clonedTree = cloneDeep(prevTree);
      setselectedcomp(id);

      const dragover = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.target === e.currentTarget) {
          showid(id)


        }



      }
      const select = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.target === e.currentTarget) {
          console.log("selec id : ", id)


        }



      }


      const newNode = new Treenode(id, type,

        {
          ...props,
          className: id,
          onclick: onclick,
          onDragOver: dragover,
          baseWidth: dimensions.width || 1000,


        }
      );

      addnode(clonedTree, parid, newNode); // this modifies the clonedTree
      componentCount = componentCount + 1;
      return clonedTree; // this is the updated tree passed back to React
    });
    return id;
  }

  //************************************************************************************************* */


  function sayhello(d) {
    console.log(d);
    console.log("this funciton called")
  }


  function showid(id) {

    setselectedcomp(id);

  }


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
  const addsection = (height) => {

    const windowheight = window.innerHeight;

    const posi = (height / 100) - 1;
    const newsectionposition = windowheight * posi;
    addelement("", "div", {
      style: {
        backgroundColor: '#ecf6ff',
        marginTop: "0px",
        marginBottom: "0px",
        position: "absolute",
        width: '100%',
        height: '100vh',
        borderRadius: "0px",
        transform: `translate(0px,${newsectionposition}px)`
      },
      x: "0",
      y: `${newsectionposition}`


    }, [{ funcname: "showid", param: ["$id"] }], "root");
  }




  const topbutarray = [

    { id: "tm1", text: "Undo", icon: <i className="fi fi-rr-rotate-left"></i>, func: "any" },
    { id: "tm2", text: "Redo", icon: <i className="fi fi-rr-rotate-right"></i>, func: "any" },


    { id: "tm4", text: "Collaborate", icon: <i class="fi fi-rr-piggy-bank"></i>, func: "any" },
    { id: "tm5", text: "Share", icon: <i className="fi fi-rr-share"></i>, func: "any" },
    { id: "tm14", text: "Build using AI", icon: <i className="fi fi-rr-leaf"></i>, func: "any" }
  ];



  const removenode = (targetid, rootnode) => {
    rootnode.children = rootnode.children.filter(child => child.id !== targetid);
    for (let child of rootnode.children) {
      removenode(targetid, child)
    }
  }

  const updateComponent = (id, newData, rootNode) => {

    if (rootNode.id === id) {
      Object.assign(rootNode, newData); // safely update
      return true;
    }

    for (let child of rootNode.children) {
      if (updateComponent(id, newData, child)) {
        return true;
      }
    }

    return false;
  }



  /* const updatecomp = (id, newdata) => {
     const clonedtree = cloneDeep(tree);
     const node = findnodebyid(id, clonedtree);
 
     if (node) {
       node.props = {
         ...node.props,
         ...newdata,
 
       };
       if (newdata.style) {
         node.props.style = {
           ...(node.props.style || {}),
           ...newdata.style
         }
       }
 
     }
 
     setTree(clonedtree);
   };
 */
  const updatecomp = (id, newdata) => {
    setTree(prevTree => {
      const clonedTree = cloneDeep(prevTree);
      const node = findnodebyid(id, clonedTree);

      if (node) {
        node.props = {
          ...node.props,
          ...newdata,
          style: {
            ...(node.props?.style || {}),
            ...(newdata.style || {}),
          },
        };
      }

      return clonedTree;
    });
  };
  const parentselcomp = findparent(tree, selectedcomp);



  function useElementSize(ref, deps = []) {
    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
      const element = ref.current;
      if (!element) return;

      // Helper to update only if changed
      const updateSize = (width, height) => {
        setSize(prev =>
          prev.width !== width || prev.height !== height
            ? { width, height }
            : prev
        );
      };

      // Initial measurement
      updateSize(element.offsetWidth, element.offsetHeight);

      // Observe size changes
      const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
          const { width, height } = entry.contentRect;
          updateSize(width, height);
        }
      });

      observer.observe(element);
      return () => observer.disconnect();
    }, deps);

    return size;
  }




  async function handleDownloadPDF() {
    const root = document.getElementsByClassName("root")[0];
    const pages = root.children; // Get each child div (each is a "page")
    // const pdf = new jsPDF("p", "pt", "a4"); // A4 in points
    const pdf = new jsPDF("landscape", "px", [1280, 720]);
    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], {
        scale: 2,
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");

      const pdfWidth = pdf.internal.pageSize.getWidth(); // 595.28pt
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      if (i !== 0) pdf.addPage(); // Add a new page after the first one
      pdf.addImage(imgData, "PNG", 0, 0, 1280, 720);
    }

    pdf.save("download.pdf");
  }



  function topdf() {
    setselectedcomp("root");
    setTimeout(() => {
      handleDownloadPDF();
    }, 1000);
  }


  return (
    <>
      <div className="maincancontainer">

        <Popup openpopup={openpopup} setopenpopup={setopenpopup} typecont={typecont}></Popup>

        <div className="settop">
          <div className="ji"><NavLink to={"/app"}><button className="close"><i className="fi fi-rr-cross"></i></button></NavLink>
            <button onClick={() => { setopenbar(!openbar); opensetbar(false) }} className="ju" style={{ backgroundColor: openbar ? "rgb(167, 216, 255)" : "", color: openbar ? "rgba(0, 0, 0, 1)" : "" }}><i class="fi fi-rr-vector-alt"></i>Site Flow</button>
          </div>



          <div className="uj">
            <div style={{ display: "flex", alignItems: "center" }}><div className="sitelogo"></div>
              <h1 contentEditable>Untitled Page</h1>
              <button><i className="fi fi-rr-rotate-left"></i></button>
              <button><i className="fi fi-rr-rotate-right"></i></button>
              <button ><i className="fi fi-rr-briefcase"></i></button>
              <button><i className="fi fi-rr-code-simple"></i></button>
              <button onClick={() => setbreakpoint("fullscreen")} style={{ backgroundColor: breakpoint === "fullscreen" ? "rgb(167, 216, 255)" : "", color: breakpoint === "fullscreen" ? "rgba(0, 0, 0, 1)" : "" }}><i className="fi fi-rr-eye"></i></button>
              <button ><i className="fi fi-rr-share"></i></button>
            </div>
          </div>
          <div className="breakpoints" style={{ display: "flex", alignItems: "center" }}>

            <button onClick={() => setbreakpoint("desktop")} style={{ backgroundColor: breakpoint === "desktop" ? "rgb(167, 216, 255)" : "", color: breakpoint === "desktop" ? "rgba(0, 0, 0, 1)" : "" }}> <i className="fi fi-rr-computer"></i></button>
            <button onClick={() => setbreakpoint("tablet")} style={{ backgroundColor: breakpoint === "tablet" ? "rgb(167, 216, 255)" : "", color: breakpoint === "tablet" ? "rgba(0, 0, 0, 1)" : "" }}> <i className="fi fi-rr-tablet"></i></button>

            <button onClick={() => setbreakpoint("responsive")} style={{ backgroundColor: breakpoint === "responsive" ? "rgb(167, 216, 255)" : "", color: breakpoint === "responsive" ? "rgba(0, 0, 0, 1)" : "" }}><i className="fi fi-rr-smartphone"></i></button>
            <p>{parseInt(candim.width)} .•px</p>
          </div>
          <button className="resp"><i class="fi fi-rr-code-branch"></i>Orion Copilot</button>
          <button onClick={() => { opensetbar(!openset); setopenbar(false) }} className="ju" style={{ backgroundColor: openset ? "rgb(167, 216, 255)" : "", color: openset ? "rgba(0, 0, 0, 1)" : "" }}><i class="fi fi-rr-paintbrush-pencil"></i> Appearance</button>

        </div>
        <div className="secsidebar" style={{ display: breakpoint === "fullscreen" ? "none" : "flex" }}>
          <button><i class="fi fi-rr-shop"></i></button>
          <button><i class="fi fi-rr-apps"></i></button>
          <button><i class="fi fi-rr-customize-computer"></i></button>
          <button><i class="fi fi-rr-list-check"></i></button>
          <button><i class="fi fi-rr-search"></i></button>
          <button><i class="fi fi-rr-volleyball"></i></button>
          <button><i class="fi fi-rr-model-cube-arrows"></i></button>
          <button><i class="fi fi-rr-artificial-intelligence"></i></button>

        </div>
        <div className="cansidebar" style={{ display: openbar ? "flex" : "none" }}>

          <Canvassidebar work={work} togglebar={togglebar} setcodebox={setcodebox} setbreakpoint={setbreakpoint} addelement={addelement} selectedcomp={selectedcomp} openbar={openbar} setshowbox={setshowbox} findnodebyid={findnodebyid} tree={tree} updatecomp={updatecomp} addsection={addsection} setopenbar={setopenbar} showbox={showbox}></Canvassidebar>


        </div>
        <div className="canvas" ref={canref} style={{ width: breakpoint === "fullscreen" ? "100%" : breakpoint === "responsive" ? "400px" : breakpoint === "tablet" ? "800px" : "1200px", marginTop: breakpoint === "fullscreen" ? "70px" : "60px" }}>
          <RenderComponent json={tree} selectedcomp={selectedcomp} updatecomp={updatecomp} tree={tree} parentref={parentref} currref={currref} parcomp={parentselcomp} dimensions={dimensions} sayhello={sayhello} showid={showid} setselectedcomp={setselectedcomp} breakpoint={breakpoint} candim={candim} />
        </div>
        <div className="settingsbox" style={{ display: openset ? "flex" : "none" }}>

          <Settings selectedcomp={findnodebyid(selectedcomp, tree)} updatecomp={updatecomp} addelement={addelement} /></div>
      </div>
    </>

  );
}

export default Canvaspart;
