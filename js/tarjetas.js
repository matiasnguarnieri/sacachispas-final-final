// const nroTarjeta = document.getElementById("numero-tarjeta");
// const mensajeError = document.getElementById("unDiv");

let totalNueveDigitos = 0;
let valorNro = "3333333338";
let valorTxt = valorNro.toString();
let ultNro = valorTxt.charAt(valorTxt.length - 1);

validacionNros();

function sumaNueveRestantes(){
    for (let i = 0; i < valorTxt.length-1; i++) {
        totalNueveDigitos += parseInt(valorTxt[i], 10);
    }
}

function validacionNros(){
    sumaNueveRestantes();
    if(ultNro%2 == 0 && totalNueveDigitos%2 == 0 || ultNro%2 !== 0 && totalNueveDigitos%2 !== 0 ){
        alert("NroTarjeta invalido");
    }else{
        alert("NroTarjeta valido");
    }
}