const mysql = require('mysql');

class DB {
    constructor() {
        this.connection = null;
    }

    connect() {
        this.connection = mysql.createConnection({
            host: "localhost",
            user: "admin",
            password: "heri000430",
            database: "Bitacora",
        });

        this.connection.connect(err => {
            if(err) throw err;
            console.log("Connected to DataBase");
        });
    }

    query(query) {
        this.connection.query(query, (err, result) => {
            if(err) throw err;
            console.log("QUERY: " + query + " SUCCESFULLY");
        }); 
    }

    insertUser(name, password) {
        const query = `INSERT INTO Usuarios (Nombre, Password) VALUES ('${name}', '${password}')`;
        this.query(query);
    }

    insertTask(name, description, comments) {
        const query = `INSERT INTO Tareas (Nombre, Descripcion, Status, Calificacion, Comentarios) 
            VALUES ('${name}', '${description}', 0, 0.0, '${comments}')`;
        this.query(query);
    }

    insertCourse(name, schedule, description, days, teacher) {
        const query = `INSERT INTO Materias (Nombre, Horario, Descripcion, Dias, Profesor)
            VALUES ('${name}', '${schedule}', '${description}', '${days}', '${teacher}')`;
        this.query(query); 
    }

    insertHeading(percentage) {
        const query = `INSERT INTO Rubros (Porcentaje) VALUES ('${percentage}')`;
        this.query(query);
    }
    
    delete(id, table, idName) {
        const query = `DELETE FROM ${table} WHERE ID_${idName} = '${id}'`;
        this.query(query);
    }

    disconnect() {
        this.connection.end();
    }
}

databaseManager = new DB();
databaseManager.connect();

module.exports = databaseManager;



