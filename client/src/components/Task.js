import React from "react";
import { VscTasklist as Check} from "react-icons/vsc";
import { VscTriangleDown as DownArrow } from "react-icons/vsc";
import { VscHistory as Pending } from "react-icons/vsc";
import '../stylesheets/Task.css';

function Task({id, name, status, date, description }) {

  return(
    <>
      <div className="task-container">
        <div className="info">
          <div className="task-title"><h2 className={`${status ? 'completed' : ''}`}>{name}</h2></div>
          <div className="task-status"><p>{`Status: ${status ? 'Entregada' : 'No Entregada'}`}</p></div>
          <div className="task-date"><p>{`Fecha de Entrega: ${date}`}</p></div>
        </div>
        <div className="icons">
          <p>{status === 1? <Check size="70px" color="#fff"/> : <Pending size="70px" color="#fff"/>}</p>
          <p className="display-button" data-bs-toggle="collapse" href={`#identifier-${id}`} role="button" aria-expanded="false" aria-controls={`identifier-${id}`}><DownArrow size="20px" color="#fff"/></p>
        </div> 
      </div>

      <div className="collapse task-details-container" id={`identifier-${id}`}>
        <div className="card card-body">
          {description}
        </div>
      </div>
    </>
    
  );    
}

export default Task;