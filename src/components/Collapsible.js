import { createRef } from "react"


export default function Collapsible(props) {
  

    const { taskId, name, isExpanded, updateTask, setCurrentTaskId, deleteTask} = props

    const formName = createRef()


    function handleSubmit(event) {
        event.preventDefault()
        updateTask(taskId, formName.current.value, false)
    }

    function handleEdit(event) {
        setCurrentTaskId(taskId)
        updateTask(taskId, name, true)

    }

    function handleDelete(event) {
        setCurrentTaskId(""); 
        deleteTask(taskId);
    }

    function handleCancel(event) {
        if (formName.current.value === "")  {
            handleDelete(event);
        } else {
            handleSubmit(event);
        }
    }

    return (
      
           isExpanded ? 
                <div className = "form-container">
                    < form className = "form" >
                        <input
                            defaultValue={name}
                            type="text"
                            placeholder="What are you working on?"
                            className="form-input"
                            name="name"
                            // value={name}
                            ref = {formName}
                            onChange={(event) => updateTask(event)}
                        />
                        {/* <input
                            type="text"
                            placeholder="Description"
                            className="form-input"
                            name="description"
                            // value={description}
                            onChange={(event) => updateTask(event) }
                        />*/}
                        <div> 
                            <button name="isExpanded" onClick = {handleSubmit}>Save</button>
                            <button onClick = {handleDelete}>Delete</button>
                            <button onClick = {handleCancel}>Cancel</button>
                        </div>
                    </form >
                </div >
            :
                <div className="task--container">
                    <div className="task-info">
                        <div>{name}</div>
                    </div>
                    
                    <button name="isExpanded" onClick={handleEdit}>Edit</button>
                    
                </div>
           
        
    )
}
