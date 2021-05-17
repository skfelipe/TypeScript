"use strict";
function conducirBatimovil(auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
}
var batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear: function () {
        console.log("...... run!!!");
    }
};
var guason = {
    reir: true,
    comer: true,
    llorar: false
};
function reir(guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}
var ciudadGotica;
ciudadGotica = function ciudadGotica(ciudadanos) {
    return ciudadanos.length;
};
var Personaclass = (function () {
    function Personaclass() {
        this.nombre = "";
        this.edad = 0;
        this.sexo = "";
        this.estadoCivil = "";
    }
    Personaclass.prototype.imprimirBio = function () {
        console.log("una breve descripcion..");
    };
    return Personaclass;
}());
