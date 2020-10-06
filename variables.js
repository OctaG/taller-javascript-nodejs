/*
Guia 1
Variables
*/


/* ------------------------  let, const y var ------------------------ */
// https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

// Variables en el scope local que se van a reasignar (Variables)
let x = 5;

// Variables en el scope local que no se van a reasignar (Constantes)
const y = 3.1416;

// Variables en el scope global
var g = "global";


//Es posible reasignar el valor de la variable "x" sin problema
x = 10;
console.log(x);

/*
No es posible reasignar el valor de la variable "y" pues dará error
y = 10;
console.log(y);
*/


/* --------------------------- data types --------------------------- */

//Number
let soyUnEntero = 20;
let soyUnFlotante = 20.50;

//String
let nombre = "Pablo";

//Boolean
let soyVerdadero = true;
let soyFalso = false;

//Null
let soyNull = null;

//Undefined
let soyUndefined;

/*
Diferencia entre null y undefined
https://levelup.gitconnected.com/javascript-null-vs-undefined-2acda986f79f

Una variable es undefined cuando ha sido declarada pero no se le ha asignado
ningun valor.

Una variable es null cuando específicamente se le asigna el valor nulo.

*/

//typeof() regresa el tipo de dato del elemento pasado como argumento
console.log(typeof(soyUnEntero));
console.log(typeof(soyNull));
