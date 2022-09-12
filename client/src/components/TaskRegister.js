import React from "react";

function TaskRegister() {
  return(
    <>
      <form>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">Nombre</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="name" placeholder="Nombre" required/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="input-course" className="col-sm-2 col-form-label">Materia</label>
          <div className="col-sm-10">
            <select name="input-course" className="form-select">
              <option selected>Elegir...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="input-date" className="col-sm-2 col-form-label">Fecha Limite</label>
          <div className="col-sm-10">
            <input type="date" name="input-date"></input>   
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="input-des" className="col-sm-2 col-form-label">Comentarios</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
        <button type="onSubmit" className="btn btn-primary">Listo</button>
      </form>
    </>
  );
}

export default TaskRegister;