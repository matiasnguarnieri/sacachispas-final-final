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

const formDirec = document.getElementById("formDirecciones");
const tablaDirecciones = document.getElementById("tablaMisDirecciones");
const alias = document.getElementById("alias");
const direc = document.getElementById("direccion");
let numerito = 1;
formDirec.addEventListener("submit", function(event){
    event.preventDefault();
    let nuevaDireccion = tablaDirecciones.insertRow(-1);
    let nuevaLinea = nuevaDireccion.insertCell(0);
    nuevaLinea.innerText = alias.value;
    nuevaLinea = nuevaDireccion.insertCell(1);
    nuevaLinea.innerText = direc.value;
    nuevaLinea = nuevaDireccion.insertCell(2);
    nuevaLinea.innerHTML = `<i class="fa-solid fa-trash tachito" id="tachito" onclick="eliminarFila(${numerito})"></i>`;
    popUpDirecciones.classList.add("noShow");
    numerito++;
    direcciones.push({
        alias : alias.value,
        direccion : direc.value
    }
    );
    console.log(direcciones);
    guardarDirecionesEnLocalStorage();
});

const guardarDirecionesEnLocalStorage = ()=>{
    localStorage.setItem("direcciones", JSON.stringify(direcciones));
};

function eliminarFila(a){
    tablita.deleteRow(a);
    numerito--;
}

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
    tarjetas.push({
        alias : aliasTarjeta.value,
        titular : titular.value
    }
    );
    guardarTarjetasEnLocalStorage();
    popUpTarjetas.classList.add("noShow");
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


