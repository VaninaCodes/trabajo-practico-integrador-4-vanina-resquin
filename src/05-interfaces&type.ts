export{};

// Interfaz + propiedad opcional (?)
interface Alumno {
    nombre: string;
    edad: number;
    email?: string;
}

const alumno1: Alumno = {
    nombre: "Vanina",
    edad: 22,
    email: "vannilaresquin@gmail.com",
};
console.log("Alumno 1:", alumno1);

const alumno2: Alumno = {
    nombre: "Matias",
    edad: 22,
}
console.log("Alumno 2:", alumno2);

// Type
type Curso = {
    titulo: string;
    horas: number;
}

const curso1: Curso = {
    titulo: "Introducción a TypeScript",
    horas: 20,
};
console.log("Curso:", curso1);