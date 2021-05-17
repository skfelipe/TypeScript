

let thor = {
  nombre: "Thor",
  arma: "Mjolnir"
};

let ironman = {
  nombre: "Ironman",
  arma: "Armorsuit"
};

let capitan = {
  nombre: "Capitan America",
  arma: "Escudo"
};

let avengers = [thor, ironman, capitan];


for (let i in avengers){
  let avenger = avengers[i];
  console.log(avenger.nombre, avenger.arma);
}

for(let i = 0; i <= avengers.length -1; i++){
  let avenger = avengers[i];
  console.log(avenger.nombre, avenger.arma);
}


for(let avenger1 of avengers){
  console.log(avenger1.nombre, avenger1.arma);
}
