
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
ordenarPrecio =>{
    allProducts.sort((a, b) => {
    return a.precio - b.precio;
   });
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
    else{
      console.log("no se agrego ningun producto");
    }

  }while(opt.toUpperCase()!="N");
  
  
  console.log("precios sin iva");
  ordenarPrecio();
  for(const prod of allProducts){
    console.log(prod);
  }
  
  console.log("precios con iva");
  let precioFInal=0;
  for(const prod of allProducts){
    prod.agregarIva();
    console.log(prod);
    precioFInal+= prod.sumaTotal();
  }

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

