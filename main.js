//Clase consturctora 
class Producto {
    constructor(id, descripcion, codigo, precio, imagen){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.descripcion = descripcion,
        this.codigo = codigo,
        this.precio = precio,
        this.imagen = imagen
    }
    
    //métodos
    mostrarArticulos(){
        console.log(  `ID: ${this.id}, Descripción: ${this.descripcion}, El código es ${this.codigo}, Precio es ${this.precio}, Cantidad ${this.cantidad}`)
    }
    
}

// //INSTANCIACION DE PRODUCTOS DESDE EL ARCHIVO  "productos.json"
const cargarProductosEnTienda = async() =>{
    const response = await fetch("../productos.json")
    const atributoProducto = await response.json()
    for (let producto of atributoProducto){
        let nuevoProducto = new Producto(producto.id, producto.descripcion, producto.codigo, producto.precio, producto.imagen)
        tienda.push(nuevoProducto)
    }
    localStorage.setItem("tienda", JSON.stringify(tienda) )   
}


//ARRAYS
let tienda = []
let carritoConProductos = JSON.parse(localStorage.getItem("carritoConProductos")) || []



//CONSULTA SI HAY ALGO CARGADO EN STORAGE
localStorage.getItem("tienda") ? tienda = JSON.parse(localStorage.getItem("tienda")) :  cargarProductosEnTienda()


//GENERA LAS CARDS DE LA PAGINA TIENDA
let divProductosLibreria = document.getElementById("productosLibreria")
tienda.forEach((producto)=>{
    let productos = document.createElement("div")
    productos.innerHTML = `<div id="${producto.id}" class="tarjeta2">
                                <img src="${producto.imagen}" style="height: 180px;" alt="${producto.descripcion}">
                                <h5 class="nombreProductos">${producto.descripcion}</h5>
                                <span>$${producto.precio} IVA inc*</span>
                                <small>cod: ${producto.codigo}</small>
                                <div>
                                <button id="agregarBtn${producto.id}" class="btn btn-outline-success btnComprar">Agregar al  <i class="fas fa-shopping-cart fa-1x"></i></button>
                                </div>
                            </div>`        

                            divProductosLibreria.append(productos)    
                            let btnAgregar =  document.getElementById(`agregarBtn${producto.id}`)  
                            console.log(btnAgregar)
                            btnAgregar.addEventListener ("click", ()=>{
                                console.log(producto)
                                addToCart(producto)
                            }) 
})


//BUSCADOR DE PRODUCTOS POR NOMBRE O CODIGO
const textoBuscar = document.querySelector("#textoBuscar")
const botonBuscar = document.querySelector("#botonBuscar")
const resultadoBusqueda = document.querySelector("#productosLibreria")

const buscarProductos = ()=>{
    console.log(textoBuscar.value)
    
    productosLibreria.innerHTML = ""

    const textoProducto = textoBuscar.value.toLowerCase();
    const codigoProducto = textoBuscar.value.toLowerCase();
    for (let producto of tienda){
        let descripcion = producto.descripcion.toLowerCase();
        let codigo = producto.codigo;
        if(descripcion.indexOf(textoProducto) !== -1 || codigo.indexOf(codigoProducto) !== -1) {
                resultadoBusqueda.innerHTML += `<div id="${producto.id}" class="tarjeta2">
                                                    <img src="${producto.imagen}" style="height: 180px;" alt="${producto.descripcion}">
                                                    <h5>${producto.descripcion}</h5>
                                                    <span>$${producto.precio} IVA inc*</span>
                                                    <small>cod: ${producto.codigo}</small>
                                                    <div>
                                                    <button id="agregarBtn${producto.id}" class="btn btn-outline-success btnComprar">Agregar al  <i class="fas fa-shopping-cart fa-1x"></i></button>
                                                    </div>
                                                </div>`
            }  

    }
    if(resultadoBusqueda.innerHTML === ""){
    //POP-UP MENSAJE PRODUCTO NO ENCONTRADO
    Toastify({
        text: "El producto no se encuentra en la tienda",
        duration: 2000,
        gravity: "top", 
        position: "center", 
        stopOnFocus: false, 
        style: {
          background: "red",
          color: "white"
        },
      }).showToast(); 
    }
}

botonBuscar.addEventListener("click" , buscarProductos)
//VA BUSCANDO A MEDIDA QUE VAMOS ESCRIBIENDO EN EL BUSCADOR
textoBuscar.addEventListener("keyup", buscarProductos)

//FUNCION AGREGAR AL CARRITO
function addToCart(producto){
    carritoConProductos.push(producto)
    console.log(carritoConProductos)
    localStorage.setItem("carritoConProductos", JSON.stringify(carritoConProductos))
    //POP-UP MENSAJE AGREGADO AL CARRITO
    Toastify({
        text: "Producto agregado al Carrito",
        duration: 2000,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "green",
          color: "white"
        },
      }).showToast();    
}

