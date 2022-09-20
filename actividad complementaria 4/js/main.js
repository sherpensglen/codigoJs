
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

let existToken=()=>{ return localStorage.getItem("token") !== null ? true :false;}

const isAuth = existToken();
if(isAuth){    
  const token = JSON.parse(localStorage.getItem("token"));
  const{username:user} = token;
  regText.innerHTML= "Bienvenido "+ user.split("@")[0];
}
