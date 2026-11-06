export {};

// Primitivos
let nombre: string = "Vanina";
let edad : number = 22;
let activo: boolean = true;
console.log("Tipos primitivos:",nombre, edad, activo);

// Arrays con tipos
let numeros: number[] = [1, 2, 3, 4, 5];
let nombres: string[] = ["Matias", "Jungkook"];
console.log("Array de numeros:", numeros);
console.log("Array de nombres:", nombres);

// Union de tipos
let id: string | number = "AB12";
console.log("id con string:",id);
id = 12;
console.log("id con number:",id);

// any: desactiva la verificación
let cualquierTipo: any = "Holi";
cualquierTipo = 31;
console.log("any:",cualquierTipo);