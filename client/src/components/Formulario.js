import React from "react";

function Formulario() {

  const [input, setInput] = React.useState({
    name: "",
    password: "",
  });
  
  const agregar = (e) => {
    e.preventDefault();
    const url = 'http://192.168.100.11:8000/register';
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input),
    }).then(response => response.json())
      .then(data => {
        console.log(data);
        alert(data.user + " Insertado correctamente");
      });
  };

  const cambio = (e) => {
    const { target } = e;
    const { name, value } = target;

    const newValues = {
      ...input,
      [name]: value,
    };

    //console.log(input);
    setInput(newValues);
  };
   
  return(
    <div className="formulario" onSubmit={agregar}>
      <form>
        <input name="name" type="text" placeholder="Nombre" onChange={cambio}/>
        <input name="password" type="text" placeholder="Password" onChange={cambio}/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}


export default Formulario;