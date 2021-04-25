//
//
// function sumar(a,b){
//   return a +b;
// }
//
// console.log(sumar(2,2));
//
// let sumar1 = (a,b) => a + b;
// let sumar2 = (a,b) =>{
//
//   return a +b;
//
// }
//
// console.log(sumar1(2,2));
//
//
// function darOrden_hulk(orden){
//   return `Hulk ${orden}`;
// }
//
// console.log(darOrden_hulk("Smash!!"));
//
//
// let darOrden_hulk1 = (orden) =>  `Hulk ${orden}`;
//
// console.log(darOrden_hulk1("Smash!!"));
//



let capitan_america = {
  nombre: "Hulk",
  darOrden_hulk: function(){
    //let self = this;
    setTimeout(()=>{
      //console.log(self.nombre("Smash!!"));
      console.log(this.nombre("Smash!!"));
    },1000);

  }
};

capitan_america.darOrden_hulk();
