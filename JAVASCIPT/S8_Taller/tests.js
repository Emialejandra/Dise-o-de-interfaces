// anatomia de un test unitario 
// arrange
const calc = new Calculadora();

// act
const resultado = calc.sumar(2, 3);

// assert
expect(resultado).toBe(5);

// ejemplo completo 
test("la calculadora suma correctamente", () => {
    // Arrange
    const calc = new Calculadora();

    // Act
    const resultado = calc.sumar(2, 3);

    // Assert
    expect(resultado).toBe(5);
});

// nuestro primer test
function suma(a, b) {

    return a + b;
}

test("suma 2 + 3 correctamente", () => {
    expect(suma(2, 3)).toBe(5);
});

// aserciones 

//igualdad 
expect(5).toBe(5);
expect({a:1}).toEqual({a:1});

//verdadro/falso 
expect(true).toBeTruthy();
expect(false).toBeFalsy();

// errores 
expect(() => funcion()).toThrow();

// numeros 
expect(3.14).toBeCloseTo(3.1, 1);

//array y objetos
expect(array).toContain(3);
expect(obj).toHaveProperty("nombre");

// organizacion 
describe("Calculadora", () => {
    test("suma correctamente", () => {
        //...
    });
});

// test()/ it()
//src
//tests
  suma.test.js
  usuario.test.js


// diseño de la primera prueba
test("1 devuelve '1'", () => {
    expect(fizzBuzz(1)).toBe("1");
});

// pasamo a verde 
function fizzBuzz(n) {
    return "1";
}

