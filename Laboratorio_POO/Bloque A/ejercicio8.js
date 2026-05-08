class Televisor {
  constructor() {
    this.encendido = false;
  }

  encender() {
    this.encendido = true;
    console.log("TV Encendido");
  }

  apagar() {
    this.encendido = false;
    console.log("TV Apagado");
  }
}

class ControlRemoto {
  botonPower(tv) {
    if (tv.encendido) {
      tv.apagar();
    } else {
      tv.encender();
    }
  }
}

const tvSala = new Televisor();
const miControl = new ControlRemoto();

// Usar el mismo botón
miControl.botonPower(tvSala); // Enciende
miControl.botonPower(tvSala); // Apaga