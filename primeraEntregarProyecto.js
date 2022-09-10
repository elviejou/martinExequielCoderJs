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
        console.log(`El ID del producto es ${this.id},Descripción ${this.descripcion}, El código es ${this.codigo} y su precio es ${this.precio}`)
    }
}//Instanciación de objetos -- respetamos orden y cantidad de atributos

const producto1 = new Producto(1,"AGENDA MOOVING 15X21 SEMANAL BLACK","1819862","$3,295.83")
const producto2 = new Producto(2,"AGENDA MOOVING 14X20 2DXP HARRY POTTER DIARIA","1819854","$3,068.53")
const producto3 = new Producto(3,"AGENDA MOOVING 14X20 2DXP  MICKEY 2D X PAGINA","1819864","$2,841.23")
const producto4 = new Producto(4,"AGENDA MOOVING 14X20 2DXP MINNIE 2D X PAGINA","1819866","$2,841.23")
const producto5 = new Producto(5,"AGENDA MOOVING 15X21 S.V. COLORING LETTERING","1819865","$2,045.69")
const producto6 = new Producto(6,"AGENDA MOOVING MAN 15X21 DIARIA","1819871","$2,272.99")
const producto7 = new Producto(7,"AGENDA MOOVING 16X22 - DIARIA BEAUTY","1819844","$4,205.02")
const producto8 = new Producto(8,"AGENDA MOOVING 14X20 DIARIA DISNEY 100 AÑOS","1819867","$4,534.61")
const producto9 = new Producto(9,"MARCADOR MAPED PASTEL X 10","1284004","$553.80")
const producto10 = new Producto(10,"LAPIZ COLOR MAPED  X12 LARGO PASTEL CJX12","1285008","$503.70")
const producto11 = new Producto(11,"LAPIZ COLOR MAPED GEL X 12","1285033","$1,511.08")
const producto12 = new Producto(12,"LAPIZ NEGRO MAPED  SIN GOMA TUBO X 72","1285108","$2,089.40")
const producto13 = new Producto(13,"LAPIZ COLOR FILGO SUPERSOFT X 24","3071129","$1,508.05")
const producto14 = new Producto(14,"MARCADOR MAPED PUNTA PINCEL  X10","1284024","$1,002.85")

//
const tienda= []
tienda.push(producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11,producto12,producto13,producto14)
console.log(tienda)

//FUnction mostrarTienda() hecha con el método forEach (Opcion 1)
function mostrarTienda(array){
    alert("En la consola puede ver nuestro catálogo")
    console.log("Disfrute de nuestro catálogo:")
    array.forEach((Producto)=>{
        Producto.mostrarArticulos()
    })
}


