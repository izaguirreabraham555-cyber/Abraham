// Clase base
class Figura {
    constructor(color) {
        this.color = color;
    }
}

// Clase hija
class Circulo extends Figura {
    constructor(color, radio) {
        super(color); // Llama al constructor de Figura
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * (this.radio * this.radio);
    }
}

// Prueba
const miCirculo = new Circulo("rojo", 5);

// Mostrar área
console.log("Área del círculo:", miCirculo.calcularArea());