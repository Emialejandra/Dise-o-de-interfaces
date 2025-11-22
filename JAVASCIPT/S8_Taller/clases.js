/*Clases pg. 28-29*/
// ejemplos de como se crea cada cosa 
// clase
class boton {
  constructor(color, texto) {
    this.color = color;
    this.texto = texto;
  }

  mostrar() {
    console.log(`Mostrar: ${this.texto}`);
  }
}
// prototypee y ECMAScript moderno 
boton.prototype.desactivar = function () {
  console.log("Desactivando boton");
}

// constructores y funciones constructoras 
class boton {
  constructor(texto) {
    this.texto = texto;
  }
}

// metodos 
class boton {
  activar() { }
  desactivar() { }
  mostrar() { }
}

// Herencia  y cadena de prototipos 
class ComponenteUI {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Boton extends ComponenteUI {
  constructor(texto, x, y) {
    super(x, y);
    this.texto = texto;
  }
}

// tamaño reducido 
// en lugar de copiar metodos dentro de cada objeto 
const b1 = { mostrar() { } };
const b2 = { mostrar() { } };
// usamos un prototipo 
boton.prototype.mostrar = function () { };

// organizacion 
/*/componentes
boton.js
input.js
card.js
  / base
componenteUI.js
*/
// importamos 
import boton from './componentes/boton.js';

// prioriza la composicion frente a la herencia 
const clickeable = {
  onClick(cb) { this._cb = cb; }
};

const estilizable = {
  setColor(c) { this.color = c; }
};

function crearBoton(texto) {
  return Object.assign({ texto }, clickeable, estilizable);
}



