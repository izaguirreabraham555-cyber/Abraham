// Clase Cajero
class Cajero {
  #saldo;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  // Depositar dinero
  depositar(monto) {
    this.#saldo += monto;
    console.log(`Depósito realizado: ${monto}`);
  }

  // Retirar dinero
  retirar(monto) {
    if (monto > this.#saldo) {
      console.log(" Error: Fondos insuficientes");
    } else {
      this.#saldo -= monto;
      console.log(` Retiro realizado: ${monto}`);
    }
  }

  // Getter para ver saldo
  get verSaldo() {
    return this.#saldo;
  }
}


// Crear cajero con saldo inicial
const miCajero = new Cajero(1000);

// Depositar 500
miCajero.depositar(500);

// Intentar retirar más de lo que hay
miCajero.retirar(10000);

// Mostrar saldo final
console.log(` Saldo final: ${miCajero.verSaldo}`);