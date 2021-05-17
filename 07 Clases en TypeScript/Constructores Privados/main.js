"use strict";
var Apocalipsis = (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Apocalipsis.llamarApocalipsis = function () {
        if (!Apocalipsis.instancia) {
            Apocalipsis.instancia = new Apocalipsis("Soy Apocalipsis.... el Unico!");
        }
        return Apocalipsis.instancia;
    };
    return Apocalipsis;
}());
var real = Apocalipsis.llamarApocalipsis();
console.log(real);
