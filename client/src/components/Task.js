import React from "react";
import { BsFillCheckCircleFill as Check} from "react-icons/bs";
import { BsCaretDownFill as DownArrow } from "react-icons/bs";
import { BsClockFill as Pending } from "react-icons/bs";
import '../stylesheets/task.css';

function Task({ name, status, date }) {
  return(
    <div className="taskContainer">
      <div className="info">
        <div className="taskTitle"><h2>{name}</h2></div>
        <div className="taskStatus"><p>{`Status: ${status}`}</p></div>
        <div className="taskDate"><p>{`Fecha de Entrega: ${date}`}</p></div>
      </div>
      <div className="icons">
        <p>{status === 1? <Check size="70px" color="#fff"/> : <Pending size="70px" color="#fff"/>}</p>
        <p className="displayButton"><DownArrow size="20px" color="#fff"/></p>
      </div> 
    </div>
  );    
}

export default Task;