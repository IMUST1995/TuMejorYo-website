const suplementos = [{
    nombre: "Beta Alanine", 
    marca: "Bulk Suplements", 
    precio: 27.97, 
    imagen: "beta.jpg"
    },
    {
    nombre:"Whey Bodybuilding Signature", 
    marca: "Blend Protein (whey concentrate, isolate, and hydrolyzed.)", 
    precio: 69.99, 
    imagen: "bodybuilding.signature.jpg"
    },
    {
    nombre: "Creatina Monohidratada", 
    marca: "Bulk Suplements", 
    precio:"30", 
    imagen: "creatine.jpg"
    }, 
    {
    nombre: "Melatonina", 
    marca: "Evolution Nutrition", 
    precio: 16.99, 
    imagen: "melatonina.jpg"
    }, 
    {
    nombre:"Gold Standard", 
    marca: "Optimun Nutrition", 
    precio: 59.99, 
    imagen: "wheygold.jpg"
    }, 
    {
    nombre: "Whey protein", 
    marca: "Isopure", 
    precio: 49.99, 
    imagen: "isopure.jpg"
    },
    {
    nombre: "Whey Hidrolizada", 
    marca: "Optimun Nutrition", 
    precio: 79.99, 
    imagen: "hidrowheyON.jpg"
    },
    {nombre: "Cafeina", 
    marca: "Nutricost", 
    precio: 15, 
    imagen: "cafeina.jpg"
    },
    {nombre: "Creatina Monohidratada", 
    marca: "Bodybuilding Signature", 
    precio: 29.99, 
    imagen: "creatinaSignature.jpg"
    },
    {nombre: "Caseina Elite", 
    marca: "Dynamatize", 
    precio: 39.99, 
    imagen: "eliteCasein.jpg"
    }]

function guardarProductos(arrayProductos){
    console.log("productos guardados")
    localStorage.setItem("productos", JSON.stringify(arrayProductos));
};
function cargarProductos(){
    console.log("cargado")
    let productos = JSON.parse(localStorage.getItem("productos"))
    return productos
};
guardarProductos(suplementos);
let respuesta = cargarProductos();


/* const URL = '../javascript/productos.json'
$.get(URL, function(respuesta, estado){
    if(estado == 'success'){ */
        for(producto of respuesta){
        $('#tienda').append(
        `<div class="container-fluid card col-sm-12 col-md-4 col-lg-3 mx-4 shadow p-0 mb-4 colorCards" style="max-width: 15rem;">
            <img class="card-img-top img-fluid imgCard" src="../img/${producto.imagen}" style="height:18rem;" alt="producto">
            <div class="card-body d-flex justify-content-center align-items-center flex-column">
                <h3 class="card-title text-center">${producto.nombre}</h3>
                <h5 class="card-text text-center">${producto.marca}</h5>
                <p class="card-text text-center"><strong>Precio: $<span>${producto.precio}</span></strong></p>
                <button class="btn btn-primary botonCarrito" style="width: 6rem">Lo quiero!</button>
            </div>
        </div>`);
    }
/* }
}) */


//Creando carrito

//en la primera linea obtenemo todos los botones con la clase .botonCarrito
const BotonAnadirAlCarroCompra = document.querySelectorAll('.botonCarrito');
//accedemos al boton comprar
const botonComprar = document.querySelector('#botonComprar')
botonComprar.addEventListener('click', comprar);
//con for each iteramos en cada uno la incoprporacion del evento click llamando a la funcion anadircarritoclicked
BotonAnadirAlCarroCompra.forEach((anadirCarro)=>{
    anadirCarro.addEventListener('click', anadirCarroClicked)
})
//declarando la funcion anadir carritclicked
function anadirCarroClicked(event){
    //capturamos el evento
    const button = event.target;
    //buscamos la case .card mas cercana al boton del evento en este caso card pertenece al contendor div de la carta del producto
    const producto = button.closest('.card');
    //seleccionamos el elemento de interes con las siguientes lineas de codigo
    const productoNombre = producto.querySelector('h3').innerText;
    const productoPrecio = producto.querySelector('span').innerText;
    const productoImagen = producto.querySelector('img').src;
    //llamamos otra funcion con parametros las constantes declaradas anteriormente 
    anadirAlCarroCompras(productoNombre, productoPrecio, productoImagen);
    console.log(productoNombre)
    console.log(productoPrecio)
    console.log(productoImagen)
}
//contenerdor donde inyectaremos el template del carrito
const carritoItemsContainer = document.querySelector("#carritoItemsContainer");


