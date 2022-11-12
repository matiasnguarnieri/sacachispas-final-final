document.addEventListener("keyup", e=>{
    if(e.target.matches("#buscador")){
        document.querySelectorAll(".categoria-cuadricula").forEach((item)=>{
            item.textContent.toLowerCase().includes(e.target.value)
            ?item.classList.remove("filtro")
            :item.classList.add("filtro");
        })
    }
})