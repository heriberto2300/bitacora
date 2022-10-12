import React from "react";
import { BsFillFileTextFill } from 'react-icons/bs';

import '../stylesheets/Course.css';

function Course({id, name, description}) {
    return(
      <div className="course-container">
        <div className="course-details">
          <h2>{name}</h2>
          <h3>Calificacion: 6.0</h3>
          <h3>{`Tareas pendientes: ${description}`}</h3>
        </div>
        <div className="icon">
           <BsFillFileTextFill/>
        </div>

      </div>
    ); 
}

export default Course;