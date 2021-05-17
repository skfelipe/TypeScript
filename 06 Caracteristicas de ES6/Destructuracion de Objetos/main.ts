


let avengers = {
  nick: "Samuel Jackson",
  ironman: "Robert Downey Jr",
  vision: "Paul Bettany"
};


// let nick = avengers.nick;
// let ironmon = avengers.ironmon;
// let vision = avengers.vision;


let { nick, ironman:warmachine, vision } = avengers;


console.log(nick);
console.log(warmachine);
console.log(vision);
