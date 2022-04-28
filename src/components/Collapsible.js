import React, {useState} from "react";

import useCollapse from "react-collapsed";

export default function Collapsible(props) {
  const {
    key,
    taskId,
    name,
    description,
    isExpanded,
    updateTask,
    setCurrentTaskId,
  } = props;

  console.log(props)

  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    console.log(formData.get("name"), formData.get("description"));
    updateTask(taskId, formData.get("name"), formData.get("description"));
    // updateTask(event)
  }

  function handleEdit(event) {
    // setCurrentTaskId(key)
    console.log(event);
    // updateTask(event)
  }

  return isExpanded ? (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What are you working on?"
          className="form-input"
          name="name"
        />
        <input
          type="text"
          placeholder="Description"
          className="form-input"
          name="description"
        />
        <div>
          <button name="isExpanded" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className="task--container">
      <div className="task-info">
        <div>{name}</div>
        <div>{description}</div>
      </div>

      <button name="isExpanded" onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
}
