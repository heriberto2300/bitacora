const mysql = require('mysql');
require('dotenv').config();

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
        return new Promise((resolve, reject) => {
            this.connection.query(query, (err, result) => {
                if(err) throw err;
                console.log(`QUERY: ${query} SUCCRESFULLY`);
                resolve(result);
            })
        });
    }

    async insertUser(name, password) {
        const query = `INSERT INTO Usuarios (Nombre, Password) VALUES ('${name}', '${password}')`;
        const result = await this.query(query);
        return result;
    }

    async insertTask(name, description, comments) {
        const query = `INSERT INTO Tareas (Nombre, Descripcion, Status, Calificacion, Comentarios) 
            VALUES ('${name}', '${description}', 0, 0.0, '${comments}')`;
        const result = await this.query(query);
        return result;
    }

    async insertCourse(name, schedule, description, days, teacher) {
        const query = `INSERT INTO Materias (Nombre, Horario, Descripcion, Dias, Profesor)
            VALUES ('${name}', '${schedule}', '${description}', '${days}', '${teacher}')`;
        const result = await this.query(query);
        return result; 
    }

    async insertHeading(name, percentage) {
        const query = `INSERT INTO Rubros (Porcentaje, Nombre) VALUES ('${percentage}', '${name}')`;
        const result = await this.query(query);
        return result;
    }

    async insertUserCourse(idUser, idCourse) {
        const query = `INSERT INTO Usuario_Materia VALUES ('${idUser}', '${idCourse}')`;
        const result = await this.query(query);
        return result;
    }

    async insertCourseHeading(idCourse, idHeading) {
        const query = `INSERT INTO Materia_Rubro VALUES ('${idCourse}', '${idHeading}')`;
        const result = await this.query(query);
        return result;
    }
    
    async delete(id, table, idName) {
        const query = `DELETE FROM ${table} WHERE ID_${idName} = '${id}'`;
        const result = await this.query(query);
        return result;
    }
    
    async searchByName(name, table) {
        const query = `SELECT * FROM ${table} WHERE Nombre='${name}'`;
        const result = await this.query(query);
        return result;
    }

    async getTableData(table) {
        const query = `SELECT * FROM ${table}`;
        const result = await this.query(query);
        return result;
    }
    
    disconnect() {
        this.connection.end();
    }


}

databaseManager = new DB();
databaseManager.connect();

module.exports = databaseManager;



