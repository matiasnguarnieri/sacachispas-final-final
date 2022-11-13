let carritoLleno = JSON.parse(localStorage.getItem("carrito"));



    carritoLleno.forEach((item)=>{
        let tabla = document.getElementById("tablaCarrito");
        tabla.innerHTML=`
        <tr>
        <td>${item.producto}</td>
        <td>${item.talle}</td>
        <td>${item.cantidad}</td>
        <td>$${item.precio}</td>
        <td>$${item.cantidad*item.precio}</td>
        <td><i class="fa-solid fa-trash tachito"></i></td>
        </tr>
        `;

        console.log(tabla);
        console.log(carritoLleno);
    });

    carritoLleno.forEach((item2)=>{
        let contenedor = document.querySelector("#contenedor_tituloCarrito");
        contenedor.innerHTML=`
        <p>${item2.producto}</p>
        `;
    }
    );