// Tipos
let Batman:string = "Bruce";
let superman:string = "Clark";

let Existe:boolean = false;

// Tuplas
let parejaHeroes:[string,string] = [Batman,superman];
let villano:[string, number, boolean] = ["Lex Lutor",5,true];

// Arreglos
let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones

enum Fuerza{
  acuaman = 0,
  flash=5,
  Batman=1,
  superman=100
}

let fuerzaFlash = Fuerza.flash;
let fuerzaSuperman = Fuerza.superman;
let fuerzaBatman = Fuerza.Batman;
let fuerzaAcuaman = Fuerza.acuaman;

// Retorno de funciones
function activar_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder:string = "100";
let largoDelPoder:number = poder.length;
console.log( largoDelPoder );
