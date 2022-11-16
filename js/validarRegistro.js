//Creo Array para guardar usuarios
let usuarios = [];
//Variables de inputs

const nombre=document.querySelector("#nombre");
const apellido=document.querySelector("#apellido");
const contraseña=document.querySelector("#contraseña");
const contraseñaRepetida=document.querySelector("#contraseñaRepetida");

//Mati acá me traigo el form o el boton guardar?
const form=document.querySelector("form");
//Condiciones de expresiones
let regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[a-zA-Z]+$/;
let regexPassword=/^[A-Z]{1}(?=.*\d)(?=.*[a-z]).{5,17}$/;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validar();
});

function validar(){
    //Variables de error
    //Las contraseñas deberán tener un mínimo de 8 caracteres, empezar con mayúscula y tener al menos un número.
    let error=false;
    let mensajesError='';
    const email=document.querySelector("#email");
    if(!regexEmail.test(email.value)){
        error=true;
        mensajesError+=`<p class="mensaje-error">El formato del email no es correcto</p>`;
        email.classList.add("error");
    }
    if(nombre.value==""){
        error=true;
        mensajesError+=`<p class="mensaje-error">El campo nombre es obligatorio</p>`;
        nombre.classList.add("error");
    }
    if(apellido.value==""){
        error=true;
        mensajesError+=`<p class="mensaje-error">El campo apellido es obligatorio</p>`;
        apellido.classList.add("error");
    }
    if(contraseña.value=="" || !regexPassword.test(contraseña.value)){
        error=true;
        mensajesError+=`<p class="mensaje-error">El campo contraseña es incorrecto</p>`;
        contraseña.classList.add("error");
    }
    if(contraseñaRepetida.value!==contraseña.value || contraseñaRepetida.value==""){
        error=true;
        mensajesError+=`<p class="mensaje-error">Las contraseñas deben ser iguales</p>`;
        contraseñaRepetida.classList.add("error");
    }
    if(error){
        // document.querySelector("#mensaje").classList.add("mensaje-error");
        document.querySelector("#mensaje").innerHTML=mensajesError;
    }else{
        form.submit();
        registrarUsuario();
    }
};

function registrarUsuario() {
    //Guardo array en localStorage
    if (localStorage.getItem("usuarios") == undefined) {
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
    } else {
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
    //Creo objeto
    var nuevoUsuario = {
        email: email.value,
        pass: contraseña.value
    }
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

