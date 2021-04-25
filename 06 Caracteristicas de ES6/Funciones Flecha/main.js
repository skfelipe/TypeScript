"use strict";
var capitan_america = {
    nombre: "Hulk",
    darOrden_hulk: function () {
        var self = this;
        setTimeout(function () {
            console.log(self.nombre("Smash!!"));
        }, 1000);
    }
};
capitan_america.darOrden_hulk();
