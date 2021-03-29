function hola(nombre) {
    return "Hola" + nombre;
}
console.log(hola("Felipe"));
function nombreCompleto(nombre, apellido) {
    if (apellido) {
        return nombre + ' ' + apellido;
    }
    else {
        return nombre;
    }
}
var nombre01 = nombreCompleto("Emma");
var nombre02 = nombreCompleto("Emma", "Cancino");
console.log(nombre01);
console.log(nombre02);
