function nombreCompleto(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido);
    }
    else {
        return nombre + ' ' + apellido;
    }
}
var nombre = nombreCompleto("Emma", "Cancino");
console.log(nombre);
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
