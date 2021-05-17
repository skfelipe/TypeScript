"use strict";
function enviarMision(xmen) {
    console.log("Enviar A: {xmen.nombre}");
    xmen.regenerar("Logan");
}
;
function enviarCuartel(xmen) {
    console.log("Enviar A Cuartel: {xmen.nombre}");
}
;
var wolverine = {
    nombre: "Wolverine",
    regenerar: function (nombreReal) {
        console.log("Se ha regenerado {nombreReal}");
    }
};
enviarMision(wolverine);
