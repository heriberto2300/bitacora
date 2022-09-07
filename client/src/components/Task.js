import React from "react";
import { BsFillCheckCircleFill as Check} from "react-icons/bs";
import { BsCaretDownFill as DownArrow } from "react-icons/bs";
import { BsClockFill as Pending } from "react-icons/bs";
import '../stylesheets/Task.css';

function Task({id, name, status, date, description }) {

  return(
    <>
      <div className="task-container">
        <div className="info">
          <div className="task-title"><h2>{name}</h2></div>
          <div className="task-status"><p>{`Status: ${status}`}</p></div>
          <div className="task-date"><p>{`Fecha de Entrega: ${date}`}</p></div>
        </div>
        <div className="icons">
          <p>{status === 1? <Check size="70px" color="#fff"/> : <Pending size="70px" color="#fff"/>}</p>
          <p className="display-button" data-bs-toggle="collapse" href={`#identifier-${id}`} role="button" aria-expanded="false" aria-controls={`identifier-${id}`}><DownArrow size="20px" color="#fff"/></p>
        </div> 
      </div>

      <div className="collapse task-details-container" id={`identifier-${id}`}>
        <div className="card card-body">
          lorem ipsum is a famous phrase that we love it
        </div>
      </div>
    </>
    
  );    
}

export default Task;