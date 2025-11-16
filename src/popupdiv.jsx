import React from "react";
export default function Popup({openpopup,setopenpopup,typecont}){

    return (
        <>
 <div className="popupdiv" style={{display:openpopup?"flex":"none"}}>
            <button className="popclose" onClick={()=>setopenpopup(false)}><i className="fi fi-rr-cross"></i></button>
            <div className="mainpopdiv">
                <div className="navb"> <h1>Add a section</h1></div>

                {
                    typecont==="addsection"?
                    (
                        <div>
                            </div>
                    ):
                    
                    typecont==="linkpage"?(
                      <div></div>  
                    ):

                    typecont==="button"?(
                      <div></div>  
                    ):typecont==="list"?(
                        <div></div>
                    ):typecont==="linkpage"?(
                        <div>
                            </div>
                    ):typecont==="link"?(
                        <div></div>
                    ):typecont==="table"?(
                        <div></div>
                    ):typecont==="poll"?(
                        <div></div>

                    ):typecont==="imiage"?(
                        <div></div>
                    ):typecont==="bargraph"?(
                        <div></div>
                    ):typecont==="linegraph"?(
                        <div></div>
                    ):typecont==="pichart"?(
                        <div></div>
                    ):typecont==="scattered"?(
                        <div></div>
                    ):typecont==="list"?(
                        <div></div>
                    ):typecont==="list"?(
                        <div></div>
                    ):typecont==="video"?(
                        <div></div>
                    ):typecont==="audio"?(
                        <div></div>
                    ):null
                }
                    
                    

            </div>
</div>
        </>
    )

}