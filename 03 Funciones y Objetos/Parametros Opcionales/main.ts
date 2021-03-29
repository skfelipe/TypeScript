


function hola(nombre){
  return "Hola"+ nombre;
}


console.log(hola("Felipe"));


function nombreCompleto(nombre:string, apellido?:string):string{

    if(apellido){
      return nombre + ' ' + apellido;
    }else{
      return nombre;
    }

}


let nombre01 = nombreCompleto("Emma");
let nombre02 = nombreCompleto("Emma", "Cancino");

console.log(nombre01);
console.log(nombre02);
