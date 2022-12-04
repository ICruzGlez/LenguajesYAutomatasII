/*
22070006 - Irving Cruz Gonzalez - LYA II
PRACTICA 1
*/

//Declaracion Variable
var name ='          Irving               ';

//Variable Original
console.log("Variable original:");
console.log(name);

//Eliminar los espacio a la derecha
console.log("Variable sin espacios a la derecha:")
console.log(name.trimEnd());

//Eliminar los espacios a la izquierda
console.log("Variable sin espacios a la izquierda:");
console.log(name.trimStart());

//Eliminar espacios de ambos lados
console.log("Variable sin espacios en blanco:");
console.log(name.trim());