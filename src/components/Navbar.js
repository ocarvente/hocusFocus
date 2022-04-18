import React from "react"

export default function Navbar () {
    
    return (
        <div className="nav--container">
           <div className="nav--center">
                <div className="nav--logo">
                    <img className="nav--image" src="/images/icon.png" alt ="#"/>
                    <h1 className="nav--description">Pomofocus</h1>
                </div>
                <div className="nav--buttons">
                    <button>Report</button>
                    <button>Setting</button>
                    <button>Login</button>
                </div>

           </div>      
        </div>
    )
}
