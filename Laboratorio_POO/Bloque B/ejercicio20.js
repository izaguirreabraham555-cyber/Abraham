// Clase base
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    encender() {
        console.log("El vehículo se está encendiendo");
    }
}

// Clase Auto
class Auto extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo);
    }

    encender() {
        console.log("Girando la llave del auto");
    }
}

// Clase Moto
class Moto extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo);
    }

    encender() {
        console.log("Pateando la palanca de arranque de la moto");
    }
}

// Arreglo de vehículos
const misVehiculos = [
    new Auto("Toyota", "Corolla"),
    new Moto("Yamaha", "R6")
];

// Recorrer y ejecutar encender()
for (let vehiculo of misVehiculos) {
    vehiculo.encender();
}