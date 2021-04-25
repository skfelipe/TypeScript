

class Avenger{

  private _nombre:string;

  constructor(nombre?:any){
    this._nombre = nombre;
  }

  get nombre():string{
    console.log("Paso por el get nombre()");

    if(this._nombre){
      return this._nombre;
    }else{
      return "No tiene un nombre el avenger";
    }

  }

  set nombre(nombre:string){
    console.log("Paso por el set nombre()");

    if(nombre.length <= 3){
      console.error("El nombre debe tener al menos 3 caracteres");
      return;
    }
    this._nombre = nombre
  }

}


let ciclope:Avenger = new Avenger("Ciclope");

ciclope.nombre = "Wolverine";
console.log(ciclope.nombre);
