

class Xmen{
  static nombre:string = "Wolverine";

  constructor(){

  }

  static crearXmen(){
    console.log("Se Creo usando un meetodo estatico");
    return new Xmen();
  }

}


console.log(Xmen.nombre);


let Wolverine = Xmen.crearXmen();
