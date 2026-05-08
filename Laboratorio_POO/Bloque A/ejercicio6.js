// Clase Producto
class Producto {
  #precio;

  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio; // usamos el setter
  }

  // Setter para validar el precio
  set precio(valor) {
    if (valor <= 0) {
      console.log(" Precio inválido");
    } else {
      this.#precio = valor;
      console.log("Precio asignado correctamente");
    }
  }

  // Método para mostrar información
  mostrarInfo() {
    return `Producto: ${this.nombre}, Precio: ${this.#precio}`;
  }
}

// Crear producto
const producto1 = new Producto("Laptop", 1000);

// Mostrar info
console.log(producto1.mostrarInfo());

// Intentar cambiar a precio inválido
producto1.precio = -50;

// Mostrar nuevamente
console.log(producto1.mostrarInfo());