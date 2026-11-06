export{};

// Enum
enum Semaforo {
    rojo = "rojo",
    amarillo = "amarillo",
    verde = "verde"
}

let luz: Semaforo = Semaforo.rojo;
console.log("El semaforo esta en:", luz);

// Tipo literal
type Talle = "S" | "M" | "L" ;

let miTalle: Talle = "M";
console.log("Mi talle es:", miTalle);
