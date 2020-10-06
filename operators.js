/*
Guia 2
Operadores
*/

/* ------------------------  numbers------------------------ */
/*

Operador   |	  Descripción
_____________________________________________
  +	       |    Addition
  -	       |    Subtraction
  *	       |    Multiplication
  **	     |    Exponentiation
  /	       |    Division
  %	       |    Modulus (Division Remainder)
  ++	     |    Increment
  --	     |    Decrement

*/


let x = 30;
let y = 10;

console.log("x: 30");
console.log("y: 10");

console.log("Suma x+y:");
console.log(x + y);

console.log("Resta x-y:");
console.log(x - y);

console.log("Multiplicación x*y:");
console.log(x * y);

console.log("División x/y:");
console.log(x / y);

console.log("Exponente y^2:");
console.log(y ** 2);

console.log("Módulo: x % 7:");
console.log(x % 7);

x++;
console.log("Incremento x++");
console.log(x);

y--;
console.log("Decremento y--");
console.log(y);


/*
Operador	|   Ejemplo	  |  Igual que
_________________________________________
  =	      |   x = y	    |   x = y
  +=	    |   x += y	  |   x = x + y
  -=	    |   x -= y	  |   x = x - y
  *=	    |   x *= y	  |   x = x * y
  /=	    |   x /= y	  |   x = x / y
  %=	    |   x %= y	  |   x = x % y
  **=	    |   x **= y	  |   x = x ** y

*/

console.log("Asignación x = x + y");
x += y;
console.log(x);


/* ------------------------  strings------------------------ */

let nombre = "Maria";
let saludo = "Hola, mi nombre es "

//Concatenación de strings
console.log(saludo + nombre);

//Concatenación de strings y number
let edad = 20;
console.log(saludo + nombre + " y mi edad es " + edad);

//Otra forma de imprimir
console.log(`Hola mi nombre es ${nombre} y mi edad es ${edad}`);


//String + Number = String
let num1 = 5
let num2 = "5"

let num_str = num1 + num2;

console.log(num_str);
console.log(typeof(num_str));
console.log(num_str + 5);
