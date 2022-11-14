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
        eliminarProducto();
        navigation.reload();
    })
 });

const eliminarProducto = () => {
    const founId = carritoLleno.find((element) => element.id);
     
    carritoLleno = carritoLleno.filter((carritoId) => {
        return carritoId !== founId;
    });
    console.log(carritoLleno);
    localStorage.setItem("carrito", JSON.stringify(carritoLleno));
};