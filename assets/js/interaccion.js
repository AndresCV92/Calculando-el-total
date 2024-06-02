precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

 let sumar = document.querySelector("#sumar");
 let restar = document.querySelector("#restar");
 let cantidad = document.querySelector(".cantidad");
 let totalValor = document.querySelector(".valor-total");

 sumar.addEventListener("click",()=>{
       let cantidad = document.querySelector(".cantidad")
       let totalProductos =  cantidad.innerHTML
       cantidad.innerHTML =  ++totalProductos
       let totalValor = document.querySelector(".valor-total")
       totalValor.innerHTML = parseInt(cantidad.innerHTML) * precio
 })



 restar.addEventListener("click",()=>{
if (parseInt(cantidad.innerHTML) > 0) {
    let cantidad = document.querySelector(".cantidad")
    let totalProductos = cantidad.innerHTML
    cantidad.innerHTML = --totalProductos
    let totalValor = document.querySelector(".valor-total")
    totalValor.innerHTML = parseInt(cantidad.innerHTML) * precio
   } 
 })
