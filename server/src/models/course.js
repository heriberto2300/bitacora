class Course {
    constructor(nombre) {
        this.nombre = nombre;
        this.otroNombre = "Espaniol";
    }
}


const curso = new Course("Matematicas");

console.log(curso.nombre);
console.log(curso.otroNombre);