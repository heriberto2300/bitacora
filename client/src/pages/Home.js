import React from "react";
import NavBar from "../components/NavBar";
import Task from "../components/Task";
import { BsFillPlusCircleFill as Add } from 'react-icons/bs';
import '../stylesheets/Home.css';
import '../stylesheets/Page.css'
import ModalFactory from "../components/ModalFactory";
import API from "../api/api";

function Home() {
  const [tasksList, setTasks] = React.useState([]);
  const [per, setPer] = React.useState(0.0);

  const fetchTasks = async () => {
    const data = {user: 'test',};
    const url = "http://192.168.100.11:8000/home"; 
    const res = await API.post(url, data);
    const { tasks, percentage } =  await res.json();
    console.log(tasks);
    setTasks(tasks);
    setPer(percentage.toFixed(1));
  };

  React.useEffect(() => {
    fetchTasks();
  }, []);

  return(
    <>
      <div className="page home-page">
        <NavBar title="Inicio"/>
        <div className="percentage-container">
          <h2>Bienvenido <span>Test</span>, tu porcentaje de tareas completadas es:</h2>
          <div className="number-percentage">
            <h2>{`${per}%`}</h2>
          </div>
          <Add className="add-button" color="rebeccapurple" size="80px" data-bs-toggle="modal" data-bs-target="#add-task"/>
        </div>
        <div className="task-list">
          {tasksList.map(task => <Task 
            key={task.ID_Tarea} 
            id={task.ID_Tarea}
            name={task.Nombre}
            status= {task.Status}
            date= {task.Fecha}
            description={task.Descripcion}
            />)
          }      
        </div> 
        <ModalFactory id="add-task" type="addTask" title="Agregar Tarea"/>
      </div>
    </>
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