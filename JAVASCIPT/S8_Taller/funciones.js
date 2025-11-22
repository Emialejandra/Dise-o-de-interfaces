function sumar(a, b) {
  return a + b;
}

// otro ejemplo 
saludar(); // Funciona

function saludar() {
  console.log("Hola!");
}

// expresion de una funcion 
multiplicar(); // Error

const multiplicar = function(a, b) {
  return a * b;
};

// funcion flecha
const sumar = (a, b) => a + b;

//funcionamiento de this en arrow functions 
const persona = {
  nombre: "Ana",
  hobbies: ["leer", "correr"],
  mostrar() {
    this.hobbies.forEach(h => {
      console.log(`${this.nombre} ama ${h}`);
    });
  }
};

persona.mostrar();

// estilo imperativo 
let total = 0;
for (let i of numeros) total += i;

// estilo declarativo
const total1 = numeros.reduce((a, b) => a + b);

// funciones anonimas 
setTimeout(function() {
  console.log("Hola");
}, 1000);

//arrow function
setTimeout(() => console.log("Hola"), 1000);

// transparencia referencial
function sumar(a, b) {
  return a + b;
}

// command-query separation
function obtenerTotal() { return this.total; }
function incrementarTotal() { this.total++; }


