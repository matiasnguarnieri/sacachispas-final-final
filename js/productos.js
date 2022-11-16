let productos = [
    {
        id:0001,
        imagen : "./img/CAMISETA SACACHISPAS TITULAR VILTER 2022.jpeg",
        nombre: 'Camiseta titular',
        precio: 20000,
        cantidad: 1,
        talle : 'XL'
    },
    {
        id:0002,
        imagen : "./img/CAMISETA SACACHISPAS TITULAR VILTER 2022.jpeg",
        nombre: 'Camiseta suplente',
        precio: 10000,
        cantidad: 1,
        talle : 'XL'
    },
    {
        id: 0003,
        imagen : "./img/CAMISETA SACACHISPAS TITULAR VILTER 2022.jpeg",
        nombre: 'Arquero',
        precio: 15000,
        cantidad: 1,
        talle : 'XL'
    },
    {
        id:0004,
        imagen : "./img/CAMISETA SACACHISPAS TITULAR VILTER 2022.jpeg",
        nombre: 'Arquero Suplente',
        precio: 5000,
        cantidad: 1,
        talle : 'XL'
    },
    {
        id:0005,
        imagen : "./img/CAMISETA SACACHISPAS TITULAR VILTER 2022.jpeg",
        nombre: 'Remera blanca',
        precio: 7000,
        cantidad: 1,
        talle : 'XL'
    },
    {
        id:0006,
        imagen : "./img/CAMISETA SACACHISPAS TITULAR VILTER 2022.jpeg",
        nombre: 'Remera violeta',
        precio: 8000,
        cantidad: 1,
        talle : 'XL'
    },
    {
        id:0007,
        imagen : "./img/CAMISETA SACACHISPAS TITULAR VILTER 2022.jpeg",
        nombre: 'Arquero Suplente',
        precio: 5000,
        cantidad: 1,
        talle : 'XL'
    },
    {
        id:1001,
        imagen : "./img/CAMISETA SACACHISPAS TITULAR VILTER 2022.jpeg",
        nombre: 'Remera blanca',
        precio: 7000,
        cantidad: 1,
        talle : 'XL'
    },
    {
        id:1002,
        imagen : "./img/CAMISETA SACACHISPAS TITULAR VILTER 2022.jpeg",
        nombre: 'Remera violeta',
        precio: 8000,
        cantidad: 1,
        talle : 'XL'
    }
];

let carrito = [];

if(localStorage.getItem("carrito")!==null){
    carrito=JSON.parse(localStorage.getItem("carrito"));;
};

productos.forEach((item)=>{
    const sectionProdcuto=document.querySelector("#cuadriculaCamisetas")
    const contenido=document.createElement("div") 
    contenido.innerHTML= `
    <section class="productosCamisetas">
    <article class="itemCamisetas">
    <a class="imagenProductoCamisetas" href="producto.html"><img class="imagenProductoCamisetas" src="${item.imagen}" alt=""></a>
            <h3 class="tituloProductoCamisetas">${item.nombre}</h3>
            <span class="precioCamisetas">$${item.precio}</span>
        <div class="formularioParaSlider">
            <form action="">
            <input class="input-cantidadCamisetas" type="number" name="cantidad" value="${item.cantidad}" min="1" max="10" step="" id="botonCantidad">
            </form>
            <button class="boton-agregarCamisetas">Agregar&nbsp;<span><i class="fa-solid fa-cart-plus"></i></span></button>
        </div>
    </article>
</section>
    `;
   
    contenido.classList.add("productosCamisetas");
    sectionProdcuto.append(contenido);

        let botonAgregarCamisetas = contenido.querySelector(".boton-agregarCamisetas");
        let botonCantidad = document.getElementById("botonCantidad").value;
            botonAgregarCamisetas.addEventListener("click", ()=>{
            
            const yaExiste = carrito.some((existentes)=> existentes.id === item.id);
            if(yaExiste){
                carrito.map((p)=>{
                    if(p.id === item.id){
                        p.cantidad++;
                    }
                });
            } else{
                carrito.push({
                    id : item.id,
                    producto : item.nombre,
                    talle : item.talle,
                    cantidad: item.cantidad,
                    precio : item.precio,
                  });
            }
            carritoContador();
          guardarEnLocalStorage();
          
});
   
});


const guardarEnLocalStorage = ()=>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

const carritoContador = ()=>{
    let pCarrito = document.querySelector(".contadorCarrito");
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    pCarrito.innerText=JSON.parse(localStorage.getItem("carritoLength"));
};


carritoContador();


// function actualizarCarrito(){
//     carrito.forEach((item)=>{
//         let tabla = document.getElementById("tablaCarrito");
//         tabla.innerHTML=`
//         <tr>
//         <td>${item.producto}</td>
//         <td>${item.talle}</td>
//         <td>${item.cantidad}</td>
//         <td>${item.precio}</td>
//         <td>${item.producto*item.precio}</td>
//         <td><i class="fa-solid fa-trash tachito"></i></td>
//         </tr>
//         `;
//     })
// };
