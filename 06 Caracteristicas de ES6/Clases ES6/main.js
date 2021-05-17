class Avenger{
  constructor(nombre, poder){
    this.nombre = nombre;
    this.poder = poder;
  }
}


class AvengerVolador extends Avenger{
  constructor(nombre, poder){
    super(nombre, poder);
    this.vuela = true;
  }
}


let hulk = new  Avenger("Hulk, "Super Fuerza");
let falcon = new AvengerVolador("Falcon", "Alas Mecanicas");

console.log(hulk);
