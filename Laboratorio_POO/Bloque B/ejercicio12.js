// Clase base
class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
}

// Clase hija
class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
        super(nombre, salario); // 1️⃣ Llamada al constructor del padre
        this.departamento = departamento; // 2️⃣ Nuevo atributo
    }
}

// Instancia de Gerente
const gerente1 = new Gerente("Ana", 7000, "Recursos Humanos");

// Imprimir todo el objeto
console.log(gerente1);