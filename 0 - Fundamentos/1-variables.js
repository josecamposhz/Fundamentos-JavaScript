// Comentarios => Ctrl + }
/* Comentario 
    de más de
    una linea => Shift + Alt + A
*/

// Variables

// var: declara una variable global, opcionalmente la inicia a un valor.
// let: declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.
// const: declara un variable solo lectura y ámbito de bloque.

var global = "Hello world";
let local = "UFRO";
const PI = 3.14;

// Imprimimos las variables
console.log("var global:", global);
console.log("let local:", local);
console.log("const PI:", PI);

// var global = "Hi world";
// console.log(global);

// Conversión de tipos de datos => JavaScript es un lenguaje tipado dinámicamente.
// let local = 5;
// local = 5;

// const PI = 3;
// PI = 3;

if (true) {
  let local = 10;
  console.log("let local:", local);
}
// console.log("let local:", local);

// Global scope vs Local scope
if (true) {
  var x = 5;
  let y = 5;
}
console.log(x);
// console.log(y);

// Tipos de datos
// Booleano: true o false

// Number: Un número entero o un número con coma flotante.
// Por ejemplo: 10 o 3.14.

// String: Una secuencia de caracteres que representan un valor de texto.
// Por ejemplo: "Hello world"

// Object
const persona = {
    nombre: "Pato",
    edad: 22
}

// console.log(persona.nombre);
// persona.nombre = "Jordan";

// Objetos por medio de funciones
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function () {
      console.log("Hola	soy	" + this.nombre);
  }
}
const Pedro = new Persona("Pedro", 19);
console.log(Pedro.edad);

// Arreglos
const ANIMALES = [];

ANIMALES.push("Gato");
ANIMALES.push("Perro");  // Inserta un elemento al final de nuestro arreglo
ANIMALES.unshift("Raton"); // Inserta un elemento al inicio de nuestro arreglo
ANIMALES.push(2);
// console.log(ANIMALES[0]);

ANIMALES.pop(); // Elimina el último elemento de nuestro arreglo
// ANIMALES.shift(); // Elimina el primer elemento de nuestro arreglo

// Recorrer el arreglo
// ANIMALES.forEach((animal, index) => {
//   console.log(index, animal);
// })
console.log(ANIMALES);

// Mutar arreglo
const ANIMALES_MAYUSCULA = ANIMALES.map(animal => animal.toUpperCase());
console.log(ANIMALES_MAYUSCULA);

// REDUCER
/* const numeros = [1, 2, 3, 4, 5];
const reducer = (acc, currentValue) => {
  return acc + currentValue;
};
const sumNumeros = numeros.reduce(reducer, 0);
console.log(sumNumeros); */

// console.log(ANIMALES.reverse());
// console.log(ANIMALES.sort());
// console.log(ANIMALES.includes("Raton"));
// console.log(ANIMALES_CON_INDEX.includes("Raton"));

// JavaScript distingue entre mayúsculas y minúsculas (es case-sensitive)
// const isOpen = true;
// const isOpeN = true;