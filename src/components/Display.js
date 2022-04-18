import React, {useState} from "react"
import CountDown from "./CountDown"
import Tracker from "./Tracker"

export default function Display(props) {

    const [pomoTracker, setPomoTracker] = useState(/*JSON.parse(localStorage.getItem('pomoCount')) || */1)



    function handlePomoTracker() {
        
        setPomoTracker(prevCount => {
            if (currentMode === "Break" & currentModeCount === 4 ) {
                        return 1
                    } else {
                        return (prevCount === 4 ?
                            1  : prevCount + 1
                        )
                    }                 
            }
        )           
    }


    const currentMode = props.mode
    const currentModeCount = pomoTracker

    return (
        <div className="display" > 
            <CountDown
                mode = {props.mode}  
                setMode ={props.setMode}
                pomoTracker = {pomoTracker}
                handlePomoTracker = {handlePomoTracker}
            />
            <Tracker
                mode = {props.mode}
                currentModeCount={currentModeCount}
                
            />
        </div> 
    )
}