// Definición de la clase
class Libro {
  constructor(titulo, autor, anio) {
    this.titulo = titulo;
    this.autor = autor;

    // Validación del año
    if (!anio) {
      this.anio = "Año desconocido";
    } else {
      this.anio = anio;
    }
  }
}

// Libro con todos los datos
const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);

// Libro sin año
const libro2 = new Libro("El principito", "Antoine de Saint-Exupéry");

// Imprimir resultados
console.log(libro1);
console.log(libro2);