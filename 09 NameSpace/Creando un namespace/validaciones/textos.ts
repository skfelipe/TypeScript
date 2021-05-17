

namespace Validaciones{
  export function ValidarTexto(texto:string):boolean{
    if(texto.length>3){
      return true;
    }else{
      return false;
    }
  }
}
