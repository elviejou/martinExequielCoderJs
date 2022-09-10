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
    let alumnoEncontrado = listaAlumnos.find((alumno)=> alumno.nombreAlumno.toLowerCase() == buscarAlumno.toLowerCase())
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