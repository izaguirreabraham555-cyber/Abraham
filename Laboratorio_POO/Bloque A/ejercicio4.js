// Definición de la clase
class Ventilador {
  constructor() {
    // Estado inicial (apagado)
    this.encendido = false;
  }

  // Método para encender
  encender() {
    this.encendido = true;
  }

  // Método para apagar
  apagar() {
    this.encendido = false;
  }
}

// Crear instancia del ventilador
const miVentilador = new Ventilador();

// Estado inicial
console.log("Estado inicial:", miVentilador);

// Encender ventilador
miVentilador.encender();
console.log("Después de encender:", miVentilador);

// Apagar ventilador
miVentilador.apagar();
console.log("Después de apagar:", miVentilador);