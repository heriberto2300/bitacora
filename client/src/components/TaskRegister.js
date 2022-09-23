import React from "react";
import handleAuthForm from "../lib/FormHandler";
//import post from "../api/api";

function TaskRegister() {

  const [info , setInfo] = React.useState({
    name: '',
    course: '',
    date: '',
    des: '',
  });

  const addTask = (e) => {
    e.preventDefault();
    console.log(info);
  }; 

  const handleChange = (e) => {
    const { target } = e;
    handleAuthForm(target, info, setInfo);
  };

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
              <option selected>Elegir...</option>
              <option>Espanol</option>
              <option>Mates</option>
              <option>Chanchito</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="date" className="col-sm-2 col-form-label">Fecha Limite</label>
          <div className="col-sm-10">
            <input type="date" name="date" onChange={handleChange}/>   
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

export default TaskRegister;