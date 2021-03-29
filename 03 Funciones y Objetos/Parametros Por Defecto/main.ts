function nombreCompleto(nombre:string, apellido:string, capitalizado:boolean = true):string{
      if(capitalizado){
        return capitalizar(nombre)+ " "+ capitalizar(apellido);
      }else{
        return nombre + ' ' + apellido;
      }
}


let nombre = nombreCompleto("Emma", "Cancino");

console.log(nombre);


function capitalizar(palabra:string):string{
  return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
