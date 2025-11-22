// formato coherente 
if(x>0){
    hacerAlgo();
}

// bien 
calcularPromedio()
CalcularSuma()
// mal
clacProm()
calcular_suma()

// problemas similares, soluciones simetricas 
function validarNombre(n) {
  return n.length > 0;
}

function validarCorreo(c) {
  return c.includes("@");
}

//Densidad, apertura y distancia vertical 
// ejemplo malo 
function f(a,b){return a+b}

// ejemplo bueno
function f(a,b){
    return a + b;
}

// lo mas importante primero 
// 1. Firma
function procesarPago(monto, tarjeta) {

  // 2. Validación importante primero
  if (monto <= 0) return false;

  // 3. Lógica secundaria
  verificarSaldo();
  generarRecibo();
}

// indentacion 
if (condicion) {
  ejecutar();
} else {
  cancelar();
}

