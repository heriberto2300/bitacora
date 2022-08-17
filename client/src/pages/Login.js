import React from "react";

import '../stylesheets/login.css'

function Login() {
  const [data, setData] = React.useState({
    name: '',
    password: '',
  });

  const getCredentials = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/login";
    const params = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }

    const response = await fetch(url, params);

    const status = await response.json();

    console.log(status);
  }

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    const newValues = {
      ...data,
      [name]: value,
    };

    setData(newValues);
  }
  
  return (
    <div className="loginPage">
      <div className="formContainer">
        <div className="title">
          <h1>Acceso a Usuario</h1>
        </div>
        <div className="formDiv">
          <form onSubmit={getCredentials}>
            <label htmlFor="name">Nombre de Usuario</label>
            <input name="name" type="text" onChange={handleChange}/>
            <label htmlFor="password">Contraseña</label>
            <input name="password" type="password" onChange={handleChange}/>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default Login;