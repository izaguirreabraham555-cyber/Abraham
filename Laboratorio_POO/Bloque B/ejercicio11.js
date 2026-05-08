// Clase base
class Animal {
    hacerSonido() {
        console.log("Sonido genérico");
    }
}

// Clase hija que hereda de Animal
class Perro extends Animal {
    // Sobrescritura del método
    hacerSonido() {
        console.log("Guau Guau");
    }
}

// Instancia y uso
const miPerro = new Perro();
miPerro.hacerSonido();