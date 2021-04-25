class Avenger{
  public nombre:string;
  protected equipo:string;
  private nombreReal:string;

  private puedePelear:boolean = false;
  private peleasGanadas:number = 0;

  constructor(nombre:string, equipo:string, nombreReal:string){
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
  }

  // si no va nada adelante por defecto es publica
  public bio():void{
    let mensaje:string = `${this.nombre} ${this.nombreReal} ${this.equipo} `;

    console.log(mensaje);
  }

  public cambiarEquipoPublico(nuevoEquipo:string):boolean{
    return this.cambiarEquipo(nuevoEquipo);
  }

  // los metodos private solo pueden ser accesados desde el constructor o un metodo publico
  private cambiarEquipo(nuevoEquipo:string):boolean{

    if(nuevoEquipo === this.equipo){
      return false;
    }else{
      return true;
    }

  }


}


let antman:Avenger = new Avenger("AntMan", "cap", "Scott Lang");

antman.bio();


console.log(antman.cambiarEquipoPublico("cap"));
