
// login tienda de electronicos CELKAP 

let formulario = document.querySelector("#login");

class Usuario {
  constructor(username,password,conectado){   
    this.username= username;
    this.password= password;
    this.conectado=conectado;
  }
}
let arrayUser=[
  {   
    username:'Alfred@gmail.com',
    password:123,
    conectado:"off"
  },
  { 
    username:'hime@gmail.com',
    password:1234,
    conectado:"off"
  },
  {
    username:'prueba@gmail.com',
    password:12345,
    conectado:"off"
  },
];

let  usuariosRegistrados=[];
usuariosRegistrados = arrayUser.map((user) => {
  const pr= new Usuario(user.username,user.password,user.conectado); 
  return pr;
  });

function login(event) {
  event.preventDefault();
  let Username = formulario.username.value;
  let Password = formulario.password.value;
  let Conectado= formulario.conectado.value;
  
  const isAuth = existToken();
  const isUser = existUser(Username,Password);
   if(isAuth && isUser){    
     window.location.href = "../index.html";
   }else{
      for(const us of usuariosRegistrados){
    
        if(Username == us.username && Password == us.password){
           us.conectado=Conectado;
           const token = generateToken(Username,Password,Conectado);
           localStorage.setItem("token", token); 
           window.location.href = "../index.html";  
        }

      }    
  }
}

function generateToken(username, password, conectado) {
  const us = new Usuario(username,password,conectado); 
  return JSON.stringify(us);
}

function existToken() {
  if (localStorage.getItem("token") !== null) {
    return true;
  } else {
    return false;
  }
}
function existUser(Username,Password) {
  for(const us of usuariosRegistrados){
    if(Username == us.username && Password == us.password){
       return true;
    }
    else{
      return false;
    }
  }
}
