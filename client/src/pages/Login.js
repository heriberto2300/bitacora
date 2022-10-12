import React from "react";
import ShowDialog from "../components/ShowDialog";
import ModalFactory from "../components/ModalFactory";

import '../stylesheets/Login.css';
import '../stylesheets/Page.css';
import { post } from "../api/api";
import handleAuthForm from "../lib/FormHandler";

function Login() {
  const [data, setData] = React.useState({
    name: '',
    password: '',
  });

  const [userFlag, setFlag] = React.useState(true);

  const fetchCredentials = async (e) => {
    e.preventDefault();
    const url = "http://192.168.100.11:8000/login";
    const response = await post(url, data);
    setFlag(await response.json());
  }

  const handleChange = (e) => {
    const { target } = e;
    handleAuthForm(target, data, setData);
  }
  
  return (
    <div className="page login-page">
      <ShowDialog message="Usuario y/o Contraseña Incorrectos" flag={userFlag} type="error"/>
      <div className="form-container">
        <div className="title">
          <h1>Acceso a Usuario</h1>
        </div>
        <div className="form-div">
          <form onSubmit={fetchCredentials}>
            <label htmlFor="name">Nombre de Usuario</label>
            <input name="name" type="text" onChange={handleChange} required/>
            <label htmlFor="password">Contraseña</label>
            <input name="password" type="password" onChange={handleChange} required/>
            <button type="submit">Acceder</button>
          </form>
        </div>
      </div>
      <div className="text-white text-center div-register" data-bs-toggle="modal" data-bs-target="#test">No tienes una cuenta?. Registrate</div>
      <ModalFactory id="test" type="register" title="Crea una Nueva Cuenta"/>
    </div>
  );

}

export default Login;