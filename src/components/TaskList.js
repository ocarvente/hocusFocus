import React, {useState} from "react"
import { nanoid } from 'nanoid'
import Collapsible from "./Collapsible"


export default function TaskList() {

    const [tasks, setTasks] = useState([])
  

    const [currentTaskId, setCurrentTaskId] = useState("")

    function createNewTask() {
        unExpandCurrentTask()
        const newTask = {
            id: nanoid(),
            name: "",
            isExpanded: true,
            isCompleted: false 
        }
        setTasks(prevTasks => [...prevTasks, newTask])
        setCurrentTaskId(newTask.id)
    }

    function unExpandCurrentTask() {
        if (currentTaskId === "") return 
        const currentTask = tasks.find((task) => task.id === currentTaskId) 
        updateTask(currentTask.id, currentTask.name, false)
    }




    
    const taskList = tasks.map((task) => (
        <Collapsible
            key ={task.id}
            taskId={task.id}
            name = {task.name}
            
            updateTask = {updateTask}
            isExpanded={task.isExpanded}
            deleteTask = {deleteTask}
            isCompleted = {task.isCompleted}
            setCurrentTaskId = {setCurrentTaskId}
            
        /> 
    ));


    function updateTask(taskId, name, isExpanded) {
        let newTasks = tasks.reduce((res,elem) => {
            elem.id === taskId ? 
            res.push(
            {   ...elem,
                name: name,
                isExpanded: isExpanded
            }) 
                :
            res.push(elem);
            return res;
        }, [])
        setTasks(newTasks)
    }



    // function updateTask(event) {
    //     const{name, value, type} = event.target
    //    setTasks(prevTasks => {
    //        const newArray = []
    //        for (let i = 0; i < prevTasks.length; i++) {
    //            const oldTask = prevTasks[i]
    //            if (oldTask.id === currentTaskId) {
    //                newArray.push({ ...oldTask, [name]: name ==="isExpanded" ? !oldTask.isExpanded : value})
    //            } else {
    //                newArray.push(oldTask)
    //            }
    //        }
    //        return newArray
    //    })

    // }

    function deleteTask(taskId) {
        setTasks(oldTasks => {
            return oldTasks.filter(oldTask => oldTask.id !== taskId)
        })
        
    }


    
    return (
        <div className ="taskList--container">
            {taskList}
            <button className="taskList--add" onClick={createNewTask}>Add Task </button>
        </div>
    )
}
