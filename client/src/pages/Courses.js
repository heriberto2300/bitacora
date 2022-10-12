import React from "react";
import Course from "../components/Course";

import NavBar from '../components/NavBar';
import '../stylesheets/Page.css';
import '../stylesheets/Courses.css';

import API from '../api/api';

function Courses() {
  const [courses, setCourses] = React.useState([]);

  const fetchCourses = async () => {
    const res = await API.getCourses();
    const { result } = res;
    console.log(result);
    setCourses(result);
  };

  React.useEffect(() => {
    fetchCourses();
  }, []);

  return(
    <div className="page courses-page">
      <NavBar title="Materias"/>
      <div className="courses-container">
        {courses.map(course => 
          <Course key={course.ID_Materia}
            id={course.ID_Materia}
            name={course.Nombre}
            description={course.Descripcion}          
          />
        )}
      </div>
    </div>
  );
}

export default Courses;