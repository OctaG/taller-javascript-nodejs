
for(let i = 0; i < 10; i++){
  console.log("Iteración número: " + i);
}

let i = 0;
while(i < 10){
  console.log("Iteración número: " + i);
  i++;
}

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

//Iterar un arreglo de object literals
for(let i = 0; i < libros.length; i++){
  console.log("ID: " + libros[i].id);
  console.log("Titulo: " + libros[i].titulo);
}
//Iterar un arreglo de object literals
for(let libro of libros){
  console.log("ID: " + libro.id);
  console.log("Titulo: " + libro.titulo);
}
