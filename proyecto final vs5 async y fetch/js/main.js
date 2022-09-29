
// main tienda de electronicos CELKAP 

class ProductoMain{
  constructor(id,nombre,precio) {
    this.id=id;
    this.nombre = nombre;
    this.precio = precio;
    this.qty = 1;
  }
}

function añadirCarrito(event){
  event.preventDefault();
  if(isAuth){  
    const token = JSON.parse(localStorage.getItem("token"));
    const User= new Usuario(token.username,token.password,token.firstname,token.lastname,token.conectado,token.carrito);
    console.log(User.carrito);
    const btn = event.target;
    const id = btn.id.split("_")[1];
    let allprod = User.carrito   
    const img =document.querySelector("#figure_"+id+" img").getAttribute('src');
    const caption =document.querySelector("#figure_"+id+" img").getAttribute('alt');
    const nombre =document.querySelector("#figure_"+id+" figcaption").innerHTML;
    const precio = parseInt(document.querySelector("#figure_"+id+" p.price").innerHTML.split("$")[1].split(",")[0]);
    console.log(precio);
    let existing = allprod.find(item => item.id === id);
    let foundIndex = allprod.findIndex(item => item.id === id);

      if(existing){
            allprod[foundIndex].qty++;
            const UpdateCrr= generateToken(User.username,User.password,User.firstname,User.lastname,User.conectado,allprod);
            localStorage.setItem("token",UpdateCrr);      
            const Usersdb=saveshopcar(); 
            localStorage.setItem("RegisterUsers",Usersdb);  
            swal("se ah agregado un producto con exito!","ya disponible en tu carrito","success", {
                      button: "Aceptar",
                    });
                              
          }else{
              const prod = new ProductoMain(id,nombre,precio);
              User.carrito.push(prod);
              const UpdateCrr= generateToken(User.username,User.password,User.firstname,User.lastname,User.conectado,User.carrito);
              localStorage.setItem("token",UpdateCrr);      
              const Usersdb=saveshopcar(); 
              localStorage.setItem("RegisterUsers",Usersdb);  
              swal("se ah agregado un producto con exito!","ya disponible en tu carrito","success", {
                button: "Aceptar",
              });
              }  
      }else{
          swal("fallo en agregar!","Ingrese su cuenta para poder comprar","error", {
            button: "Aceptar",
          });
      }
   }     


const fetchData = async () => {
    const response = await fetch("js/data.json").catch((error) => {
      console.log(error);
    })
    const data = await response.json();
    data.forEach(prod =>{
      const newprod = document.createElement("figure");
      newprod.setAttribute('id','figure_'+prod.id);
      document.querySelector("#masVendidos").append(newprod);
      newprod.innerHTML = `<img src="${prod.img}" alt="${prod.alt}">
                <figcaption>${prod.caption}</figcaption>
                <p class="price">${"$"}${prod.price}${",00"}</p>
                <a id="btn_${prod.id}" href="..usuario/carrito.html" class="btn" onclick="añadirCarrito(event)">Añadir al carrito</a>`;

    })
}

fetchData();

if(isAuth){    
 //sessionStorage.clear();
  //localStorage.clear();
  const menu = document.querySelector("#UserMenu");
  const logout = document.querySelector("#logout");
  const acceder = document.querySelector("#acceder");
  const registrarse = document.querySelector("#registrarse");
  const token = JSON.parse(localStorage.getItem("token"));
  menu.innerHTML= "Bienvenido:"+ token.firstname;
  logout.classList.remove("visually-hidden");
  acceder.classList.add("visually-hidden");
  registrarse.classList.add("visually-hidden");
}