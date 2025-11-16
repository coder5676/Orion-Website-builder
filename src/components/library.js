import react from "react";

function Library(){
    return(
        <>
       <h2 className="libh2">Components and Assets</h2>
       <h1 className="libh1">Detailed Assets Library</h1>
       <p className="libp">All your saved images, URLs, and icons are conveniently organized here to assist you in building your portfolio. This setup is designed to simplify your workflow, allowing you to easily find and move them to workspace before you start building. </p>
       <div className="topnav"><button>Templates</button><button>Images</button><button>URLs</button><button>Colors</button><button>Fonts</button></div>
        </>
    )

}
export default Library;