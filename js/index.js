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
    }];

    let carrito = JSON.parse(localStorage.getItem("carrito"));

    if(localStorage.getItem("carrito")!==null){
        carrito=JSON.parse(localStorage.getItem("carrito"));;
    };
    productos.forEach((item)=>{
        
        const sectionProductos = document.querySelector(".productos");
        const contenido=document.createElement("article") 
        contenido.innerHTML=`
        <a href="producto.html">
                    <img class="imagenProducto" src="${item.imagen}" alt="">
                    <h3 class="tituloProducto">${item.nombre}</h3><span class="precio">$${item.precio}</span></a>
                    <span class="fraseAgregarCarrito">Agregar al carrito!</span><i class="fa-solid fa-cart-plus botonSumarCarrito"></i>
                    <p class="cuotas"><i class="fa-regular fa-credit-card"></i>Hasta 6 cuotas sin interés</p>
       
        `;

        contenido.classList.add("item");
        sectionProductos.append(contenido);
        let botonAgregarCamisetas = contenido.querySelector(".botonSumarCarrito");

        botonAgregarCamisetas.addEventListener("click", ()=>{
            if(carrito !== null) {
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
                        precio : item.precio
                      });
                };
            };
            carritoContador();
            guardarEnLocalStorage();
        })
    });

    const guardarEnLocalStorage = ()=>{
        localStorage.setItem("carrito", JSON.stringify(carrito));
    };