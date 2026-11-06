# Investigación en TypeScript

Alumna: Vanina Resquin

## Tema 1: ¿Qué es TypeScript?

- TypeScript es un superconjunto de JavaScript que fue desarrollado por Microsoft.
- La diferencia principal son los tipos, ya que, JavaScript tiene un tipado Dinámico meintras que TypeScript tiene Estático; Pero a la hora de ejecutar el codigo ambos son codigos de JavaScript.
- Las ventajas principales son: detecta errores antes de ejecutarlo, mejora el autocompletado, el código es escalable y mantenible y los tipos funcionan como documentación en el mismo código.
- Versión actual: **TypeScript 7.0**

## Tema 2: Crear y ejecutar un proyecto

1. Creamos una carpeta y entramos a la carpeta donde queremos que este el proyecto.
2. Inicializamos con: `npm init -y`
3. Instalamos las dependencias: `npm i -D typescript @types/node@24 tsx`
4. Creamos la carpeta _src_
5. Verificamos la versión de TypeScript: `npm tsc -v`
6. Crear el archivo _tsconfig.json_

   ```
   {
    "compilerOptions": {
        // A qué versión de JavaScript se compila
        "target": "ES2022",
        // Sistema de módulos: sigue lo que indique "type" en package.json
        "module": "nodenext",
        // Dónde está el código fuente y dónde va el JavaScript generado
        "rootDir": "./src",
        "outDir": "./dist",
        // Tipos globales a incluir (process, fs, etc.)
        "types": ["node"],
        // Verificación estricta de tipos
        "strict": true,
        // No generar archivos si hay errores de tipos
        "noEmitOnError": true,
        // Mejor compatibilidad al importar librerías CommonJS
        "esModuleInterop": true,
        // No revisar los tipos dentro de node_modules (más rápido)
        "skipLibCheck": true,
        // Error si un import no respeta mayúsculas/minúsculas del archivo
        "forceConsistentCasingInFileNames": true,
        // Mapas para que los errores en ejecución apunten al .ts original
        "sourceMap": true
    },
    // Archivos que forman parte del proyecto
    "include": ["src"]
    }

   ```

7. Crear el primer archivo -> src/app.ts
8. Ajustamos el _package.json_

   ```
   {
       "name": "mi-proyecto-ts",
       "version": "1.0.0",
       "type": "commonjs",
       "main": "dist/app.js",
       "scripts": {
           "dev": "tsx watch src/app.ts",
           "check": "tsc --noEmit",
           "check:watch": "tsc --noEmit --watch",
           "build": "tsc",
           "start": "node --enable-source-maps dist/app.js"
       }
   }

   ```

9. La carpeta dist/ aparece despues de compilar: `npm run build`

- El archivo _tsconfig.json_ es el archivo que configura al proyecto, se encarga de controlar que archivos estan incluidos, que tan estricto debe ser al controlar los tipos y de cómo generar el archivo JavaScript.
- El comando _tsc_ se usa para ver la configuración completa, se usa asi: `npx tsc --showConfig`
- Diferencia entre _tsc_, _tsx_ y _node_: _tsx_ se usa para desarrollar, _tsc_ para verificar los tipos y compilar, y _node_ para ejecutar la versión compilada.

## Tema 3: Tipos básicos

- Los tipos primitivos son:
  - `string` es para caracteres
  - `number` se utiliza para numeros
  - `boolean` para valores booleanos, solo _true_ o _false_
- Para declarar un _array_ con tipo solo debemos incluir el tipo despues del nombre y luego el valor. Ejemplo:
  ```
  let numeros: number[] = [1, 2, 3]
  ```
- Tengo entendido que, union de tipos se refire a que podemos crear nuevos tipos combinando los tipos ya existentes. Por ejemplo:

  ```
      let username: string | number = "chocovani31";
  ```

- Debemos evitar _any_ porque desactiva la verificación entonces si tenemos algun error con los tipos no nos va a avisar y no se va a poder ejecutar el codigo.

## Funciones

- Los tipos de parámetros se indican dentro de la función y con `strict`. Ejemplo:

  ```
      fuction sumar(a: number, b: number)
  ```

- El tipo de retorno se indica antes del parentesis:
  ```
      fuction sumar(a: number, b: number): number {
          return a + b
      }
  ```
- Para parametros opcionales se usa **?**: `suma( a?: number)`
- Un parametro por defecto es asi: `sumar(a: number = "31")`

## Tema 5: Interfaces y type

- Una _interfaz_ es una herramienta orientada a objetos, permite definir la estructura y el comportamiento de un objeto.
- Un _type_ sirve para describir la forma del dato a usar.
- Una propiedad opcional se declara despues del nombre del elemento con un signo **?**. Por ejemplo: `edad?: number;`
- La _interface_ se usa ára estructuras de objetos y clases, mientras que., _type_ se usa en uniones, intersecciones y tipos literales.

## Tema 6: Enums y tipos literales

- Un _enum_ es más que un tipo porque TypeScript lo convierte en un objeto de JavaScript.
- Un _tipo literal_ permite definir variables con valores específicos y prefijados.
- Se parecen en que ambas existen para definir tipos pero la gran diferencia es que, los tipos literales son más precisos al usarlos mientras que los enums son directamente puestos por nosotros.
- Enum suele usarse cuando necesitamos un grupo de constantes que se relacionan entre si, mientras que los tipos literales son ideales para definir valores especificos.

### Fuentes

- Introduccion_a_TypeScript_2026.pdf
- Diferencias entre js y ts: https://coddy.tech/docs/es/typescript/typescript-vs-javascript
- Version de ts: https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/
- Union de tipos: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
- Interfaces: https://www.luisllamas.es/interfaces-en-typescript
- Tipos literales: https://www.luisllamas.es/typescript-literales/
- Tipos literales vs Enum: https://www.webdevtutor.net/blog/typescript-literal-type-vs-enum
