import React from "react";
import { useState, useEffect } from "react";
//import {usenavigate} from 'react-dom'

export default function Todo() {
  const initialState = {
    taskList:[]

  }
  const getInitialState = ()=>{
    //localStorage.clear();
    const tasks = localStorage.getItem("Tasks");
    return tasks?JSON.parse(tasks):initialState

  }
  const [taskList, setTaskList] = useState(getInitialState);

 function removeTask(task) {
    //var task = document.getElementById("taskListId").value
console.log(task)
    setTaskList((tasks) => {
      return tasks.filter((item) => item !== task);
    });
  }


  function addTask() {
    var task = document.getElementById("taskId").value;
console.log("from addTask")
    setTaskList((tasks) => [...tasks, task]);
  }
 
  useEffect(() => {localStorage.setItem("Tasks",JSON.stringify(taskList))}, [taskList]);
  

  return (
    <div>
      
      <form class="d-flex" role="search" style={{ paddingRight: "40%" }}>
        <input
          class="form-control me-2"
          type="text"
          placeholder="Enter the task"
          aria-label="Enter the task"
          id="taskId"
        />
        <button class="btn btn-outline-success" type="submit" onClick={addTask}>
          Show Tasks
        </button>
      </form>
<h1>TASK LIST</h1>
      <div className="container ">
        {
        taskList?.map((task) => {
          return (
            <div className="container col-lg-5 d-flex flex-row space-around">
           <input
          class="form-control me-2"
          type="text"
          placeholder={task}
          aria-label="Enter the task"
          id="taskListId"
        />
             <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-sm"
                          onClick={()=>{
                            setTaskList((tasks) => {
      return tasks.filter((item) => item !== task);
    });
                          }}
                          type="button"
                        >
                          Delete
                        </button>
            </div>
            
          );
        })}
      </div>
    </div>
  );
}
