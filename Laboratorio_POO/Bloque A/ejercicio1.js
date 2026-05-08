// Definición de la clase
class Carrera {
  constructor(nombre, facultad) {
    this.nombre = nombre;
    this.facultad = facultad;
  }

  // Método para mostrar información
  mostrarInfo() {
    console.log(`Carrera: ${this.nombre}, Facultad: ${this.facultad}`);
  }

  // Método para cambiar la facultad
  cambiarFacultad(nuevaFacultad) {
    this.facultad = nuevaFacultad;
  }
}

// Creación del objeto
const miCarrera = new Carrera("Sistemas", "Ciencias y Tecnología");

// Usando los métodos
miCarrera.mostrarInfo(); // Muestra información

miCarrera.cambiarFacultad("Ingeniería"); // Cambia la facultad

miCarrera.mostrarInfo(); // Muestra la información actualizada