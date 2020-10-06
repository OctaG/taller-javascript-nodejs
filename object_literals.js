/*
Guia 5
Object literals
*/

//Variables que funcionan como objetos
const persona = {
  nombre: "Diego",
  apellido: "García",
  edad: 10,
  hobbies: ["Nadar", "Leer", "Jugar"],
  //Object literal dentro de un object literal
  direccion: {
    ciudad: "CDMX",
    delegacion: "Álvaro Obregón",
    cp: "01520"
  },
  inscrito: true
}

console.log(persona);

//imprimir 'atributos'
console.log(persona.nombre + " " + persona.apellido);
console.log(persona.hobbies[2]);
console.log(persona.direccion.ciudad);
console.log(persona.inscrito);

//Agregar un nuevo 'atributo'
persona.email = "A01030770@itesm.mx";
console.log(persona);


//Arreglo de object literals
let libros = [
  {
    id: 1,
    titulo: "Harry Potter",
    paginas: 320
  },
  {
    id: 2,
    titulo: "Los juegos del hambre",
    paginas: 250
  },
  {
    id: 3,
    titulo: "Maze runner",
    paginas: 300
  }
]

//Convertir arreglo de object literals a JSON object
librosJSON = JSON.stringify(libros);
console.log(librosJSON);

//Convertir JSON object a arreglo
let librosOBJ = JSON.parse(librosJSON);
console.log(librosOBJ[0].titulo);
