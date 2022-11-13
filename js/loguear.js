const btnLogin = document.querySelector("#btnLogin");


//Habilitar boton de login

const usuario=document.querySelector("#usuario");
const contrasenia=document.querySelector("#contrasenia");

function habilitarBoton(){
    if (usuario.value !=="" && contrasenia.value !=="") {
        btnLogin.disabled = false;
}}


//Chequear que usuario y contraseña sean válidos

function validarLogin(){
    preventDefault();
    let usuariosGuardados = JSON.parse(localStorage.getItem("usuarios"));

    usuariosGuardados.forEach(item => {
        if(usuario.value == item["email"] && contrasenia.value == item["pass"]){
            localStorage.setItem("usuarioLogueado", JSON.stringify(item));
            window.location.href("index.html")
        }  
        
    });
    document.querySelector("#errores").innerHTML = "<p>La contraseña y usuario no coinciden </p>";
}