
interface Xmen{
  nombre:string;
  regenerar(nombreReal:string):void; // incorporando ? se deja opcional
}


function enviarMision(xmen:Xmen){
  console.log(`Enviar A: {xmen.nombre}`);

  xmen.regenerar("Logan");
};
function enviarCuartel(xmen:Xmen){
  console.log(`Enviar A Cuartel: {xmen.nombre}`);
};

let wolverine:Xmen = {
  nombre: "Wolverine",
  regenerar(nombreReal:string){
    console.log(`Se ha regenerado {nombreReal}`);
  }
};

enviarMision(wolverine);
