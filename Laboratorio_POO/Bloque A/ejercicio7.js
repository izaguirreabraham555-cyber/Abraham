// Clase Estudiante
class Estudiante {
  #notas;

  constructor() {
    this.#notas = []; // arreglo vacío
  }

  // Método para agregar nota
  agregarNota(nota) {
    this.#notas.push(nota);
  }

  // Getter para calcular el promedio
  get promedio() {
    let suma = 0;

    for (let i = 0; i < this.#notas.length; i++) {
      suma += this.#notas[i];
    }

    return suma / this.#notas.length;
  }
}


// Crear estudiante
const estudiante1 = new Estudiante();

// Agregar notas
estudiante1.agregarNota(80);
estudiante1.agregarNota(90);
estudiante1.agregarNota(100);

// Mostrar promedio
console.log(`Promedio: ${estudiante1.promedio}`);