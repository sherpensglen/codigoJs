
// login tienda de electronicos CELKAP 

let formulario = document.querySelector("#register");

let  usuariosRegistrados=[];

if(isAuthRu){    
  const Us = JSON.parse(localStorage.getItem("RegisterUsers"));
  for(const us of Us){
     const nUs = new Usuario(us.username,us.password,us.firstname,us.lastname,us.conectado,us.carrito); 
     usuariosRegistrados.push(nUs);
  }
}

function createUser(event) {
  let Firstname=formulario.firstname.value;
  let Lastname= formulario.lastname.value;
  let Username = formulario.username.value;
  let Password = formulario.password.value;
  if(Firstname ==""||Lastname =="" ||Username ==""||Password ==""){
      event.stopPropagation()
  }else{
      let Conectado= false;
      let Carrito=[];  
      const isUser = existUser(Username);
      if(isUser){    
        swal("ya existe la cuenta!", "Por favor ingresa otra cuenta correctamente!", "error", {
          button: "Aceptar!",
        });
      }else{   
              const token = generateUserdb(Username,Password,Firstname,Lastname,Conectado,Carrito);
              localStorage.setItem("RegisterUsers", token); 
              swal("se creado tu cuenta con exito!","ya disponible para ingresar","success", {
                button: "Aceptar",
              });
                
      }
    }
}


(() => {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()