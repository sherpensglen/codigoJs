
// Clases Principales

class Usuario{
  constructor(username,password,firstname,lastname,conectado,carrito=[]){   
    this.username= username;
    this.password= password;
    this.conectado=conectado;
    this.firstname=firstname;
    this.lastname=lastname;
    this.carrito=carrito;
  }
}

//funciones para administrar la  session

const isAuth = existToken();

function existToken() {
  if (localStorage.getItem("token") !== null || sessionStorage.getItem("token") !== null) {
    return true;
  } else {
    return false;
  }
}

function generateToken(username, password,firstname,lastname, conectado,carrito=[]){
  const us = new Usuario(username,password,firstname,lastname,conectado,carrito);
  return JSON.stringify(us);
}

function logout(){
  if(isAuth){
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    window.location.href = "index.html";  
  }else{
    alert("No hay cuenta");
  }
}

//funciones para la administracion de ususarios

const isAuthRu = existRegUsers();

function generateUserdb(username, password,firstname,lastname, conectado,carrito=[]) {
  const us = new Usuario(username,password,firstname,lastname,conectado,carrito);
  usuariosRegistrados.push(us);
  return JSON.stringify(usuariosRegistrados);
}

function existRegUsers(){
  if(localStorage.getItem("RegisterUsers") !== null) { 
   return true 
     }else{
       return false; 
     }
 }
 
 function existUser(Username){
   for(const us of usuariosRegistrados){
     if(Username == us.username){
       return true
     }else{
       return false;
   }
 }
 }