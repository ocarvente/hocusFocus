import React, {useState} from "react"


export default function Collapsible (props) {

    const {  taskId, name, description, isExpanded, updateTask, deleteTask, isCompleted} = props

    const[touched, setTouched]  = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        let formData = new FormData(event.target)
        //console.log(formData.get("name"), formData.get("description"))
        updateTask(taskId, formData.get("name"), formData.get("description"));

    }

    function handleTouch(event) {
        setTouched(true)
        
    }

    function handleEdit() {
        updateTask(taskId, name, description);

    }


    return (
      
           isExpanded ? 
                <div className = "form-container">
                    < form className = "form" onSubmit={handleSubmit} >
                        <input
                            defaultValue={name}
                            type="text"
                            placeholder="What are you working on?"
                            className="form-input"
                            name="name"
                            //value={name}
                            onChange={handleTouch}
                        />
                        {/* <input
                            defaultValue={description}
                            type="text"
                            placeholder="Description"
                            className="form-input"
                            name="description"
                            //value={description}
                            onChange={handleTouch}
                        /> */}
                        <div className="collapsible--buttons--container">
                            <button className="collapsible-button" type="submit" disabled={!touched} >Save</button>
                            <button className="collapsible-button" onClick={(event) => deleteTask(event, taskId )} >Delete</button>
                        </div>
                        
                    </form >

                </div >
            :
                <div className="task--container">
                   
                        
                        <input type="checkbox" onChange={handleClick}/>
                        <h2>{name}</h2>

                    
                    
                   

                     {/* <div className="task-info">
                        
                    </div>  */}
                    
                    <div className="ellipse--container" onClick={handleEdit}>
                        <img className="ellipse--img" src="/images/vertical-ellipsis.png" alt="#" />
                    </div>
                    
                </div>
           
        
    )
}
  

