function suma(a, b) {
    
    return a + b;
}

test("suma 2 + 3 correctamente", () => {
    expect(suma(2, 3)).toBe(5);
});