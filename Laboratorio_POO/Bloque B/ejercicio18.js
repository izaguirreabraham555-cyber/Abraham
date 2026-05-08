// Clase base
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Clase hija
class Perecedero extends Producto {
    constructor(nombre, precio, diasParaVencer) {
        super(nombre, precio);
        this.diasParaVencer = diasParaVencer;
    }

    revisarEstado() {
        if (this.diasParaVencer <= 0) {
            console.log(`${this.nombre}: Producto caducado`);
        } else {
            console.log(`${this.nombre}: Aún es comestible`);
        }
    }
}

// Pruebas
const producto1 = new Perecedero("Leche", 2.5, 0);
const producto2 = new Perecedero("Yogurt", 3, 5);

producto1.revisarEstado();
producto2.revisarEstado();