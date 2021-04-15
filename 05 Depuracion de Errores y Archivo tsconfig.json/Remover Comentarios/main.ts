/*

  esto es un comentario multilinea
  ........
  cualquier cosa
*/

// variable heroe renombrada por uso excesivo de nombre
let heroes1:string = "Ricardo Tapia (Robin)";
let edad1:number = 30;

let mensaje1 = imprimir(heroes1, edad1);



console.log(mensaje1);

function imprimir(heroe:string, edad:number):string{
    heroe = heroe.toLowerCase();
    edad = edad +10;

    return heroe +" " + edad;
}
