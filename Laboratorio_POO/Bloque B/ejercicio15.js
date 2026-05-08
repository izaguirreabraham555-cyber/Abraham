// Superclase
class Cuenta {
    constructor(titular, saldo, edad) {
        this.titular = titular;
        this.saldo = saldo;
        this.edad = edad;
    }
}

// Subclase
class CuentaJoven extends Cuenta {
    constructor(titular, saldo, edad) {
        super(titular, saldo, edad);
    }

    esTitularValido() {
        return this.edad >= 18 && this.edad < 25;
    }
}

// Instancia
const cuenta1 = new CuentaJoven("Luis", 1000, 20);

// Verificación
console.log("¿Titular válido?", cuenta1.esTitularValido());