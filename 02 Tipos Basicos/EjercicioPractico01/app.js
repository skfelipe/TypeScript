// Tipos
var Batman = "Bruce";
var superman = "Clark";
var Existe = false;
// Tuplas
var parejaHeroes = [Batman, superman];
var villano = ["Lex Lutor", 5, true];
// Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
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
// Retorno de funciones
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
var poder = "100";
var largoDelPoder = poder.length;
console.log(largoDelPoder);
