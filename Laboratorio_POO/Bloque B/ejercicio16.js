// Clase base
class Vehiculo {
    moverse() {
        console.log("El vehículo se mueve");
    }
}

// Clase hija
class Avion extends Vehiculo {
    // Sobrescritura del método
    moverse() {
        console.log("El avión vuela por los aires");
    }

    // Método propio de Avion
    despegar() {
        console.log("Ajustando cinturones, despegue...");
    }
}

// Pruebas
const miAvion = new Avion();

miAvion.moverse();  // Método sobrescrito
miAvion.despegar(); // Método propio