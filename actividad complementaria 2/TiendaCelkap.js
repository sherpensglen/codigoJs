
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
  
  console.log("precios sin iva");
  for(let i=0;i<3;i++){
    console.log(allProducts[i]);
  }
  
  console.log("precios con iva");
  let precioFInal=0;
  for(let i=0;i<3;i++){
    allProducts[i].agregarIva();
    console.log(allProducts[i]);
    precioFInal+= allProducts[i].sumaTotal();
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

