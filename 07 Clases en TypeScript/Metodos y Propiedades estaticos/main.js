"use strict";
var Xmen = (function () {
    function Xmen() {
    }
    Xmen.crearXmen = function () {
        console.log("Se Creo usando un meetodo estatico");
        return new Xmen();
    };
    Xmen.nombre = "Wolverine";
    return Xmen;
}());
console.log(Xmen.nombre);
var Wolverine = Xmen.crearXmen();
