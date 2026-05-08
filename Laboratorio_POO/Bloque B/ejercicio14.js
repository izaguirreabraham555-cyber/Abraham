// Superclase
class Electronico {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

// Subclase
class Smartphone extends Electronico {
    constructor(marca, modelo, sistemaOperativo) {
        super(marca, modelo); // Llamada al constructor padre
        this.sistemaOperativo = sistemaOperativo;
    }

    llamar(numero) {
        console.log(`Llamando al número ${numero}... desde un ${this.marca}`);
    }
}

// Instancia
const miTelefono = new Smartphone("Samsung", "Galaxy S21", "Android");

// Hacer una llamada
miTelefono.llamar("78019761");