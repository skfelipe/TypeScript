"use strict";
var thor = {
    nombre: "Thor",
    arma: "Mjolnir"
};
var ironman = {
    nombre: "Ironman",
    arma: "Armorsuit"
};
var capitan = {
    nombre: "Capitan America",
    arma: "Escudo"
};
var avengers = [thor, ironman, capitan];
for (var i in avengers) {
    var avenger = avengers[i];
    console.log(avenger.nombre, avenger.arma);
}
for (var i = 0; i <= avengers.length - 1; i++) {
    var avenger = avengers[i];
    console.log(avenger.nombre, avenger.arma);
}
for (var _i = 0, avengers_1 = avengers; _i < avengers_1.length; _i++) {
    var avenger1 = avengers_1[_i];
    console.log(avenger1.nombre, avenger1.arma);
}
