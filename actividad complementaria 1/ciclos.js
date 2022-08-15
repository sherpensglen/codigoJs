

// PROGRAMA PARA CONCATENAR PALABRAS hasta que se de salir

console.log("Combina texto hasta que se escriba ESC");

let Entrada;
let texto ="";

do{
  Entrada = prompt("Ingresar una palabra");
  if(Entrada!="ESC"){ 
    texto += Entrada + " ";
  }
}while(Entrada !="ESC");
console.log("El texto generado es: "+ texto);
