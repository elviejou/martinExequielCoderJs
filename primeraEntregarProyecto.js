//Clase consturctora 
class Producto {
    constructor(id, descripcion, codigo, precio){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.descripcion = descripcion,
        this.codigo = codigo,
        this.precio = precio

    }
    //métodos
    mostrarArticulos(){
        console.log(  `ID: ${this.id}, Descripción: ${this.descripcion}, El código es ${this.codigo}, Precio es ${this.precio}`)
    }
    mostrarBusqueda(){
        alert(` ID ${this.id} \n Descripción ${this.descripcion} \n El código es ${this.codigo} \n Precio es ${this.precio}`)
    }
}//Instanciación de objetos -- respetamos orden y cantidad de atributos

const producto1 = new Producto(1,"AGENDA MOOVING 15X21 SEMANAL BLACK","1819862",3295)
const producto2 = new Producto(2,"AGENDA MOOVING 14X20 2DXP HARRY POTTER DIARIA","1819854",3068)
const producto3 = new Producto(3,"AGENDA MOOVING 14X20 2DXP  MICKEY 2D X PAGINA","1819864",2841)
const producto4 = new Producto(4,"AGENDA MOOVING 14X20 2DXP MINNIE 2D X PAGINA","1819866",2841)
const producto5 = new Producto(5,"AGENDA MOOVING 15X21 S.V. COLORING LETTERING","1819865",2045)
const producto6 = new Producto(6,"AGENDA MOOVING MAN 15X21 DIARIA","1819871",2272)
const producto7 = new Producto(7,"AGENDA MOOVING 16X22 - DIARIA BEAUTY","1819844",4205)
const producto8 = new Producto(8,"AGENDA MOOVING 14X20 DIARIA DISNEY 100 AÑOS","1819867",4534)
const producto9 = new Producto(9,"MARCADOR MAPED PASTEL X 10","1284004",553)
const producto10 = new Producto(10,"LAPIZ COLOR MAPED  X12 LARGO PASTEL CJX12","1285008",503)
const producto11 = new Producto(11,"LAPIZ COLOR MAPED GEL X 12","1285033",1508)
const producto12 = new Producto(12,"LAPIZ NEGRO MAPED  SIN GOMA TUBO X 72","1285108",2089)
const producto13 = new Producto(13,"LAPIZ COLOR FILGO SUPERSOFT X 24","3071129",1508)
const producto14 = new Producto(14,"MARCADOR MAPED PUNTA PINCEL  X10","1284024",1002)

//
const tienda= []
tienda.push(producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11,producto12,producto13,producto14)
console.log(tienda)




//FUNCION VER TIENDA
function mostrarTienda(array){
    alert("En la consola puede ver los productos de la tienda")
    console.log("TIENDA:")
    array.forEach((Producto)=>{
        Producto.mostrarArticulos()
    })
}

//COMPRAR PRODUCTOS
function comprarProductos(){
    let cart = []
    let comprarEnTienda = prompt("Bienvenido a la tienda, desea Ingresar? si/no ")
    
    while(comprarEnTienda != "si" && comprarEnTienda != "no"){
        comprarEnTienda = prompt("DESEA EMPEZAR SU COMPRA? si/no.")
    }
    
    if(comprarEnTienda == "si"){
        console.log("TIENDA")
        let productosTienda = tienda.map((producto) => `\n ${producto.id}) ${producto.descripcion} = $${producto.precio}`);
        console.log(productosTienda.join())
    }else if(comprarEnTienda == "no"){
        alert("GRACIAS POR COMPRAR EN FRANPAPEL SRL")
    }
    while(comprarEnTienda != "no"){
        let producto = prompt("AGREGUE UN PRODCUTO SEGUN SU -ID")
        let precio = 0
    
    if(producto == "1" || producto == "2" || producto == "3" || producto == "4" || producto == "5" || producto == "6"|| producto == "8" || producto == "9" || producto == "10" || producto == "11"|| producto == "12" || producto == "13" || producto == "14") {
        switch(producto){
            case "1":
                precio = 3295;
                break;
            case "2":
                precio = 3068;
                break;
            case "3":
                precio = 2841;
                break;
            case "4":
                precio = 2841;
                break;
            case "5":
                precio = 2045;
                break;
            case "6":
                precio = 2272;
                break;
            case "7":
                precio = 4205;
                break;
            case "8":
                precio = 4534;
                break;
            case "9":
                precio = 553;
                break;                    
            case "10":
                    precio = 503;
                    break;                    
            case "11":
                precio = 1508;
                break;       
            case "12":
                precio = 2089;
                break;                   
            case "13":
                    precio = 1508;
                    break;                    
            case "14":
                precio = 1002;
                break;       
                                                                                 
        }
        let cantidad =parseInt(prompt("INGRESE LA CANTIDAD:"))
        cart.push({producto, cantidad, precio})
        console.log(cart)
    }else{
        alert("no tenemos ese producto")
    }
    comprarEnTienda = prompt("DESEA AGREGAR MAS PRODUCTOS EN EL CARRITO? si/no.")
    while(comprarEnTienda != "si" && comprarEnTienda != "no"){
        comprarEnTienda = prompt("DESEA AGREGAR MAS PRODUCTOS EN EL CARRITO? si/no.")
    }
    while(comprarEnTienda === "no"){
        alert("GRACIAS POR COMPRAR EN FRANPAPEL SRL")
        cart.forEach((carritoCerrado) => {
            console.log(`ID) ${carritoCerrado.producto} LLEVA X ${carritoCerrado.cantidad} UNIDADES || SUBTOTAL $${carritoCerrado.cantidad * carritoCerrado.precio} AR$`)
        })
        break
    }
}
 const total = cart.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
 console.log(`LA SUMA DE SU CARRITO ES DE: $${total} AR$`)
} 


// MENU BUSCAR PRODUCTOS
function buscarProductos(){
    let buscarProducto = prompt("Codigo del Articulo")
    let buscar = tienda.filter((Producto)=>Producto.codigo == buscarProducto)
    if(buscar.length == 0){
        alert("El producto deseado no se encuentra en la Tienda")
    }else{
        alert("Resultado:")
        for(let productoEncontrado of buscar){
            productoEncontrado.mostrarBusqueda()
        }
    }
}


//MENU POP UP
function elementosMenu(){

    let opcion = parseInt(prompt(`Bienvenido al menu de FRANPAPEL SRL,:
                        1 - Ver articulos de la tienda(POR CONSOLA)
                        2 - Buscar Productos por Codigo
                        3 - Comprar productos
                        0 - Para salir
                        `))
    menu(opcion)
}




// MENU ELECCIÓN 
function menu(opciones){
    switch(opciones){
        case 0:
            salir = true
            alert(`Muchas gracias por su visita!!`)
        break    
        case 1:
            mostrarTienda(tienda)
      	break 
   	    case 2: 
           buscarProductos()  
      	break 
   	    case 3: 
           comprarProductos()
      	break
        case 4: 
        
      	break
   	    default: 
      	alert(`Por favor ingrese una opción correcta`)
    }
}


//MENU
let salir 
while(salir != true){
    elementosMenu()
}