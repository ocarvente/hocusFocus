import {  useState} from "react"


export default function Collapsible(props) {
  

    const { taskId, name, isExpanded, updateTask, setCurrentTaskId, deleteTask} = props

    
 
    const[data, setData] = useState(name);

    function handleSubmit(event) {
        event.preventDefault()
        updateTask(taskId, data, false);
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
        if (name === "")  {
            handleDelete(event);
        } else {
            updateTask(taskId, name, false);
        }
    }

    return (
      
           isExpanded ? 
                <div className = "form-container">
                    < form className = "form" >
                        <input
                            
                            type="text"
                            placeholder="What are you working on?"
                            className="form-input"
                            name="name"
                            value={data}
                           
                            onChange={(event) => {
                                setData(event.target.value)
                                }
                            }
                                
                            

                            
                        />
                        {/* <input
                            type="text"
                            placeholder="Description"
                            className="form-input"
                            name="description"
                            // value={description}
                            onChange={(event) => updateTask(event) }
                        />*/}
                        <div className="button--spacing"> 
                            <button onClick = {handleSubmit} disabled={data === ""?  true : false}>Save</button>
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
