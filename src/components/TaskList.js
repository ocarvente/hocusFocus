import React, {useEffect, useState} from "react"
import { nanoid } from 'nanoid'
import useCollapse from 'react-collapsed';
import Collapsible from "./Collapsible"


export default function TaskList() {

    const [tasks, setTasks] = useState([])
    let lastElement = tasks.length - 1
    const [currentTaskId, setCurrentTaskId] = useState(
        (tasks[lastElement] && tasks[lastElement].id) || ""
    )

    function createNewTask() {
        const newTask = {
            id: nanoid(),
            name: "",
            description: "",
            isExpanded: true  
        }
        setTasks(prevTasks => [...prevTasks, newTask])
        setCurrentTaskId(newTask.id)
    }




    
    const taskList = tasks.map(task => (
        
            <Collapsible
                key ={task.id}
                name = {task.name}
                description = {task.description}
                updateTask = {updateTask}
                isExpanded={task.isExpanded}
                setCurrentTaskId = {setCurrentTaskId}

            /> 
        )
    )

    function updateTask(event) {
        const{name, value, type} = event.target
       setTasks(prevTasks => {
           const newArray = []
           for (let i = 0; i < prevTasks.length; i++) {
               const oldTask = prevTasks[i]
               if (oldTask.id === currentTaskId) {
                   newArray.push({ ...oldTask, [name]: name ==="isExpanded" ? !oldTask.isExpanded : value})
               } else {
                   newArray.push(oldTask)
               }
           }
           return newArray
       })

    }

    function deleteTask(event, taskId) {
        event.stopPropagation()
        setTasks(oldTasks => {
            return oldTasks.filter(oldTask => oldTask.id !=taskId)
        })
        
    }


    
    return (
        <div className ="taskList--container">
            {taskList}
            <button className="taskList--add" onClick={createNewTask}>Add Task </button>
        </div>
    )
}