import React from "react";
import Task from "../components/Task";
import '../stylesheets/home.css';

function Home() {
  const [tasksList, setTasks] = React.useState([]);

  const fetchTasks = async (e) => {
    e.preventDefault();
    const data = {user: 'test',};
    const url = "http://192.168.100.11:8000/home"; 
    const params = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(url, params);
    const { tasks } =  await res.json();
    console.log(tasks);
    setTasks(tasks);
  };

  return(
    <div className="homePage">
      <div className="taskList">
        {tasksList.map(task => <Task 
          key={task.ID_Tarea} 
          name={task.Nombre}
          des={task.Descripcion}
          />)
        }
      </div>
      <form onSubmit={fetchTasks}>
        <button type="submit">Fetch</button>
      </form>
    </div>      
  );
}

export default Home;