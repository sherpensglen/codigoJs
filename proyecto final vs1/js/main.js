
// login tienda de electronicos CELKAP 

let formulario = document.querySelector("#login");
const regText = document.querySelector("#user");

class Usuario {
  constructor(username,password,conectado){   
    this.username= username;
    this.password= password;
    this.conectado=conectado;
  }
}  

function existToken() {
  if (localStorage.getItem("token") !== null) {
    return true;
  } else {
    return false;
  }
}

const isAuth = existToken();
if(isAuth){    
  const token = JSON.parse(localStorage.getItem("token"));
  let user = token.username.split("@")[0];
  regText.innerHTML= "Bienvenido "+ user;
}
