export{}

// Tipos de parámetros & tipo de retorno
function restar(num1: number, num2: number): number{
    return num1 - num2;
}

// Parámetro opcional
function saludo(nombre: string, apellido?: string): string{
    return  apellido? `Holi ${nombre} ${apellido}` : `Holi ${nombre}`;
}
console.log(saludo("Vanina"));
console.log(saludo("Vanina", "Resquin"));

// Parámetro por defecto
function multiplicar(numero: number, veces: number = 2): number{
    return numero * veces;
}
console.log("Multiplicar con valor por defecto:", multiplicar(5));
console.log("Multiplicar por 3:", multiplicar(5, 3));