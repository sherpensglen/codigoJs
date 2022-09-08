
// Modificanion a la pag principal

console.log("Carrito de productos Celkap");

class Producto {
  constructor(nombre,precio,cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = 0;
  }
  agregarIva(){
    let iva = this.precio * .16;
    this.precioIva = iva + this.precio;
    return this.precioIva;
  }
}



let contacto = document.querySelector("div.encabezadoCajagris p");
contacto.innerHTML = "Modificacion del DOM ";

let lista = document.querySelectorAll("a.list-group-item");
for (const list of lista) {
  list.innerHTML = "RELLENO AL DOM";
}

let array=[];

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
      let pIva=producto.agregarIva();

      const newProduct = document.createElement("figure");
      document.querySelector("section.masVendidos").append(newProduct);
      newProduct.innerHTML = `<img class="figure-img img-fluid rounded" src="img/audifonos2.jpg" alt="${name}">
                    <figcaption class="figure-caption text-right">${name}</figcaption>
                    <p class="price">${"$"}${pIva}</p>
                    <a href="#" class="btn">Añadir al carrito</a>`;
    }
    else{
      console.log("no se agrego producto");
    }

  }while(opt.toUpperCase()!="N");