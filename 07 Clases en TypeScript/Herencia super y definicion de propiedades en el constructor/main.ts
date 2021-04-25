

class Avenger{
  constructor(public nombre:string, private nombreReal:string){
    console.log("Constructor Avenger Llamado");
  }

  public getNombre():string{
    return this.nombre;
  }
  protected getNombre2():string{
    return this.nombre;
  }
}

class Xmen extends Avenger{
  constructor(nombre:string, nombreReal:string){
    console.log("Constructor Xmen Llamado");
    super(nombre,nombreReal);
  }
  public getNombre():string{
    return super.getNombre2();
  }
}

let ciclope:Avenger = new Avenger("Ciclope","Scott");
let ciclope2:Xmen = new Xmen("Ciclope","Scott");


console.log(ciclope);
console.log(ciclope2.getNombre());
