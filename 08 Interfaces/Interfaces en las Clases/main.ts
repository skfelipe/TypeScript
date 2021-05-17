
interface Xmen{
  nombre:string;
  nombreReal?:string;
  regenerar(nombreReal:string):void;
}


class Mutante implements Xmen{
  nombre:string = "logan";
  regenerar(nombre:string){
    console.log("Hola" + nombre)
  }
}
