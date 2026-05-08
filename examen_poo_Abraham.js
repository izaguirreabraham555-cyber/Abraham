class Empleado {
  #salarioBase;

  constructor(nombre, cedula, salarioBase) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.#salarioBase = salarioBase;
  }

  set salario(monto) {
    if (monto <= 0) {
      console.log("Error: El salario no puede ser negativo o cero");
    } else {
      this.#salarioBase = monto;
    }
  }

  get salario() {
    return this.#salarioBase;
  }

  calcularSalarioNeto() {
    return this.#salarioBase;
  }

  mostrarDetalles() {
    console.log(
      `Empleado: ${this.nombre}, Cédula: ${this.cedula}, Salario Neto: C$${this.calcularSalarioNeto()}`
    );
  }
}

class Desarrollador extends Empleado {
  constructor(nombre, cedula, salarioBase, lenguajeProgramacion) {
    super(nombre, cedula, salarioBase);
    this.lenguajeProgramacion = lenguajeProgramacion;
  }

  calcularSalarioNeto() {
    return this.salario + 1500;
  }

  mostrarDetalles() {
    console.log(
      `Desarrollador de ${this.lenguajeProgramacion}: ${this.nombre}, Cédula: ${this.cedula}, Salario Neto: C$${this.calcularSalarioNeto()}`
    );
  }
}

class Gerente extends Empleado {
  constructor(nombre, cedula, salarioBase, departamento) {
    super(nombre, cedula, salarioBase);
    this.departamento = departamento;
  }

  calcularSalarioNeto() {
    return this.salario * 1.2;
  }

  mostrarDetalles() {
    console.log(
      `Gerente del departamento de ${this.departamento}: ${this.nombre}, Cédula: ${this.cedula}, Salario Neto: C$${this.calcularSalarioNeto()}`
    );
  }
}

const dev = new Desarrollador("Carlos", "001-150500-1001A", 10000, "JavaScript");
const gerente = new Gerente("Ana", "002-120898-2002B", 15000, "IT");

dev.salario = -5000;
gerente.salario = 18000;

dev.mostrarDetalles();
gerente.mostrarDetalles();