/*
Guia 4
Arreglos
*/

//Crear un arreglo de numbers
let nums = new Array('1', '2', '3', '4', '5');
console.log(nums);

//Crear un arreglo de strings
let ciudades = new Array('CDMX', 'Guadalajara', 'Colima', 'Oaxaca', 'Acapulco');

//Acceder a un índice en el arreglo
console.log(ciudades[1]);

//Modificar un índice del arreglo
ciudades[1] = "Monterrey";
console.log(ciudades);

//Sacar del arreglo el elemento al final
ciudades.pop();
console.log(ciudades);

//Agregar un elemento al final del arreglo
ciudades.push("Cuernavaca");
console.log(ciudades);

//Agregar un elemento al inicio del arreglo
ciudades.unshift("Torreón");
console.log(ciudades);

//Obtener el índice del argumento (-1 si no existe)
console.log(ciudades.indexOf("Colima"));

//Los arreglos pueden almacenar varios tipos de datos
let deTodo = new Array("Esteban", 10, true, 8.5, false, "Soy una oración", null);
console.log(deTodo);
