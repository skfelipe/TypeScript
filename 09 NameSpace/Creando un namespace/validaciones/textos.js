"use strict";
var Validaciones;
(function (Validaciones) {
    function ValidarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        else {
            return false;
        }
    }
    Validaciones.ValidarTexto = ValidarTexto;
})(Validaciones || (Validaciones = {}));
