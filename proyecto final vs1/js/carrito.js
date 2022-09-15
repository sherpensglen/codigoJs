
// Avance de proyecto tienda de electronicos CELKAP 

class Producto {
  constructor(id,nombre,precio,cantidad) {
    this.id=id;
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

let counter = 1;

let allProducts = [];
 allProducts = array.map((prod) => {
  const pr= new Producto(counter,prod.nombre,prod.precio,prod.cantidad); 
  counter++;
  return pr;
  });

const tableProd = document.querySelector("#productsTable tbody");
const productForm = document.querySelector("#addProduct");


let actualizarProductos=()=>{ 
  tableProd.innerHTML = " ";
  let precioFInal=0;
    for (const pr of allProducts) { 
        const tr = document.createElement("tr");
        tableProd.append(tr);
        pr.agregarIva();
        precioFInal+= pr.sumaTotal();
        tr.innerHTML=` <th scope="row">${pr.id}</th>
        <td>${pr.nombre}</td>
        <td>${pr.cantidad}</td>
        <td>${"$"}${pr.precioIva}</td>
        <td>
            <button
                id="deleteBtn_${pr.id}"
                type="button"
                class="btn btn-danger"
                onclick="quitarProducto(event)">
                X
                </button>
            </td>
        `;
    }
  let sumTotal=document.querySelector("#Total");
  sumTotal.innerHTML =  "$"+ parseInt(precioFInal); 
}

let agregarProductos=()=>{
      const producto = new Producto(counter,productForm.productName.value,parseInt(productForm.productPrice.value),
      parseInt(productForm.productQty.value));
      allProducts.push(producto);
      counter++;
      actualizarProductos();
}

let quitarProducto =(event)=> {
  const btn = event.target;
  const id = btn.id.split("_")[1];
  allProducts = allProducts.filter((prod) => prod.id != id);
  actualizarProductos();
}

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
