
import React, {useState, useEffect} from "react"


export default function CountDown (props) {
    const{mode, pomoTracker, handlePomoTracker, pomodoro, shortBreak, longBreak} = props

    const [seconds, setSeconds] = useState(pomodoro*60)
    const[nIntervID, setNIntervID] = useState(null)
    const[isRunning, setIsRunning] = useState(false)


    useEffect(() => {
        if (seconds === 0) {
            stopTimer()
            if (mode === "hocusFocus" && pomoTracker === 4) {
                changeMode("Long");
            } else if (mode === "hocusFocus") {
                changeMode("Break");
            } else {
                changeMode("hocusFocus");
                handlePomoTracker();
            }
        } else {
            setSeconds(pomodoro*60);
        }

    },[pomodoro])
    
    function changeMode(chosenMode) {
        if (isRunning) {
            stopTimer()
        }
        props.setMode(chosenMode)
        if (chosenMode === "hocusFocus") {
            setSeconds(pomodoro*60)
        } else if (chosenMode ==="Break") {
            setSeconds(shortBreak*60)
        } else if (chosenMode ==="Long") {
            setSeconds(longBreak*60)
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
        setNIntervID(setInterval(decreaseTime, 1000)) 
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
                <div className="button--spacing">
                    <button className={mode === "hocusFocus" ? "hocus--selected" : "option"} onClick={() => changeMode("hocusFocus")}>Pomodoro</button>
                    <button className={mode === "Break" ? "break--selected" : "option"} onClick={() => changeMode("Break")}>Short Break</button>
                    <button className={mode === "Long" ? "long--selected" : "option"} onClick={() => changeMode("Long")}>Long Break</button>
                </div>
                <span className="counter--text">{timeString}</span>
                <button className="start--button" onClick={handleClick}>
                {isRunning ? "Pause" : "Start"}
                </button> 
            </div>
                 
    )
}