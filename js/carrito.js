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
        <td><i class="fa-solid fa-trash tachito"></i></td>
        
        `;

        tabla.insertBefore(fila, total);

        console.log(tabla);
        console.log(carritoLleno);
        calcularTotal();
    });

 function calcularTotal(){
    let totalPrecio =document.getElementById("precioTotal")
    totalPrecio.innerText=
 }