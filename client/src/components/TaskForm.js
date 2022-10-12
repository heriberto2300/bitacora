import React from "react";
import handleAuthForm from "../lib/FormHandler";
import { post, getCourses } from "../api/api";

function TaskForm() {
  const text = "Hola Mundo";

  const [info , setInfo] = React.useState({
    user: 'test',
    name: '',
    course: '',
    date: '',
    des: '',
    comm: 'Bruh comment',
  });

  const [courses, setCourses] = React.useState([]);

  const addTask = async (e) => {
    e.preventDefault();
    const url = "http://192.168.100.11:8000/tasks";
    const res = await post(url, info);
    console.log(res);
  }; 

  const handleChange = (e) => {
    const { target } = e;
    handleAuthForm(target, info, setInfo);
  };

  const fetchCourses = async () => {
    const res = await getCourses();
    const { result } = res;
    console.log(result);
    setCourses(result);
  };

  React.useEffect(() => {
    fetchCourses();
  }, []);

  return(
    <>
      <form onSubmit={addTask}>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">Nombre</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="name" placeholder="Nombre" required onChange={handleChange}/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="course" className="col-sm-2 col-form-label">Materia</label>
          <div className="col-sm-10">
            <select name="course" className="form-select" onChange={handleChange}>
              <option>...</option>
              {courses.map(course => <option key={course.ID_Materia}>{course.Nombre}</option>)}
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="date" className="col-sm-2 col-form-label">Fecha Limite</label>
          <div className="col-sm-10">
            <input type="date" name="date" onChange={handleChange} required/>   
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="des" className="col-sm-2 col-form-label">Descripcion</label>
          <textarea className="form-control" name="des" rows="3" onChange={handleChange}></textarea>
        </div>
        <button type="onSubmit" className="btn btn-primary">Listo</button>
      </form>
    </>
  );
}

export default TaskForm;