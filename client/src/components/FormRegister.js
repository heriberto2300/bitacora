import React from "react";
import handleAuthForm from '../lib/FormHandler';
import { post } from '../api/api';

function FormRegister() {
  const [data, setData] = React.useState({
    name: '',
    password: '',
  });

  const postUser = async (e) => {
    e.preventDefault();
    const url = "http://192.168.100.11:8000/register";
    await post(url, data);
  }

  const handleChange = (e) => {
    const { target } = e;
    handleAuthForm(target, data, setData);
  }

  return(
    <>
      <form onSubmit={postUser}>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">Nombre</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="name" placeholder="Nombre" onChange={handleChange} required/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="password" placeholder="Password" onChange={handleChange} required/>
          </div>
        </div>
        <button type="onSubmit" className="btn btn-primary">Listo</button>
      </form>
    </>
  );
}

export default FormRegister;