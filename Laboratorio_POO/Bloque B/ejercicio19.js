// Clase base (abuelo)
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

// Clase intermedia (padre)
class Empleado extends Persona {
    constructor(nombre, salario) {
        super(nombre); // hereda nombre
        this.salario = salario;
    }
}

// Clase hija
class Secretaria extends Empleado {
    constructor(nombre, salario, idiomas) {
        super(nombre, salario); // hereda nombre y salario
        this.idiomas = idiomas;
    }
}

// Instancia
const secretaria1 = new Secretaria("María", 1200, ["Español", "Inglés"]);

// Mostrar objeto completo
console.log(secretaria1);