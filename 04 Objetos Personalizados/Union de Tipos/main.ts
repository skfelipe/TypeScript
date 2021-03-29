

type Heroes = {
  nombre:string,
  edad:number,
  poderes:string[],
  getNombre:()=>string
};


let loquesea:string | number | Heroes = "Felipe";

loquesea = 10;
