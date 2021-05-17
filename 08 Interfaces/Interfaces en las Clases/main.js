"use strict";
var Mutante = (function () {
    function Mutante() {
        this.nombre = "logan";
    }
    Mutante.prototype.regenerar = function (nombre) {
        console.log("Hola" + nombre);
    };
    return Mutante;
}());
