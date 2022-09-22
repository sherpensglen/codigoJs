
// main tienda de electronicos CELKAP 

class MasVendidos {
  constructor(id,img,alt,caption,price) {
    this.id=id;
    this.img = img;
    this.alt = alt;
    this.caption = caption;
    this.price = price;
  }
}

function añadirCarrito(event){
  event.preventDefault();
  if(isAuth){  
    const token = JSON.parse(localStorage.getItem("token"));
    const User= new Usuario(token.username,token.password,token.firstname,token.lastname,token.conectado,token.carrito);
    const btn = event.target;
    const id = btn.id.split("_")[1];
    for(const pr of masvendidos){
      if(pr.id==id){
        User.carrito.push(pr);
        const UpdateCrr= generateToken(User.username,User.password,User.firstname,User.lastname,User.conectado,User.carrito);
        localStorage.setItem("token",UpdateCrr); 
        swal("se ah agregado un producto con exito!","ya disponible en tu carrito","success", {
          button: "Aceptar",
        });
      }
     }     
  }else{
    swal("No se pudo agregar el producto!", "Por favor ingresa tu cuenta!", "error", {
      button: "Aceptar!",
    });
  }
}


let counter = 1;

let masvendidos = [];
 masvendidos = ProdMasvendidos.map((prod) => {
  const pr= new MasVendidos(counter,prod.img,prod.alt,prod.caption,prod.price); 
  counter++;
  return pr;
  });

for (const mv of masvendidos) {
  const newprod = document.createElement("figure");
  document.querySelector("#masVendidos").append(newprod);
  newprod.innerHTML = `<img src="${mv.img}" alt="${mv.alt}">
						<figcaption>${mv.caption}</figcaption>
						<p class="price">${"$"}${mv.price}${",00"}</p>
						<a id="btn_${mv.id}" href="..usuario/carrito.html" class="btn" onclick="añadirCarrito(event)">Añadir al carrito</a>`;
}

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