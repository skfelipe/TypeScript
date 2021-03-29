


type Heroe = {
  nombre:string,
  edad:number,
  poderes:string[],
  getNombre:()=>string
}


let flash2:Heroe  = {
  nombre: "Barry Allen",
  edad: 25,
  poderes: ["Puede correr muy rapido", "Viajar por el tiempo"],
  getNombre(){
    return this.nombre;
  }
};


let Superman:Heroe  = {
  nombre: "Clark Kent",
  edad: 500,
  poderes: ["Fuerza", "Velocidad"],
  getNombre(){
    return this.nombre;
  }
};
