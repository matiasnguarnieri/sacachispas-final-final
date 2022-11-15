let carritoLleno = JSON.parse(localStorage.getItem("carrito"));

carritoLleno.forEach((item)=>{
    let total =document.getElementById("total")
    let tabla = document.getElementById("tablaCarrito");
    let fila = document.createElement("tr");
    fila.innerHTML=`
    <td>${item.producto}</td>
    <td>${item.talle}</td>
    <td>${item.cantidad}</td>
    <td>$${item.precio}</td>
    <td>$${item.cantidad*item.precio}</td>
    <td><i class="fa-solid fa-trash tachito" id="tachito"></i></td> 
    `;
    
    tabla.insertBefore(fila, total);
    let eliminar = fila.querySelector(".fa-solid.fa-trash.tachito");
    eliminar.addEventListener("click", ()=>{
        eliminarProducto(item.id);
        navigation.reload();
    });

    const precioFinal = carritoLleno.reduce((acumulador, producto) => acumulador + (producto.precio*producto.cantidad), 0);
    const campoPrecioFinal = document.querySelector("#precioFinal");
    campoPrecioFinal.innerHTML = `$${precioFinal}`;
 });

const eliminarProducto = (id) => {
    const founId = carritoLleno.find((element) => element.id === id);
     
    carritoLleno = carritoLleno.filter((carritoId) => {
        return carritoId !== founId;
    });
    console.log(carritoLleno);
    localStorage.setItem("carrito", JSON.stringify(carritoLleno));
};

let formTarjeta = document.querySelector("#formTarjeta");

function mostrarPopUp(){
    formTarjeta.classList.remove("noShow")
};

let botonCerrar = document.querySelector("#botonCerrar");

botonCerrar.addEventListener("click", ()=>{
    formTarjeta.classList.add("noShow")
})