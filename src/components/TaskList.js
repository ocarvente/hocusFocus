import React, {useEffect, useState} from "react"
import Collapsible from "./Collapsible"
import { nanoid } from 'nanoid'


export default function TaskList() {

    const [tasks, setTasks] = useState([])

    

    const [currentTaskId, setCurrentTaskId] = useState(
        (tasks[0] && tasks[0].id) || ""
    )

    function createNewTask() {
        const newTask = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setTasks(prevTasks => [newTask, ...prevTasks])
        setCurrentTaskId(newTask.id)
    }

    const taskList = tasks.map (task => {
        <div>{tasks.id}</div>
    })

    
    return (
        <div className ="taskList--container">
            <button className="taskList--add" onClick ={createNewTask}>Add Task </button>
        </div>
    )
}