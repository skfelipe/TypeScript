function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I'm " + nombre;
}
function salvarMundo() {
    console.log("El mundo esta salvado!");
}
var miFuncion;
miFuncion = sumar;
console.log(miFuncion(5, 5));
// let miFuncion:  (a:string ) => string    ;
//
// miFuncion = saludar;
// console.log(miFuncion("IronMan"));
//
// let miFuncion:  ( ) => void    ;
//
// miFuncion = salvarMundo;
// miFuncion();
