// Clase base
class Instrumento {
    constructor(tipo) {
        this.tipo = tipo;
    }
}

// Clase hija
class Guitarra extends Instrumento {
    constructor(marca) {
        super("cuerda"); // tipo fijo
        this.marca = marca;
    }

    tocar() {
        console.log("Sonando acordes de la guitarra");
    }
}

// Prueba
const miGuitarra = new Guitarra("Fender");

console.log("Tipo:", miGuitarra.tipo);
console.log("Marca:", miGuitarra.marca);

miGuitarra.tocar();