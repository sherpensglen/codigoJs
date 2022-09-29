
// Avance de proyecto tienda de electronicos CELKAP 

class Producto {
  constructor(id,idProd,nombre,precio,cantidad) {
    this.id=id;
    this.idProd=idProd;
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

const token = JSON.parse(localStorage.getItem("token"));
const User= new Usuario(token.username,token.password,token.firstname,token.lastname,token.conectado,token.carrito);

let counter = 1;
let allProducts = [];
let allprod=User.carrito;
for(const cr of User.carrito){ 
    const crUs= new Producto(counter,cr.id,cr.nombre,cr.precio,cr.qty);
    counter++;
    allProducts.push(crUs);
}

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

let quitarProducto =(event)=>{
  const btn = event.target;
  const id = btn.id.split("_")[1];
  let dltprod = allProducts.find(item => item.id == id);
  allProducts = allProducts.filter((prod) => prod.id != id);
  allprod=allprod.filter((prod) => prod.id != dltprod.idProd);

  const UpdateCrr= generateToken(User.username,User.password,User.firstname,User.lastname,User.conectado,allprod);
  localStorage.setItem("token",UpdateCrr);      
  const Usersdb=saveshopcar(); 
  localStorage.setItem("RegisterUsers",Usersdb);  
  actualizarProductos();
}
  actualizarProductos();


