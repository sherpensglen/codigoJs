
// Avance de proyecto tienda de electronicos CELKAP 

console.log("Carrito de productos Celkap");

class Producto {
  constructor(nombre,precio,cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
  agregarIva(){
    let iva = this.precio * .16;
    this.precioIva = iva + this.precio;
    return this.precioIva;
  }
  sumaTotal(){
    let total = this.precioIva*this.cantidad;
   return total;
  }
}
let ordenarPrecio=()=>{
    allProducts.sort((a, b) => {
    return a.precio - b.precio;
   });
}

let quitarProductos=()=>{
 let alltd=document.querySelectorAll("#pr tr td");
 let allth=document.querySelectorAll("#pr tr th");
 for (const  td of alltd) {
    td.remove();
 }
 for (const  th of allth) {
  th.remove();
}
}
let actualizarProductos=()=>{ 
  quitarProductos();
  let i=1;
  let precioFInal=0;
    for (const pr of allProducts) { 
        const tr = document.createElement("tr");
        document.querySelector("#pr").append(tr);
        pr.agregarIva();
        precioFInal+= pr.sumaTotal();
        tr.innerHTML=` <th scope="row">${i}</th>
        <td>${pr.nombre}</td>
        <td>${"$"}${pr.precioIva}</td>
        <td>${pr.cantidad}</td>`;
        i++;
    }
  let sumTotal=document.querySelector("#Total");
  sumTotal.innerHTML =  "$"+ parseInt(precioFInal); 
}

let crearProductos=()=>{
  let opt;
  do{
    opt = prompt("quieres insertar un nuevo producto? S/N"); 
    if(opt.toUpperCase() =="S"){
      let name = prompt("Ingresa Nombre del producto");
      let price = prompt("Ingresa el precio del producto");
      let qty = prompt("Ingresa la cantidad del producto");
      const producto = new Producto(name,parseInt(price),parseInt(qty));
      allProducts.push(producto);
    }

  }while(opt.toUpperCase()!="N");
  actualizarProductos();
}
      let array = [
        {
          nombre:'Celular samsung S20',
          precio:20000,
          cantidad:2
        },
        {
          nombre:'Celular xiomi REDMI 9',
          precio:4800,
          cantidad:5
        },
        {
          nombre:'Celular iphone 11',
          precio:20000,
          cantidad:1
        },
        ]
  
  let allProducts = array.map((prod) => {
      return new Producto(prod.nombre,prod.precio,prod.cantidad)
  }) 


  actualizarProductos();
/*
  console.log("Precio total si es mayor a 20000$ se hace descuento del 10%");

  if(precioFInal<20000){    
    console.log("Total sin descuento de los productos");
    console.log("$",precioFInal);
  }
  else{
    let descuento = precioFInal*.10;
    let precioDesc= precioFInal-descuento;
    console.log("Total sin descuento de los productos");
    console.log("$",precioFInal);
    console.log("El descuento es de :$",descuento);
    console.log("Total con descuento de los productos");
    console.log("$",precioDesc);
  }
*/
