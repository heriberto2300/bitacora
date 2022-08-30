import React from "react";
import NavBar from "../components/NavBar";
import Task from "../components/Task";
import '../stylesheets/home.css';
import '../stylesheets/page.css'

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
    <div className="page homePage">
      <NavBar/>
      <div className="taskList">
        {tasksList.map(task => <Task 
          key={task.ID_Tarea} 
          name={task.Nombre}
          status= {task.Status}
          date= "25-08-2022"
          />)
        }        
      </div>
    </div>      
  );
}

export default Home;

/*

*/