//Clase consturctora 
class Producto {
    constructor(id, descripcion, codigo, precio, imagen, categoria){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.descripcion = descripcion,
        this.codigo = codigo,
        this.precio = precio
        this.imagen = imagen
        this.categoria = categoria

    }
    //métodos
    mostrarArticulos(){
        console.log(  `ID: ${this.id}, Descripción: ${this.descripcion}, El código es ${this.codigo}, Precio es ${this.precio}`)
    }
    // mostrarBusqueda(){
    //     alert(` ID ${this.id} \n Descripción ${this.descripcion} \n El código es ${this.codigo} \n Precio es ${this.precio}`)
    // }
}//Instanciación de objetos -- respetamos orden y cantidad de atributos

const producto1 = new Producto(1,"AGENDA MOOVING 15X21 SEMANAL BLACK","1819862",3295,"agenda-mooving-15x21-semanal-black-1404145.jpg","Agendas")
const producto2 = new Producto(2,"AGENDA MOOVING 14X20 2DXP HARRY POTTER DIARIA","1819854",3068,"agenda-mooving-14x20-2dxp-harry-potter-diaria-1404222.jpg","Agendas Disney")
const producto3 = new Producto(3,"AGENDA MOOVING 14X20 2DXP  MICKEY 2D X PAGINA","1819864",2841,"agenda-mooving-14x20-2dxp-mickey-2d-x-pagina-1404121.jpg","Agendas Disney")
const producto4 = new Producto(4,"AGENDA MOOVING 14X20 2DXP MINNIE 2D X PAGINA","1819866",2841,"agenda-mooving-14x20-2dxp-minnie-2d-x-pagina-1404131.jpg","Agendas Disney")
const producto5 = new Producto(5,"AGENDA MOOVING 15X21 S.V. COLORING LETTERING","1819865",2045,"agenda-mooving-15x21-semanal-coloring-lettering-1404151.jpg","Agendas")
const producto6 = new Producto(6,"AGENDA MOOVING MAN 15X21 DIARIA","1819871",2272,"agenda-mooving-man-15x21-diaria-1405129.jpg","Agendas")
const producto7 = new Producto(7,"AGENDA MOOVING 16X22 - DIARIA BEAUTY","1819844",4205,"agenda-mooving-16x22-diaria-beauty-1417134.jpg","Agendas")
const producto8 = new Producto(8,"AGENDA MOOVING 14X20 DIARIA DISNEY 100 AÑOS","1819867",4534,"agenda-mooving-14x20-diaria-disney-100-aniversario-1418118.jpg","Agendas Disney")
const producto9 = new Producto(9,"MARCADOR MAPED PASTEL X 10","1284004",553,"marcador-maped-pastel-x-10.jpg","Marcadores")
const producto10 = new Producto(10,"LAPIZ COLOR MAPED  X12 LARGO PASTEL CJX12","1285008",503,"lapiz-color-maped-x12-largo-pastel.jpg","Lapices de Color")
const producto11 = new Producto(11,"CRAYON MAPED GEL X 12","1285033",1508,"lapiz-color-maped-gel-x-12.jpg","Crayones")
const producto12 = new Producto(12,"LAPIZ NEGRO MAPED  SIN GOMA TUBO X 72","1285108",2089,"lapiz-negro-maped-sin-goma-tubo-x-72.jpg","Lapices Negros")
const producto13 = new Producto(13,"LAPIZ COLOR FILGO SUPERSOFT X 24","3071129",1508,"lapiz-color-filgo-supersoft-24.jpg","Lapices de Color")
const producto14 = new Producto(14,"MARCADOR MAPED PUNTA PINCEL  X10","1284024",1002,"marcador-maped-punta-pincel-x10.jpg","Marcadores")

//
const tienda = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11,producto12,producto13,producto14]

//
let divProductosLibreria = document.getElementById("productosLibreria")
tienda.forEach((producto)=>{
    let Productos = document.createElement("div")
    Productos.innerHTML = `<div id="${producto.id}" class="tarjeta2">
                                <img src="../assets/img/${producto.imagen}" style="height: 180px;" alt="${producto.descripcion}">
                                <h5>${producto.descripcion}</h5>
                                <span>$${producto.precio} IVA inc*</span>
                                <small>cod: ${producto.codigo}</small>
                                <div>
                                    <input type="number" value="1"> <input type="button" id="agregarBtnid${producto.id}" value="Agregar">
                                </div>
                            </div>`        

    divProductosLibreria.append(Productos)                            
})




//BUSCADOR
const textoBuscar = document.querySelector("#textoBuscar")
const botonBuscar = document.querySelector("#botonBuscar")
const resultadoBusqueda = document.querySelector("#productosLibreria")

const buscarProductos = ()=>{
    console.log(textoBuscar.value)
    
    productosLibreria.innerHTML = ""

    const textoProducto = textoBuscar.value.toLowerCase();
    for (let producto of tienda){
        let descripcion = producto.descripcion.toLowerCase();
        if(descripcion.indexOf(textoProducto) !== -1){
            resultadoBusqueda.innerHTML += `<div id="${producto.id}" class="tarjeta2">
                                            <img src="../assets/img/${producto.imagen}" style="height: 180px;" alt="${producto.descripcion}">
                                            <h5>${producto.descripcion}</h5>
                                            <span>$${producto.precio} IVA inc*</span>
                                            <small>cod: ${producto.codigo}</small>
                                            <div>
                                                <input type="number" value="1"> <input type="button" id="agregarBtnid${producto.id}" value="Agregar">
                                            </div>
                                    </div>`
        }  
    }
    if(resultadoBusqueda.innerHTML === ""){
        console.log("Producto no Econtrado")
    }
}
botonBuscar.addEventListener("click" , buscarProductos)
//VA BUSCANDO A MEDIDA QUE VAMOS ESCRIBIENDO EN EL BUSCADOR
textoBuscar.addEventListener("keyup", buscarProductos)
buscarProductos()


