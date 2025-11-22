// ambito global 
let greeting = 'hello world!';
    
 function greet(){
 console.log(greeting);
}

 greet(); //"Hello world";

 // ambito de bloque
{
let greeting = 'Hello world!';
var lang = "English";
console.log(greeting); //Hello world!
}

console.log(lang);//”English”
console.log(greeting);//// Uncaught ReferenceError: greeting is not defined

//Ámbito estático vs. dinámico
const number = 10;
function printNumber() {
console.log(number);
}

function app() {
const number = 5;
printNumber();
}
 
app(); //10

//Hoisting
greet(); //"Hello world";
function greet(){
let greeting = 'Hello world!';
console.log(greeting);
}

function greet(){
let greeting = 'Hello world!';
console.log(greeting);
}
greet(); //"Hello world";

var greet = "Hi";
(function () {
console.log(greet);// "undefined"
var greet = "Hello";
console.log(greet); //”Hello”
})();

var greet = "Hi";
(function () {
var greet;
console.log(greet);// "undefined"
greet = "Hello";
console.log(greet); //”Hello”
})();
