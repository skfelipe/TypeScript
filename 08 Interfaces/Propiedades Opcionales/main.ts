
interface Xmen{
  nombre:string;
  poder?:string; // incorporando ? se deja opcional
  regenerar?(nombreReal:string):boolean; // incorporando ? se deja opcional
}


function enviarMision(xmen:Xmen){
  console.log(`Enviar A: {xmen.nombre}`);
};
function enviarCuartel(xmen:Xmen){
  console.log(`Enviar A Cuartel: {xmen.nombre}`);
};

let wolverine:Xmen = {
  nombre: "Wolverine",
  poder: "Regeneración"
};

enviarMision(wolverine);
