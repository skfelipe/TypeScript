"use strict";
var Avenger = (function () {
    function Avenger(nombre) {
        this._nombre = nombre;
    }
    Object.defineProperty(Avenger.prototype, "nombre", {
        get: function () {
            console.log("Paso por el get nombre()");
            if (this._nombre) {
                return this._nombre;
            }
            else {
                return "No tiene un nombre el avenger";
            }
        },
        set: function (nombre) {
            console.log("Paso por el set nombre()");
            if (nombre.length <= 3) {
                console.error("El nombre debe tener al menos 3 caracteres");
                return;
            }
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Avenger;
}());
var ciclope = new Avenger("Ciclope");
ciclope.nombre = "Wolverine";
console.log(ciclope.nombre);
