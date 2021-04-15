"use strict";
var heroes1 = "Ricardo Tapia (Robin)";
var edad1 = 30;
var mensaje1 = imprimir(heroes1, edad1);
console.log(mensaje1);
function imprimir(heroe, edad) {
    heroe = heroe.toLowerCase();
    edad = edad + 10;
    return heroe + " " + edad;
}
