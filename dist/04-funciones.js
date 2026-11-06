// Tipos de parámetros & tipo de retorno
function restar(num1, num2) {
    return num1 - num2;
}
// Parámetro opcional
function saludo(nombre, apellido) {
    return apellido ? `Holi ${nombre} ${apellido}` : `Holi ${nombre}`;
}
console.log(saludo("Vanina"));
console.log(saludo("Vanina", "Resquin"));
// Parámetro por defecto
function multiplicar(numero, veces = 2) {
    return numero * veces;
}
console.log("Multiplicar con valor por defecto:", multiplicar(5));
console.log("Multiplicar por 3:", multiplicar(5, 3));
export {};
//# sourceMappingURL=04-funciones.js.map