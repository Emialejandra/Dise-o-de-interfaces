const prompt = require('prompt-sync')();
"OPERACIONES BASICAS"
/*
let a=22;
let b=4;

console.log("Suma: ",a+b);
console.log("Resta: ",a-b);
console.log("Multiplicacion: ",a*b);
console.log("Division: ",a/b);
console.log("Modulo: ",a%b);
console.log("Potencia: ",a**b);
 */


"AREA DE FIGURAS"
/*const prompt = require("prompt-sync")();

let lado = Number(prompt("Ingresa el lado del cuadrado: "));
console.log("Área del cuadrado:", lado * lado);

let base = Number(prompt("Base del rectángulo: "));
let altura = Number(prompt("Altura del rectángulo: "));
console.log("Área del rectángulo:", base * altura);

let baseT = Number(prompt("Base del triángulo: "));
let alturaT = Number(prompt("Altura del triángulo: "));
console.log("Área del triángulo:", (baseT * alturaT) / 2);

let radio = Number(prompt("Radio del círculo: "));
console.log("Área del círculo:", Math.PI * radio * radio);
*/

"Promedio y aprobacion"
/*const prompt = require("prompt-sync")();

let ing = Number(prompt("Inglés: "));
let mat = Number(prompt("Matemática: "));
let len = Number(prompt("Lengua: "));

let promedio = (ing + mat + len) / 3;
console.log("Promedio:", promedio);

if (promedio >= 7) {
    console.log("El estudiante APRUEBA");
} else {
    console.log("El estudiante REPRUEBA");
}*/

"PROMEDIO 2"
/*if (promedio == 10) {
    console.log("Satisfactorio (BECA) y APRUEBA");
} else if (promedio >= 8 ) {
    console.log("Muy buena y APRUEBA");
} else if (promedio >= 7) {
    console.log("Buena y APRUEBA");
} else {
    console.log("Regular y REPRUEBA");
}*/

"AREA Y PERIMETRO"
/*const prompt = require('prompt-sync')();
let opcion = prompt("1=Cuadrado.\n2=Rectángul.\n3=Triángulo.\n4=Círculo.\nOPCION: ");

if (opcion == "1") {
    let l = Number(prompt("Lado: "));
    console.log("Área:", l * l);
    console.log("Perímetro:", l * 4);
}

if (opcion == "2") {
    let b = Number(prompt("Base: "));
    let h = Number(prompt("Altura: "));
    console.log("Área:", b * h);
    console.log("Perímetro:", 2 * (b + h));
}

if (opcion == "3") {
    let cat1 = Number(prompt("Cateto 1: "));
    let cat2 = Number(prompt("Cateto 2: "));
    console.log("Área:", (cat1 * cat2) / 2);
    console.log("Perímetro:", cat1 + cat2 + Math.sqrt(cat1**2 + cat2**2));
    console.log("Hipotenusa:", Math.sqrt(cat1**2 + cat2**2));
}

if (opcion == "4") {
    let r = Number(prompt("Radio: "));
    console.log("Área:", Math.PI * r * r);
    console.log("Perímetro:", 2 * Math.PI * r);
}*/

"TABLA DE MULTIPLICAR"
/*let num = Number(prompt("Número: "));
for (let i = 1; i <= 12; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}*/

"MOSTRAR ARREGLO"
/*let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
*/

"VERIFICAR PAR "
/*function verificarPar() {
    let n = Number(prompt("Ingresa un número: "));
    if (n % 2 === 0) {
        console.log("Es PAR");
    } else {
        console.log("Es IMPAR");
    }
}

verificarPar();*/

"ARREGLO DE FRUTAS"
/*let frutas = ["Manzana", "Banano", "Pera", "Sandía", "Melón"];
frutas.forEach(f => console.log(f));*/

"SUMA DE NUMEROS EN ARREGLO"
/*let arr = [5, 10, 3, 7, 15];
let suma = 0;

for (let num of arr) {
    suma += num;
}

console.log("Suma total:", suma);*/

"ARREGLO CON NOMBRES"
/**let estudiantes = ["Ana", "Luis", "Carlos", "Maria", "Pedro"];
let buscar = prompt("Nombre a buscar: ");

if (estudiantes.includes(buscar)) {
    console.log("ESTÁ en la lista");
} else {
    console.log("NO está en la lista");
} */

"NUMERO MAYOR EN ARREGLO"
/*let nums = [3, 15, 7, 22, 10];
let mayor = Math.max(...nums);
console.log("Mayor:", mayor);*/

"ARREGLO EN ORDEN INVERSO"
let lista = [1, 2, 3, 4, 5];
console.log(lista.reverse());
