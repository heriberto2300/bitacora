import React from "react";
import NavBar from "../components/NavBar";
import Task from "../components/Task";
import '../stylesheets/Home.css';
import '../stylesheets/Page.css'

function Home() {
  const [tasksList, setTasks] = React.useState([]);

  const fetchTasks = async () => {
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

  React.useEffect(() => {
    fetchTasks();
  }, []);

  return(
    <div className="page home-page">
      <NavBar/>
      <div className="task-list">
        {tasksList.map(task => <Task 
          key={task.ID_Tarea} 
          id={task.ID_Tarea}
          name={task.Nombre}
          status= {task.Status}
          date= "25-08-2022"
          description={task.Descripcion}
          />)
        }      
      </div>
    </div>      
  );
} 

export default Home;

/*


        <Task 
          name="Chanchito feliz"
          status="Incompleta"
          date="25-08-22"
        /> 
*/