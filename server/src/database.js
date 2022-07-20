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
            database: "test"
        });
        this.connection.connect(err => {
            if(err) throw err;
            console.log("Conectado");
        });
    }

    insert(id, apellido, nombre, direccion, ciudad) {
        const query = `INSERT INTO Personas VALUES (${id}, '${apellido}', '${nombre}', '${direccion}', '${ciudad}')`;
        this.connection.query(query, (err, result) => {
            if(err) throw err;
            console.log("Result" + result);
        });
    }

    disconnect() {
        this.connection.end();
    }
}

/*database = new DB();
database.connect();
database.insert(4, 'Feliz', 'Chanchito', 'Granja', 'Chanchilandia');
database.disconnect();*/

databaseManager = new DB();
databaseManager.connect();

module.exports = databaseManager;



