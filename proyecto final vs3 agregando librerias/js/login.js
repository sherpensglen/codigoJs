
// login tienda de electronicos CELKAP 

let formulario = document.querySelector("#login");

let  usuariosRegistrados=[];

if(isAuthRu){    
  const Us = JSON.parse(localStorage.getItem("RegisterUsers"));
  for(const us of Us){
     const nUs = new Usuario(us.username,us.password,us.firstname,us.lastname,us.conectado,us.carrito); 
     usuariosRegistrados.push(nUs);
  }
}

function login(event){
  event.preventDefault();
  let Username = formulario.username.value;
  let Password = formulario.password.value;
  let Conectado = formulario.conectado.checked;
  if(Username==""|| Password==""){
    swal("Llena los campos correcatmente!", "por favor!", "error")
    .then(() => {
      event.stopPropagation();
    });
  }else{
      if(!isAuthRu){    
        alert("No hay cuentas")
      }else{
          let user={};
          let useract=false;
          for(const us of usuariosRegistrados){    
            if(Username == us.username && Password == us.password){
              user = us;        
              useract=true;
            }
          } 
          if(useract){
            user.conectado=Conectado;
            const token = generateToken(Username,Password,user.firstname,user.lastname,user.conectado,user.carrito);
            localStorage.setItem("token", token); 
            window.location.href = "../index.html";  
          }else{
            swal("Error al ingresar la cuenta!", "Por favor ingresa tu cuenta correctamente!", "error", {
              button: "Aceptar!",
            });
          }
        }
      }
  }


