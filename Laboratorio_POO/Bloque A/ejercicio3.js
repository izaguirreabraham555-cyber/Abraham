// Definición de la clase
class Reloj {

  // Método para mostrar la hora actual
  mostrarHora() {
    let fecha = new Date();
    console.log(fecha.toLocaleTimeString());
  }
}

// Crear instancia del reloj
const miReloj = new Reloj();

// Ejecutar el método
miReloj.mostrarHora();