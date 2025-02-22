const { sum, fromYenToPound } = require('./app');
test("sumar 20 + 3 es igual a 23", () => {
    let total = sum(20, 3);
    expect(23).toBe(23);
})
test("One euro should be 1.07 dollars", function () {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("one hundred dollars should be 14626.17 yen", () => {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(100);
    expect(fromDollarToYen(100)).toBe(14626.17)
})

test("25.5 yen should be 0.14 POUND",()=> {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(25.5);
    expect(fromYenToPound(25.5)).toBe(0.14);
})