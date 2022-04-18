import React from "react"


export default function Tracker (props) {
   
    const modeString = props.mode === "Long"? "This is your Long Break!": 
    
        `This is your ${props.mode} # ${props.currentModeCount}`

    return (
        <div >
            <h1>{modeString}</h1>
        </div>
    )
}