


let heroes:string = "Ricardo Tapia (Robin)";
let edad:number = 30;

let mensaje = imprimir(heroes, edad);

function imprimir(heroe:string, edad:number):string{
    heroe = heroe.toLowerCase();
    edad = edad +10;

    return heroe +" " + edad;
}
