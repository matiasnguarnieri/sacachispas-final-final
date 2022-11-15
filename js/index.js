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

    
    productos.forEach((item)=>{
        const sectionProductos = document.querySelector(".productos");
        const contenido=document.createElement("article") 
        contenido.innerHTML=`
        <a href="producto.html">
                    <img class="imagenProducto" src="${item.imagen}" alt="">
                    <h3 class="tituloProducto">${item.nombre}</h3><span class="precio">$${item.precio}</span>
                    <span class="fraseAgregarCarrito">Agregar al carrito!</span><i class="fa-solid fa-cart-plus botonSumarCarrito"></i>
                    <p class="cuotas"><i class="fa-regular fa-credit-card"></i>Hasta 6 cuotas sin interés</p>
        </a>
        `;

        contenido.classList.add("item");
        sectionProductos.append(contenido);
    
    });
