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

const formDirec = document.getElementById("formDirecciones");
const tablaDirecciones = document.getElementById("tablaMisDirecciones");
const alias = document.getElementById("alias");
const direc = document.getElementById("direccion");

formDirec.addEventListener("submit", function(event){
    event.preventDefault();
    let nuevaDireccion = tablaDirecciones.insertRow(-1);
    let nuevaLinea = nuevaDireccion.insertCell(0);
    nuevaLinea.innerText = alias.value;
    nuevaLinea = nuevaDireccion.insertCell(1);
    nuevaLinea.innerText = direc.value;
    nuevaLinea = nuevaDireccion.insertCell(2);
    nuevaLinea.innerHTML = `<i class="fa-solid fa-trash tachito" id="tachito"></i>`;
});

