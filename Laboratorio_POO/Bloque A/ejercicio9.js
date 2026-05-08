// Clase Producto (simple)
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

// Clase Carrito
class Carrito {
  constructor() {
    this.articulos = [];
  }

  // Agregar producto al carrito
  agregar(producto) {
    this.articulos.push(producto);
    console.log(` ${producto.nombre} agregado al carrito`);
  }

  // Calcular total
  verTotal() {
    let total = 0;

    for (let i = 0; i < this.articulos.length; i++) {
      total += this.articulos[i].precio;
    }

    console.log(` Total a pagar: ${total}`);
  }
}


// Crear productos
const producto1 = new Producto("Laptop", 800);
const producto2 = new Producto("Mouse", 20);

// Crear carrito
const miCarrito = new Carrito();

// Agregar productos
miCarrito.agregar(producto1);
miCarrito.agregar(producto2);

// Mostrar total
miCarrito.verTotal();