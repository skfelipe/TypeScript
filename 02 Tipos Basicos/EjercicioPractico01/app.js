"use strict";
var Batman = "Bruce";
var superman = "Clark";
var Existe = false;
var parejaHeroes = [Batman, superman];
var villano = ["Lex Lutor", 5, true];
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
var Fuerza;
(function (Fuerza) {
    Fuerza[Fuerza["acuaman"] = 0] = "acuaman";
    Fuerza[Fuerza["flash"] = 5] = "flash";
    Fuerza[Fuerza["Batman"] = 1] = "Batman";
    Fuerza[Fuerza["superman"] = 100] = "superman";
})(Fuerza || (Fuerza = {}));
var fuerzaFlash = Fuerza.flash;
var fuerzaSuperman = Fuerza.superman;
var fuerzaBatman = Fuerza.Batman;
var fuerzaAcuaman = Fuerza.acuaman;
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
var poder = "100";
var largoDelPoder = poder.length;
console.log(largoDelPoder);
