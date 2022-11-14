const carritoContador = ()=>{
    let carritoLleno = JSON.parse(localStorage.getItem("carrito"));
    let pCarrito = document.querySelector(".contadorCarrito");
    const carritoLength = carritoLleno.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    pCarrito.innerText=JSON.parse(localStorage.getItem("carritoLength"));
};

carritoContador();