"use strict";
var heroes = "Ricardo Tapia (Robin)";
var edad = 30;
var mensaje = imprimir(heroes, edad);
function imprimir(heroe, edad) {
    heroe = heroe.toLowerCase();
    edad = edad + 10;
    return heroe + " " + edad;
}
