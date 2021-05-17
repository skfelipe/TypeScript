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


}


let antman:Avenger = new Avenger("AntMan", "cap", "Scott Lang");

antman.nombre = "Nick Fury";
