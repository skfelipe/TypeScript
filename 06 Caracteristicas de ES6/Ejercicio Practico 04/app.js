
// Convierta este archivo de ES5 a ES6 - JavaScript 2015
// OJO: No es a TypeScript, solo JAVASCRIPT


// ==============================
//  Spiderman info
// ==============================
// Constantes?
const HEROE = "Spiderman";

// Declaracion de variables?
let spiderman = "Peter Parker",
    venom = "Eddie Brock";

// Destructuracion de arreglos?
let versiones = ["Spider-Man 2099","Spider-Girl","Ultimate Spider-Man"];


let [version1,version2, version3] = versiones;

console.log(version1);
console.log(version2);
console.log(version3);

// Destructuracion de objetos?
var villanos = {
  venom: "Eddie Brock",
  carnage: "Cletus Kasady",
  sandman: "William Baker"
};

let { venom, carnage, sandman } = villanos;

console.log(venom);
console.log(carnage);
console.log(sandman);


for(let version of versiones){
  console.log(version);
}
