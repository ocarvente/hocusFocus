import React, {useEffect, useState} from "react";
import {nanoid} from "nanoid";
import useCollapse from "react-collapsed";
import Collapsible from "./Collapsible";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  let lastElement = tasks.length - 1;

  function createNewTask() {
    const newTask = {
      id: nanoid(),
      name: "",
      description: "",
      isExpanded: true,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  const taskList = tasks.map((task) => (
    <Collapsible
      key={task.id}
      taskId={task.id}
      name={task.name}
      description={task.description}
      updateTask={updateTask}
      isExpanded={task.isExpanded}
    />
  ));

  function updateTask(taskId, name, description) {
    let newTasks = tasks.reduce((res, elem, idx) => {
      if (elem.id === taskId) {
        res.push({
          ...elem,
          name: name,
          description: description,
          isExpanded: !elem.isExpanded,
        });
      } else {
        res.push(elem);
      }

      return res;
    }, []);

    setTasks(newTasks);
  }

  function deleteTask(event, taskId) {
    event.stopPropagation();
    setTasks((oldTasks) => {
      return oldTasks.filter((oldTask) => oldTask.id != taskId);
    });
  }

  return (
    <div className="taskList--container">
      {taskList}
      <button className="taskList--add" onClick={createNewTask}>
        Add Task{" "}
      </button>
    </div>
  );
}
