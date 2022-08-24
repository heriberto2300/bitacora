import React from "react";

function Home() {
    const [tasksList, setTasks] = React.useState([]);

    const getTasksInfo = async (e) => {
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
        //const { tasks } = await res.json();
        console.log(await res.json());
        //setTasks(tasks);
        //console.log(tasksList);
    };

    return(
        <form onSubmit={getTasksInfo}>
            <button>VER</button>
        </form>
    );
}

export default Home;