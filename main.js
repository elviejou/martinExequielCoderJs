  
//Clase consturctora 
class Producto {
    constructor(id, descripcion, codigo, precio, imagen, categoria, cantidad){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.descripcion = descripcion,
        this.codigo = codigo,
        this.precio = precio,
        this.imagen = imagen,
        this.categoria = categoria,
        this.cantidad = cantidad

    }
    //métodos
    mostrarArticulos(){
        console.log(  `ID: ${this.id}, Descripción: ${this.descripcion}, El código es ${this.codigo}, Precio es ${this.precio}, Cantidad ${this.cantidad}`)
    }
    
}//INSTANCIACION DE PRODUCTOS
const producto1 = new Producto(1,"AGENDA MOOVING 15X21 SEMANAL BLACK","1819862",3295,"agenda-mooving-15x21-semanal-black-1404145.jpg","Agendas",1)
const producto2 = new Producto(2,"AGENDA MOOVING 14X20 2DXP HARRY POTTER DIARIA","1819854",3068,"agenda-mooving-14x20-2dxp-harry-potter-diaria-1404222.jpg","Agendas Disney",1)
const producto3 = new Producto(3,"AGENDA MOOVING 14X20 2DXP  MICKEY 2D X PAGINA","1819864",2841,"agenda-mooving-14x20-2dxp-mickey-2d-x-pagina-1404121.jpg","Agendas Disney",1)
const producto4 = new Producto(4,"AGENDA MOOVING 14X20 2DXP MINNIE 2D X PAGINA","1819866",2841,"agenda-mooving-14x20-2dxp-minnie-2d-x-pagina-1404131.jpg","Agendas Disney",1)
const producto5 = new Producto(5,"AGENDA MOOVING 15X21 S.V. COLORING LETTERING","1819865",2045,"agenda-mooving-15x21-semanal-coloring-lettering-1404151.jpg","Agendas",1)
const producto6 = new Producto(6,"AGENDA MOOVING MAN 15X21 DIARIA","1819871",2272,"agenda-mooving-man-15x21-diaria-1405129.jpg","Agendas",1)
const producto7 = new Producto(7,"AGENDA MOOVING 16X22 - DIARIA BEAUTY","1819844",4205,"agenda-mooving-16x22-diaria-beauty-1417134.jpg","Agendas",1)
const producto8 = new Producto(8,"AGENDA MOOVING 14X20 DIARIA DISNEY 100 AÑOS","1819867",4534,"agenda-mooving-14x20-diaria-disney-100-aniversario-1418118.jpg","Agendas Disney",1)
const producto9 = new Producto(9,"MARCADOR MAPED PASTEL X 10","1284004",553,"marcador-maped-pastel-x-10.jpg","Marcadores",1)
const producto10 = new Producto(10,"LAPIZ COLOR MAPED  X12 LARGO PASTEL CJX12","1285008",503,"lapiz-color-maped-x12-largo-pastel.jpg","Lapices de Color",1)
const producto11 = new Producto(11,"CRAYON MAPED GEL X 12","1285033",1508,"lapiz-color-maped-gel-x-12.jpg","Crayones",1)
const producto12 = new Producto(12,"LAPIZ NEGRO MAPED  SIN GOMA TUBO X 72","1285108",2089,"lapiz-negro-maped-sin-goma-tubo-x-72.jpg","Lapices Negros",1)
const producto13 = new Producto(13,"LAPIZ COLOR FILGO SUPERSOFT X 24","3071129",1508,"lapiz-color-filgo-supersoft-24.jpg","Lapices de Color",1)
const producto14 = new Producto(14,"MARCADOR MAPED PUNTA PINCEL  X10","1284024",1002,"marcador-maped-punta-pincel-x10.jpg","Marcadores",1)

//ARRAYS
let carritoConProductos = JSON.parse(localStorage.getItem("carritoConProductos")) || []
let tienda = []

//CONSULTA SI HAY ALGO CARGADO EN STORAGE
if(localStorage.getItem("tienda")){
    tienda = JSON.parse(localStorage.getItem("tienda"))
}
else{
    console.log("Seteando por primera vez el array")
//INSERTA LOS PRODUCTOS DENTRO DEL ARRAY "TIENDA"
tienda.push(producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11,producto12,producto13,producto14)
localStorage.setItem("tienda", JSON.stringify(tienda) )
}
//GENERA LAS CARDS DE LA PAGINA TIENDA
let divProductosLibreria = document.getElementById("productosLibreria")
tienda.forEach((producto)=>{
    let productos = document.createElement("div")
    productos.innerHTML = `<div id="${producto.id}" class="tarjeta2">
                                <img src="../assets/img/${producto.imagen}" style="height: 180px;" alt="${producto.descripcion}">
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
                                                    <img src="../assets/img/${producto.imagen}" style="height: 180px;" alt="${producto.descripcion}">
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
                                                    src="../assets/img/${productoCarrito.imagen}"
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
                                                <button id="btnEliminarProducto${productoCarrito.id}" ><i class="fas fa-trash-alt"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div> `


                                //ELIMINAR PRODUCTOS DEL CARRITO
                                let btnEliminar =  document.getElementById(`btnEliminarProducto${productoCarrito.id}`)
                                let idProducto = productoCarrito.id
                                btnEliminar.addEventListener("click",()=>{
                                    let eliminar = carritoConProductos.findIndex(element => element.idProducto == idProducto)
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





