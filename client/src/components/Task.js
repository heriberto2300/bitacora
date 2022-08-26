import React from "react";

import '../stylesheets/task.css';

function Task({ name, des }) {
  return(
    <div className="taskContainer">
      <div className="taskTitle">{name}</div> 
      <div className="taskDescription">{des}</div> 
    </div>
  );    
}

export default Task;