// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function (valueInDollar) {
    let valueInEuro= valueInDollar / 1.07;
    let valueInYen = valueInEuro * 156.5;
    return Number(valueInYen.toFixed(2));
}
const fromYenToPound = function (valueInYen) {
    let valueInEuro = valueInYen / 156.5;
    let valueInPound = valueInEuro * 0.87;
    return Number(valueInPound.toFixed(2));
}

const sum = (a, b) => {
    return a + b
} 


console.log(sum(7,3));
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};