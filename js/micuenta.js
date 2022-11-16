//Pop Up direcciones
const botonAgregarDireccion = document.getElementById("agregarDireccion");
const botonCerrarPopUpDireccion = document.getElementById("botonCerrarDireccion");
const popUpDirecciones = document.getElementById("popUpDirecciones");
botonAgregarDireccion.addEventListener("click", ()=>{
    popUpDirecciones.classList.remove("noShow");
});

botonCerrarPopUpDireccion.addEventListener("click", ()=>{
    popUpDirecciones.classList.add("noShow");
});

let direcciones = [];
if(localStorage.getItem("direcciones")!==null){
    direcciones=JSON.parse(localStorage.getItem("direcciones"));;
};

function guardarDirecciones(){
    const alias = document.getElementById("alias");
    const direc = document.getElementById("direccion");
    direcciones.push({
        alias : alias.value,
        direccion : direc.value
    }
    );
    guardarDireccionesEnLocalStorage();
    popUpDirecciones.classList.add("noShow");
    //insertarDirecciones();
};

const guardarDireccionesEnLocalStorage = ()=>{
    localStorage.setItem("direcciones", JSON.stringify(direcciones));
};
//insertarDirecciones();
let direccionesGuardadas = JSON.parse(localStorage.getItem("direcciones"));
direccionesGuardadas.forEach((dir)=>{
let tablaDirecciones = document.getElementById("tablaMisDirecciones");
let filaDirecciones = document.createElement("tr");
filaDirecciones.innerHTML=`
<td>${dir.alias}</td>
<td>${dir.direccion}</td>
<td><i class="fa-solid fa-trash tachito" id="tachito"></i></td> 
`;

tablaDirecciones.append(filaDirecciones);
let eliminarDir = filaDirecciones.querySelector(".fa-solid.fa-trash.tachito");
eliminarDir.addEventListener("click", ()=>{
    eliminarDireccion(dir.alias);
    navigation.reload();
});
}
);

const eliminarDireccion = (alias) => {
    const foundAlias = direccionesGuardadas.find((element) => element.alias === alias);
     
    direccionesGuardadas = direccionesGuardadas.filter((direccionAlias) => {
        return direccionAlias !== foundAlias;
    });
    console.log(direccionesGuardadas);
    localStorage.setItem("direcciones", JSON.stringify(direccionesGuardadas));
};


//Tarjetas
const botonAgregarTarjeta = document.getElementById("botonAgregarTarjeta");
const popUpTarjetas = document.getElementById("pagar-otra-tarjeta nueva-tarjeta");
const botonCerrarPopUpTarjeta = document.getElementById("botonCerrarTarjeta");
botonAgregarTarjeta.addEventListener("click", ()=>{
    popUpTarjetas.classList.remove("noShow");
});
botonCerrarPopUpTarjeta.addEventListener("click", ()=>{
    popUpTarjetas.classList.add("noShow");
});

let tarjetas = [];
if(localStorage.getItem("tarjetas")!==null){
    tarjetas=JSON.parse(localStorage.getItem("tarjetas"));;
};

function guardarTarjetas(){
    const aliasTarjeta = document.getElementById("aliasTarjeta");
    const titular = document.getElementById("titular-nombre");
    const erroresContenedor = document.getElementById("errores");
    const nroTarjeta = document.getElementById("numero-tarjeta").value;
    
    let mensajesErrores = "";
    let valorTxt = nroTarjeta.toString();
    let ultNro = valorTxt.charAt(valorTxt.length - 1);
    let error = false;
    let totalNueveDigitos = 0;
    sumaNueveRestantes();

    if(nroTarjeta == ""){
        error = true;
        mensajesErrores += `<p class="mensaje-error">Debes ingresar un nro. de tarjeta.</p>`;
        erroresContenedor.innerHTML = mensajesErrores;
    }else if(nroTarjeta.length !== 10){
        error = true;
        mensajesErrores += `<p class="mensaje-error">La cantidad de dígitos de la tarjeta debe ser 10.</p>`;
        erroresContenedor.innerHTML = mensajesErrores;
    }else if(ultNro%2 == 0 && totalNueveDigitos%2 == 0 || ultNro%2 !== 0 && totalNueveDigitos%2 !== 0){
        error = true;
        mensajesErrores += `<p class="mensaje-error">Número de tarjeta inválido.</p>`;
        erroresContenedor.innerHTML = mensajesErrores;
    }else{
        tarjetas.push({
            alias : aliasTarjeta.value,
            titular : titular.value,
        });
        navigation.reload();
        guardarTarjetasEnLocalStorage();
        popUpTarjetas.classList.add("noShow");
    }


    function sumaNueveRestantes(){
        for (let i = 0; i < valorTxt.length-1; i++) {
            totalNueveDigitos += parseInt(valorTxt[i], 10);
        };
    };
};

const guardarTarjetasEnLocalStorage = ()=>{
    localStorage.setItem("tarjetas", JSON.stringify(tarjetas));
};

    let tarjetasGuardadas = JSON.parse(localStorage.getItem("tarjetas"));
    tarjetasGuardadas.forEach((item)=>{
    let tabla = document.getElementById("tablaTarjetas");
    let fila = document.createElement("tr");
    fila.innerHTML=`
    <td>${item.alias}</td>
    <td>${item.titular}</td>
    <td><i class="fa-solid fa-trash tachito" id="tachito"></i></td> 
    `;
    
    tabla.append(fila);
    let eliminar = fila.querySelector(".fa-solid.fa-trash.tachito");
    eliminar.addEventListener("click", ()=>{
        eliminarProducto(item.alias);
        navigation.reload();
    });
    }
    );

    const eliminarProducto = (alias) => {
        const foundAlias = tarjetasGuardadas.find((element) => element.alias === alias);
         
        tarjetasGuardadas = tarjetasGuardadas.filter((tarjetaAlias) => {
            return tarjetaAlias !== foundAlias;
        });
        console.log(tarjetasGuardadas);
        localStorage.setItem("tarjetas", JSON.stringify(tarjetasGuardadas));
    };


