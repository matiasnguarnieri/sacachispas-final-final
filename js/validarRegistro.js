//Mati acá me traigo el form o el boton guardar?

const form=document.querySelector("form");
//condiciones de expresiones
let regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[a-zA-Z]+$/;
let regexPassword=/^[A-Z]{1}[0-9a-zA-Z]{7}$/;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validar();
});

function validar(){
    //variables de error
    //Las contraseñas deberán tener un mínimo de 8 caracteres, empezar con mayúscula y tener al menos un número.
    let error=false;
    let mensajesError='';
    //variables de inputs
    const email=document.querySelector("#email").value;
    const nombre=document.querySelector("#nombre");
    const apellido=document.querySelector("#apellido");
    const contraseña=document.querySelector("#contraseña");
    const contraseñaRepetida=document.querySelector("#contraseñaRepetida");
    if(!regexEmail.test(email)){
        error=true;
        mensajesError+="<p>El formato del email no es correcto</p>";
    }
    if(nombre.value==""){
        error=true;
        mensajesError+="<p>El campo nombre es obligatorio</p>";
    }
    if(apellido.value==""){
        error=true;
        mensajesError+="<p>El campo apellido es obligatorio</p>";
    }
    if(contraseña.value==""){
        error=true;
        mensajesError+="<p>El campo contraseña es obligatorio</p>";
    }
    if(contraseñaRepetida.value!==contraseña.value || contraseñaRepetida.value==""){
        error=true;
        mensajesError+="<p>Las contraseñas deben ser iguales</p>";
    }
    if(error){
        document.querySelector("#mensaje").innerHTML=mensajesError;
    }else{
        form.submit();
        
    }
};
