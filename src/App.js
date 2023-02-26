import React, {useState, useEffect} from "react"
import Navbar from "./components/Navbar"
import Display from "./components/Display"
import TaskList from "./components/TaskList"


function App() {

  const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode')) || "hocusFocus")

  const[pomodoro, setPomodoro] = useState(25);
  const[shortBreak, setShortBreak] = useState(5); 
  const[longBreak, setLongBreak] = useState(15);


  
  return (
    <div className={`${mode}--style`}>
        <Navbar
          pomodoro ={pomodoro}
          setPomodoro = {setPomodoro}
          shortBreak = {shortBreak}
          setShortBreak = {setShortBreak}
          longBreak = {longBreak}
          setLongBreak = {setLongBreak}
        />
        <Display 
          mode = {mode}
          setMode = {setMode}
          pomodoro ={pomodoro}
          shortBreak = {shortBreak}
          longBreak = {longBreak}
        />
        <TaskList/>
    </div>
  )
   
}

export default App;


