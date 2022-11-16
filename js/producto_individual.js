let carritoIndividual = JSON.parse(localStorage.getItem("carrito"));
const botonAgregar = document.getElementById("botonIndividual");

let productoDetalle = {
    id:0006,
    imagen : "./img/CAMISETA SACACHISPAS TITULAR VILTER 2022.jpeg",
    producto: 'Remera violeta',
    precio: 20000,
    cantidad: 1,
    talle : 'XL',
};

botonAgregar.addEventListener("click", ()=>{
    carritoIndividual.push(productoDetalle);
    carritoContador();
    guardarEnLocalStorage();
    navigator.reload();
});

const guardarEnLocalStorage = ()=>{
    localStorage.setItem("carrito", JSON.stringify(carritoIndividual));
};