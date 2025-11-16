import react, { useState } from "react";
import "./canvas.css";
import Toolbox from "./components/toolbox";











//things i need
//Full screen div , halfscreen div,  
function Componentsbox({ addelement, selectedcomp, findnodebyid, tree, updatecomp, addsection, setopenbar, showbox, setshowbox, work }) {


 


  function addcontainer() {
    const contid = addelement("", "div", {
      style: {
        backgroundColor: '#ffffff',
        marginTop: "0px",
        marginBottom: "0px",
        width: `100%`,
        height: `fit-content`,
        minHeight: "100%",
        borderRadius: "0px",
        left: 0,
        top: 0,
        display: "flex",
        flexWrap: "wrap",

        position: "absolute",
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
    return contid;
  }

  function addcontainer2() {
    const contid = addelement("", "div", {
      style: {

        display: "flex",
        flexWrap: "wrap",

        height: "fit-content",
        minHeight: "500px",
        width: "100%",
        backgroundColor: "#ffffff",

        position: "relative",

      },
      x: "0",
      y: "0",
      vg: "noedit"

    }, [{ funcname: "showid", param: ["$id"] }], "root");



    return contid;
  }

 




  //=============================================================================================================================

  const butarray = [
    {
      id: "cm0", text: "Boxes", icon: <i class="fi fi-rr-draw-square" ><p>Container Stack</p></i>, func: "any", drfunc: () => {

        addelement("", "div", {

          style: {

            backgroundColor: "#eef1f4ff",
            width: "33.33%",
            height: "100%",
            position: "absolute"

          }
          , x: "0",
          y: "0",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }, { funcname: "sayhello", param: ["hello"] }], selectedcomp);

      }, drg: () => { setopenbar(false) }
    },
    {
      id: "cm1", text: "Boxes", icon: <i class="fi fi-rr-cursor" ><p>Flex box</p></i>, func: "any", drfunc: () => {

        addelement("", "div", {
          style: {
            backgroundColor: '#ddecffff',
            position: "relative",
            width: "95%",
            minHeight: "60px",
            height: "90%",
            alignSelf: "center",
            justifySelf: "center",
            display: "flex", flexDirection: "column",
            top: 0,
            left: 0
          }
          , x: "0",
          y: "0",
          vg: "noedit",
        }, [{ funcname: "showid", param: ["$id"] }, { funcname: "sayhello", param: ["hello"] }], selectedcomp);

      }, drg: () => { setopenbar(false) }
    }
    , {
      id: "cm2", text: "Button", icon: <i class="fi fi-rr-subscription-alt"><p>Button</p></i>, func: "any", drfunc: () => {
        addelement("", "button", {
          style: {

            backgroundColor: "dodgerblue",
            color: "white",
            fontSize: "20px",
            border: "0px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "30%",
            height: "10%",
            position: "absolute"


          },
          x: "0",
          y: "0",
          children: "Click me",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    },

    {
      id: "cm3", text: "Images", icon: <i className="fi-rr-picture"><p>Image</p></i>, func: "any", drfunc: () => {

        addelement("", "div", {

          style: {
            position: "absolute",
            width: "40%",
            height: "90%",
            backgroundColor: "#adcdffff",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: "",
            borderRadius: "20px"

          }
          , x: "0",
          y: "0",
          vg: "edit",



        }, [{ funcname: "showid", param: ["$id"] }, { funcname: "sayhello", param: ["hello"] }], selectedcomp);

      }, drg: () => { setopenbar(false) }
    },

    {
      id: "cm4", text: "Heading", icon: <i className="fi-rr-heading"><p>Heading</p></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "900",
            cursor: "text",
            textAlign: "center",
            margin: 0,
            fontFamily: "lexend",
            fontSize: "30px",
            width: "30%",
          },
          x: "0",
          y: "0",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    }, {
      id: "cm5", text: "Text", icon: <i className="fi-rr-text-box"><p>Text</p></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",
            cursor: "text",
            textAlign: "center",
            margin: 0,
            fontFamily: "lexend",
            fontSize: "20px",
            width: "30%",
          },
          x: "0",
          y: "0",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    },
    {
      id: "cm6", text: "Shapes", icon: <i className="fi-rr-resources"><p>Shapes</p></i>, func: "any", drfunc: () => {
        addelement("", "div", {
          // To allow the user to edit the content
          style: {
            fontSize: "16px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",

            cursor: "pointer",
            textAlign: "center",
            letterSpacing: "0.1px",
            lineHeight: "",
            width: "30%",
            height: "8%",




          },
          x: "0",
          y: "0",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    },
    {
      id: "cm7", text: "Text", icon: <i className="fi-rr-horizontal-rule"><p>Line</p></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "16px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",
            transform: "translate(0px,0px)",
            cursor: "pointer",
            textAlign: "center",
            letterSpacing: "0.1px",
            lineHeight: "",
            width: "30%",
            height: "8%",




          },
          x: "0",
          y: "0",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    }

    , {
      id: "cm8", text: "Text", icon: <i className="fi-rr-list"><p>List</p></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "16px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",
            transform: "translate(0px,0px)",
            cursor: "pointer",
            textAlign: "center",
            letterSpacing: "0.1px",
            lineHeight: "",
            width: "30%",
            height: "8%",




          },
          x: "0",
          y: "0",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    }, {
      id: "cm9", text: "Text", icon: <i className="fi-rr-table-list"><p>Table</p></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "16px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",
            transform: "translate(0px,0px)",
            cursor: "pointer",
            textAlign: "center",
            letterSpacing: "0.1px",
            lineHeight: "",
            width: "30%",
            height: "8%",




          },
          x: "0",
          y: "0",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    }
    , {
      id: "cm10", text: "Text", icon: <i className="fi-rr-people-poll"><p>Poll</p></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "16px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",
            transform: "translate(0px,0px)",
            cursor: "pointer",
            textAlign: "center",
            letterSpacing: "0.1px",
            lineHeight: "",
            width: "30%",
            height: "8%",




          },
          x: "0",
          y: "0",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    }
    , {
      id: "cm11", text: "Text", icon: <i className="fi-rr-square-poll-vertical"><p>Bar Graph</p></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "16px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",
            transform: "translate(0px,0px)",
            cursor: "pointer",
            textAlign: "center",
            letterSpacing: "0.1px",
            lineHeight: "",
            width: "30%",
            height: "8%",




          },
          x: "0",
          y: "0",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    },
    {
      id: "cm12", text: "Text", icon: <i className="fi-rr-chart-line-up"><p>Line Graph</p></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "16px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",
            transform: "translate(0px,0px)",
            cursor: "pointer",
            textAlign: "center",
            letterSpacing: "0.1px",
            lineHeight: "",
            width: "30%",
            height: "8%",




          },
          x: "0",
          y: "0",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    }, {
      id: "cm13", text: "Text", icon: <i className="fi-rr-chart-pie-alt"><p>Pie Chart</p></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "16px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",
            transform: "translate(0px,0px)",
            cursor: "pointer",
            textAlign: "center",
            letterSpacing: "0.1px",
            lineHeight: "",
            width: "30%",
            height: "8%",




          },
          x: "0",
          y: "0",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    }, {
      id: "cm14", text: "Text", icon: <i className="fi-rr-chart-scatter"><p>Scattered Graph</p></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "16px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",
            transform: "translate(0px,0px)",
            cursor: "pointer",
            textAlign: "center",
            letterSpacing: "0.1px",
            lineHeight: "",
            width: "30%",
            height: "8%",




          },
          x: "0",
          y: "0",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    }, {
      id: "cm15", text: "Text", icon: <i className="fi-rr-home"><p>Icons</p></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "16px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",
            transform: "translate(0px,0px)",
            cursor: "pointer",
            textAlign: "center",
            letterSpacing: "0.1px",
            lineHeight: "",
            width: "30%",
            height: "8%",




          },
          x: "0",
          y: "0",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    }, {
      id: "cm16", text: "Text", icon: <i className="fi-rr-smile"><p>Emoji</p></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "16px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",
            transform: "translate(0px,0px)",
            cursor: "pointer",
            textAlign: "center",
            letterSpacing: "0.1px",
            lineHeight: "",
            width: "30%",
            height: "8%",




          },
          x: "0",
          y: "0",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    }, {
      id: "cm17", text: "Text", icon: <i className="fi-rr-text-check"><p>Party Font</p></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "16px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",
            transform: "translate(0px,0px)",
            cursor: "pointer",
            textAlign: "center",
            letterSpacing: "0.1px",
            lineHeight: "",
            width: "30%",
            height: "8%",




          },
          x: "0",
          y: "0",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    }, {
      id: "cm18", text: "Text", icon: <i className="fi-rr-copy-image"><p>Gallery</p></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "16px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",
            transform: "translate(0px,0px)",
            cursor: "pointer",
            textAlign: "center",
            letterSpacing: "0.1px",
            lineHeight: "",
            width: "30%",
            height: "8%",
          },
          x: "0",
          y: "0",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    }, {
      id: "cm19", text: "Text", icon: <i className="fi-rr-video-camera-alt"><p>Videos</p></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "16px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",
            transform: "translate(0px,0px)",
            cursor: "pointer",
            textAlign: "center",
            letterSpacing: "0.1px",
            lineHeight: "",
            width: "30%",
            height: "8%",




          },
          x: "0",
          y: "0",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    }, {
      id: "cm20", text: "Text", icon: <i className="fi-rr-volume"><p>Audio</p></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "16px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",
            transform: "translate(0px,0px)",
            cursor: "pointer",
            textAlign: "center",
            letterSpacing: "0.1px",
            lineHeight: "",
            width: "30%",
            height: "8%",




          },
          x: "0",
          y: "0",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    }, {
      id: "cm21", text: "Iframe", icon: <i className="fi-rr-square"><p>IFrame</p></i>, func: "any", drfunc: () => {
        addelement("", "h1", {
          // To allow the user to edit the content
          style: {
            fontSize: "16px",
            border: "0px",
            color: "#000000",
            position: "absolute",
            fontWeight: "400",
            transform: "translate(0px,0px)",
            cursor: "pointer",
            textAlign: "center",
            letterSpacing: "0.1px",
            lineHeight: "",
            width: "30%",
            height: "8%",




          },
          x: "0",
          y: "0",
          children: "Enter text here",
          vg: "edit",
        }, [{ funcname: "showid", param: ["$id"] }], selectedcomp);
      }, drg: () => { setopenbar(false) }
    },

  ];

 
  return (<>
    <div className="inputdata" style={{ display: work === "website" ? "flex" : "none" }}>
      <h3>Navbar</h3>

      <div

        onClick={() => {
          addcontainer2();
        }}

        className="btrdiv"

      >
        <p>Add section</p><i className="fi fi-rr-square"></i>
      </div>

      <div className="nvelem">
        <button>Home <i className="fi fi-rr-circle"></i> <i className="fi fi-rr-cross"></i></button>
        <button>Home <i className="fi fi-rr-circle"></i> <i className="fi fi-rr-cross"></i></button>

      </div>
      <div className="hr"></div>

      <h3>Sidebar</h3>
      <div

        onClick={() => {
          addcontainer2();

        }}

        className="btrdiv"

      >
        <p>Link a page</p><i className="fi fi-rr-square"></i>
      </div>

      <div className="nvelem">
        <button>Home <i className="fi fi-rr-circle"></i> <i className="fi fi-rr-cross"></i></button>
        <button>Home <i className="fi fi-rr-circle"></i> <i className="fi fi-rr-cross"></i></button>
      </div>
      <div className="hr"></div>




      <h3>Drag and Drop</h3>
      <button
        onClick={() => {
          setshowbox(showbox === "components" ? "none" : "components");
        }}
        style={{ border: "0px", fontSize: "13px", justifyContent: "space-between" }}
      >
        Components <i className="fi fi-rr-angle-small-down"></i>
      </button>

      <div className="tooltop" style={{ display: showbox === "components" ? "flex" : "none" }}>
        <Toolbox buttarray={butarray} />
      </div>

      <div className="hr"></div>

    </div>

  </>)

}
export default Componentsbox