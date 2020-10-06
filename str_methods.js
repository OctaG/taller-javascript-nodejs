/*
Guia 3
String methods
*/

let palabra = "Hola Mundo";

//Obtener el tamaño del string
console.log(palabra.length);

//Todo el string a upper case
console.log(palabra.toUpperCase());

//Todo el string a lower case
console.log(palabra.toLowerCase());

//Particionar el string original
console.log(palabra.slice(0, 5));
//Si es negativo se comienza a contar desde el final
console.log(palabra.slice(-5));

//Crear una lista a partir del string original donde el parámetro es el separador
console.log(palabra.split(" "));


let oracion = "Hoy compré un tamal";

//Regresa el índice de la primera aparición del parámetro
console.log(oracion.indexOf("compré"));
//Regresa el índice de la última aparición del parámetro
console.log(oracion.lastIndexOf("a"));

//Regresa el 'char' en el índice pasado como parámetro
console.log(oracion.charAt(4));

//Remplaza el primer parámetro con el segundo en el string
console.log(oracion.replace("tamal", "taco"));

let oracion_con_espacio = "   Hoy compré un tamal   ";

//Quita espacios antes y después del primer y último char
console.log(oracion_con_espacio.trim());
