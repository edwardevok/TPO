var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");
var telefono = document.getElementById("telefono");
var error =  document.getElementById("error");
error.style.color = "red"
function enviarformulario(){
    console.log("Enviando formulario...");
 var mensajeerror = [];

 if(nombre.value === null || nombre.value ===""){
     mensajeerror.push("falta tu nombre");
 }

 if(apellido.value === null || apellido.value ===""){
    mensajeerror.push("falta tu apellido");
}

if(email.value === null || email.value ===""){
    mensajeerror.push("falta tu email");
}

if(telefono.value === null || telefono.value ===""){
    mensajeerror.push("falta tu telefono");
}
    error.innerHTML = mensajeerror.join(", ")
    return false;
}