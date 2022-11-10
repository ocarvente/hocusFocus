import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Display from "./components/Display"
import TaskList from "./components/TaskList"


function App() {

  const [mode, setMode] = useState(/*JSON.parse(localStorage.getItem('mode')) ||*/"hocusFocus")

  

  return (
    <div className={`${mode}--style`}>
        <Navbar/>
        <Display 
          mode = {mode}
          setMode = {setMode}
        />
        <TaskList/>
    </div>
  )
   
}

export default App;