function anadirAlCarroCompras(productoNombre, productoPrecio, productoImagen){
    let titulosCards = document.getElementsByClassName('nombreItem')
    for(let i = 0; i < titulosCards.length; i++){
        if(titulosCards[i].innerText == productoNombre){
            let itemRepetido = titulosCards[i].parentElement.parentElement.parentElement.querySelector('.cantidadItems');
            //evitamos que se puedan comprar mas de 10 articulos
            if(itemRepetido.value < 10){
                itemRepetido.value++
                totalCarroComprafunction()
            return
            }
            else{
                totalCarroComprafunction()
                return
            }
            
        }
    }
    
    const carritoItemFila = document.createElement('div');
    const carritoTemplate = `
    <div class="container-fluid row d-flex justify-content-around text-center align-items-center itemCompraCarrito">
        <div class="container-fluid col-2 mb-1" style="width: 15%;">
            <img class="img-fluid m-1 imgCarrito" src="${productoImagen}" alt="producto">
        </div>
        <div class="container d-flex align-items-center justify-content-around col-sm col-2">
            <p class='nombreItem'>${productoNombre}</p>
        </div>
        <div class="container-fluid col-2 row d-flex flex-row">
            <p class="d-flex flex-row">$<span class="precioProducto">${productoPrecio}</span></p>
        </div>
        <div class="container-fluid d-flex align-items-center justify-content-center col-sm col-2">
                <input class="input-group-text cantidadItems" type="number" value="1" min="1" max="10">
        </div>
        <div class="d-flex justify-content-center col-sm col-2">
            <input class="btn bg-danger text-white botonEliminar" type="button" value="X">
        </div>
        <hr>
    </div>
    `

  carritoItemFila.innerHTML = carritoTemplate;
  carritoItemsContainer.appendChild(carritoItemFila)
    
// creamos la funcion del boton eliminar seleccionando del template el boton por medio de la clase
    let botonEliminar = carritoItemFila.querySelector('.botonEliminar')
    botonEliminar.addEventListener('click', eliminarItemCarro)
    //desde el carritoitenfila seleccionamos el boton del cambio y añadimos el evento change y llamamos la funcion para actulizar el precio

    /* 'ayuddaaaaaaaaaaaaaaa'  unicamente se esta incorporando el evento change al primer elemento ya he intentado con for each y establecer la funcion por fuera de esta ayuda please*/
    /* let cambioDeCantidad = carritoItemFila.querySelector('.cantidadItems')
    cambioDeCantidad.addEventListener('change', totalCarroComprafunction)
 */

    let cantidadCambiada = carritoItemFila.querySelectorAll('.cantidadItems');
    cantidadCambiada.forEach(numero => {
        numero.addEventListener('change', totalCarroComprafunction)
    })
    totalCarroComprafunction()
}


function totalCarroComprafunction(){
    let total = 0;
    const totalCarritoCompra = document.querySelector('.totalCarritoCompra')
    // obtenemos todos los items que se encuentran en el carrito ===>>
    const itemsCompraCarrito = document.querySelectorAll('.itemCompraCarrito')
    itemsCompraCarrito.forEach(itemCompraCarrito =>{
        //por cada uno de los elemento vamos a seleccionar el fragmento deseado(precio)
        let precio = itemCompraCarrito.querySelector('.precioProducto')
        precio = parseFloat(precio.textContent);
        //accedemos al elemento que contiene la cantidad en este caso es un input y con .value accedemos al valor
        let cantidad = parseInt(document.querySelector('.cantidadItems').value)
        //actualizamos total mutiplicando cantidad por precio y sumamos al total
    total += precio * cantidad
    total.toFixed(2)
    })
    totalCarritoCompra.innerHTML = total
}

function eliminarItemCarro(){
    const botonClicked = event.target;
    botonClicked.closest('.itemCompraCarrito').remove();
    /* llamamos a la funcion para determinar nuevamente el total ===> */
    totalCarroComprafunction()
};
//vaciar carrito completo
const btnVaciarCarro = document.querySelector('.vaciarCarro')
btnVaciarCarro.addEventListener('click', vaciarCarro);

function vaciarCarro(){
    //accede a todos los elementos
    let itemsCarrito = document.querySelectorAll('.itemCompraCarrito')
    //por cada uno de ello remover item iterado
    itemsCarrito.forEach(item => {
        item.remove();
        /* llamamos a la funcion para determinar nuevamente el total ===> */
        totalCarroComprafunction()
    });
};
//Declaramos la funcion que es llamada al clickar el boton comprar
function comprar(){
    //definimos que el contenido se encuentra vacio
    carritoItemsContainer.innerHTML = '';
    //y llamamos a la funcion para actualizar el monto a pagar con la funcion previamente declarada
    totalCarroComprafunction()
    alert("Gracias por tu compra")
}