//DOM CARRITO DE COMPRAS
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let parrafoCompra = document.getElementById('precioTotal')
//BOTON LLAMAR AL CARRITO
botonCarrito.addEventListener("click", ()=>{
    cargarProductosEnCarrito(carritoConProductos)
})
//FUNCION CARGAR PRODUCTOS
function cargarProductosEnCarrito(array){
    modalBody.innerHTML = ""
    array.forEach((productoCarrito)=>{

        modalBody.innerHTML += `<div class="card mb-3" id ="productoCarrito${productoCarrito.id}>
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between" style="margin: 5px;">
                                            <div class="d-flex flex-row align-items-center">
                                                <div>
                                                    <img
                                                    src="${productoCarrito.imagen}"
                                                    class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                                                </div>
                                                <div class="ms-3" style="width: 200px;">
                                                    <h6>${productoCarrito.descripcion}</h6>
                                                    <p class="small mb-0">${productoCarrito.codigo}</p>
                                                </div>
                                                <div class="ms-3" style="width: 60px;">
                                                    <h6>Cant</h6>
                                                    <p class="small mb-0">${productoCarrito.cantidad}</p>
                                                </div>
                                                </div>
                                                <div class="d-flex flex-row align-items-center">
                                                    <div style="width: 10px;">
                                                        
                                                    </div>
                                                <div style="width: 80px;">
                                                <h5 class="mb-0">$${productoCarrito.precio}</h5>
                                                </div>
                                                <button id="btnEliminarProducto"><i class="fas fa-trash-alt"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div> `


                                //ELIMINAR PRODUCTOS DEL CARRITO                                                      
                                let btnEliminarProducto =  document.getElementById(`btnEliminarProducto`)
                                let idProducto = productoCarrito.id
                                btnEliminarProducto.addEventListener("click", ()=>{
                                    let eliminar = carritoConProductos.findIndex(element => element.idProducto == idProducto.id)
                                    carritoConProductos.splice(eliminar,1)
                                    localStorage.setItem("carritoConProductos",JSON.stringify(carritoConProductos))
                                    cargarProductosEnCarrito(carritoConProductos)

                                    //POP UP MENSAJE PRODUCTO ELIMINADO
                                    Toastify({
                                        text: "Producto eliminado del Carrito",
                                        duration: 2000,
                                        gravity: "bottom", 
                                        position: "right", 
                                        stopOnFocus: true, 
                                        style: {
                                          background: "red",
                                          color: "white"
                                        },
                                    }).showToast();    

                                })              
})              
     //CALCULA TOTAL
     compraTotal(array)
}

//FUNCION CALCULO TOTAL DE LA COMPRA
function compraTotal(array){
    let precioTotalCompra = 0

    precioTotalCompra = array.reduce((precioTotalCompra, productoCarrito)=>{
        return precioTotalCompra + productoCarrito.precio
    },0)
    precioTotalCompra == 0 ? parrafoCompra.innerHTML = `<div class="card mb-3" style="margin:10px" >
                                                    <div class="card-body">
                                                        <div class="d-flex justify-content-end">
                                                            <div class="d-flex flex-row align-items-center">
                                                                <div>
                                                                    <strong>El carrito se encuentra vacío</strong>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>`
    :     parrafoCompra.innerHTML =   `<div class="card mb-3" style="margin:10px" >
                                        <div class="card-body">
                                            <div class="d-flex justify-content-end">
                                                <div class="d-flex flex-row align-items-center">
                                                    <div>
                                                        El total de su compra es <strong>$${precioTotalCompra}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`

                                    //FINALIZAR COMPRA
                                let finalizarCompra = document.getElementById("btnFinalizarCompra")
                                finalizarCompra.addEventListener("click",()=>{ 
                                    Swal.fire({
                                        title: `El total a pagar es de $${precioTotalCompra}`,
                                        icon: "success",
                                        confirmButtonText : "Acepto",
                                        confirmButtonColor : "green",
                                        timer: 5000,
                                        text: "Gracias por comprar en FRANPAPEL SRL. Vuelva pronto",
                                        imageUrl: "",
                                        imageHeight: 400,
                                        imageAlt: ``    
                                    })
                                    carritoConProductos = []
                                })
    }

//FECHA T HORA

const DateTime = luxon.DateTime
const fechaActual = DateTime.now()
let divFechaActual = document.getElementById("fechaActual")
let fecha = fechaActual.toLocaleString(DateTime.DATE_FULL)
divFechaActual.innerHTML = `${fecha}`



