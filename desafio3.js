//CLASE CONSTRUCTORA
class Alumno {
    constructor(materiaAlumno,nombreAlumno, notaAlumno){
        //propiedades o atributos de nuestra clase
        this.materiaAlumno = materiaAlumno,
        this.nombreAlumno = nombreAlumno,
        this.notaAlumno = notaAlumno
    }
    mostrarNotas(){
        console.log(`La materia es ${this.materiaAlumno}, el alumno es ${this.nombreAlumno} y su nota fue ${this.notaAlumno}`)
    }

}
//INSTANCIA
const alumno1 = new Alumno ("Historia","Martin", 7)
const alumno2 = new Alumno ("Historia","Alejandra", 5)
const alumno3 = new Alumno ("Matemática", "Juliana", 6)
const alumno4 = new Alumno ("Física","Yoye", 9)

//
const listaAlumnos= []
listaAlumnos.push(alumno1,alumno2,alumno3,alumno4)



// Funciones:

// MENU MOSTRAR NOTAS ALUMNOS
function mostrarNotasAlumnos(array){
    console.log("Estas son las notas de los alumnos segun la materia:")
    array.forEach((alumno)=>{
        alumno.mostrarNotas()
        
    })
}


// MENU AGREGAR NOTAS
function nuevaNota(){
    let materiaIngresada = prompt("Por favor Ingrese la materia del Alumno")
    let notaIngresada =prompt("Por favor Ingrese la nota del Alumno")
    let alumnoIngresado = prompt("Por favor Ingrese el nombre del Alumno")
    let notaCreada = new Alumno (materiaIngresada,alumnoIngresado,notaIngresada)
    listaAlumnos.push(notaCreada)
}


// MENU BUSCAR ALUMNO Y VER LAS NTAS Y MATERIAS ASIGNADAS
function buscarNotaAlumno(){
    let buscarAlumno = prompt("Ingrese el nombre del Alumno")
    let alumnoEncontrado = listaAlumnos.find((alumno)=> alumno.nombreAlumno == buscarAlumno)
    if(alumnoEncontrado == "undefined"){
        alert("No se encuentra el Alumno")  
    }else{
        console.log(alumnoEncontrado)
    }
}


//MENU POP UP
function elementosMenu(){

    let opcion = parseInt(prompt(`Bienvenido al programa de notas, que desea hacer:
                        1 - Ver todas las Notas (POR CONSOLA)
                        2 - Agregar Notas
                        3 - Buscar alumno
                        0 - Para salir
                        `))
    menu(opcion)
}

mostrarNotasAlumnos(listaAlumnos)
// FUNCIONES DEL MENU
function menu(opciones){
    switch(opciones){
        case 0:
            salir = true
            alert(`Adios NERD!!`)
        break    
        case 1:
            mostrarNotasAlumnos(listaAlumnos)
      	break 
   	    case 2: 
           nuevaNota()      
      	break 
   	    case 3: 
           buscarNotaAlumno()
      	break
        case 4: 
   	    default: 
      	alert(`Por favor ingrese una opción correcta`)
    }
}

//LLAMAR AL MENU MIENTRAS LA OPCION INGRESADA NO SEA 0
let salir 
while(salir != true){
    elementosMenu()
}




const productos = [
    {nombre: "leche", precio: 150},
    {nombre: "galletitas" , precio: 100},
    {nombre: "cerveza" , precio: 230 },
    {nombre: "manteca" , precio: 200},
    {nombre: "azucar" , precio: 100},
    {nombre: "arroz" , precio: 150},
];
let carrito = []
let seleccion = prompt("Hola ¿desea comprar algo? si o no.")

while(seleccion.toLocaleLowerCase() != "si" && seleccion.toLocaleLowerCase() != "no"){
    alert("Por favor ingrese si o no")
    seleccion = prompt("Hola ¿Desea comprar algo? si o no.")
}

if(seleccion == "si"){
    alert("a continuacion se mostrara nuestro listado de productos")
    let todosLosProductos = productos.map((producto) => `${producto.nombre}  $${producto.precio}`);
    alert(todosLosProductos.join(" - "))
}else if(seleccion == "no"){
    alert("gracias, vuelva prontos")
}
while(seleccion != "no"){
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0
    
    if(producto == "leche" || producto == "galletitas" || producto == "cerveza" || producto == "manteca" || producto == "azucar" || producto == "arroz"){
        switch(producto){
            case "leche":
                precio = 150 ;
                break;
            case "galletitas":
                precio = 100;
                break;
            case "cerveza":
                precio = 230 ;
                break;
            case "manteca":
                precio = 200 ;
                break;
            case "azucar":
                precio = 100 ;
                break;
            case "arroz":
                precio = 150;
                break;
        }
        let unidades =parseInt(prompt("¿cuantas unidades quiere llevar?"))
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    }else{
        alert("no tenemos ese producto")
    }
    seleccion = prompt("desea seguir comprando? si o no.")
    while(seleccion.toLocaleLowerCase() != "si" && seleccion.toLocaleLowerCase() != "no"){
        alert("Por favor ingrese si o no")
        seleccion = prompt("desea seguir comprando? si o no.")
    }
    while(seleccion.toLocaleLowerCase() === "no"){
        alert("gacias, vuelva prontos")
        carrito.forEach((carritoFinal) => {
            console.log(`producto : ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar pro producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break
    }
}
 const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
 console.log(`el total a pagar es: ${total}`)