
import React, {useState, useEffect} from "react"


export default function CountDown (props) {

    const [seconds, setSeconds] = useState(15)
    const[nIntervID, setNIntervID] = useState(null)
    const[isRunning, setIsRunning] = useState(false)

    const{mode, pomoTracker, handlePomoTracker} = props

    useEffect(() => {
        if (seconds === 0) {
            stopTimer()
            if (mode === "Pomodoro" && pomoTracker === 4) {
                changeMode("Long")
            } else if (mode === "Pomodoro") {
                changeMode("Break")
            } else {
                changeMode("Pomodoro")
                handlePomoTracker()
            }
        }

    }, [seconds])
    
    function changeMode(chosenMode) {
        if (isRunning) {
            stopTimer()
        }
        props.setMode(chosenMode)
        if (chosenMode === "Pomodoro") {
            setSeconds(25)
        } else if (chosenMode ==="Break") {
            setSeconds(5)
        } else if (chosenMode ==="Long") {
            setSeconds(15)
        }
    }

    function handleClick() {
        
        if (!nIntervID) {
            startTimer()
        } else {
            stopTimer()
        }
    }
    function startTimer() {
        setNIntervID(setInterval(decreaseTime, 500)) 
        setIsRunning(true)
    }

    function decreaseTime() { 
        setSeconds(prevSeconds => prevSeconds - 1)
    }

    function stopTimer() {
        clearInterval(nIntervID)
        setNIntervID(null)
        setIsRunning(false)
    }


    const minutes = Math.floor(seconds/60)
    const second = Math.floor(seconds%60)
    const timeString = second < 10 ? `${minutes}:0${second}` : `${minutes}:${second}` 


    return (
      
            <div className="clock--container">
                <div className="buttons">
                    <button className="option" onClick={() => changeMode("Pomodoro")}>Pomodoro</button>
                    <button className="option" onClick={() => changeMode("Break")}>Short Break</button>
                    <button className="option" onClick={() => changeMode("Long")}>Long Break</button>
                </div>
                <span className="counter--text">{timeString}</span>
                <button className="stop--button" onClick={handleClick}>
                {isRunning ? "Pause" : "Start"}
                </button> 
            </div>
                 
    )
}