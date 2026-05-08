const readline = require("readline");

// Clase Usuario
class Usuario {
  #contrasena;

  constructor(username, pass) {
    this.username = username;
    this.#contrasena = pass;
  }

  // Verificar contraseña (login)
  verificarContrasena(pass) {
    return this.#contrasena === pass;
  }
}

// Crear usuario (puedes cambiar datos)
const usuario1 = new Usuario("Abraham", "clave12345");

// Configurar entrada por consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pedir datos al usuario
rl.question("Ingrese su usuario: ", (userInput) => {
  rl.question("Ingrese su contraseña: ", (passInput) => {

    if (userInput === usuario1.username && usuario1.verificarContrasena(passInput)) {
      console.log("Acceso concedido");
    } else {
      console.log("Usuario o contraseña incorrectos");
    }

    rl.close();
  });
});