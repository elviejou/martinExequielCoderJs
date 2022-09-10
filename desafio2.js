//CLASE CONSTRUCTORA
const elMasNerd [materiaAlumnos,cantidadDeNotas,nombreAlumno,notaAlumno];

function incializar(){
    let ingresarNotas = confirm("Desea ejecutal el programa El mas Nerd")
        while(ingresarNotas){
            
        }


}


//FUNCION MATERIA ELEGIDA
function materiaElegida(){  
    let materiaAlumnos = parseInt(prompt("Por favor seleccione la materia para ingresar la nota: \n 1 - MATEMÁTICA \n 2 - HISTORIA \n 3 - FISICA"))    
    if (materiaAlumnos == 1){
        materiaAlumnos = "Matemática"
    }
    else if (materiaAlumnos == 2){
        materiaAlumnos = "Historia"
    }
    else if (materiaAlumnos == 3){
        materiaAlumnos = "Física"
    }
    return (materiaAlumnos)
   
    }
//FUNCION NOTA MAS ALTA   
function notaMasAlta(){  
    let nombreAlumno = prompt("Ingrese el nombre del alumno")
    let notaAlumno = prompt("Ingrese la nota del alumno")
    if ((nombreAlumno != nombreAlumnoMayorNota) && (notaAlumno > mayorNotaAlumno)){
                mayorNotaAlumno = notaAlumno
                nombreAlumnoMayorNota = nombreAlumno
            }
            if ((nombreAlumno = nombreAlumnoMayorNota) && (notaAlumno > mayorNotaAlumno)){
                mayorNotaAlumno = notaAlumno
                nombreAlumnoMayorNota = nombreAlumno
            }
            
    return (notaAlumno, nombreAlumnoMayorNota)
    }

    //FUNCION CANTIDAD DE NOTAS
    function cantidadDeNotas(){
        let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos qe desea evaluar"))
        return cantidadAlumnos
    }


//CODIGO

alert("Bienvenidos al programa para saber quien es el mas NERD. \n  \nEl mismo muestra el nombre de la materia, \nel nombre del alumno con la nota mas alta \ny la nota que sacó en el examen")
let materiaAlumnos = materiaElegida()
let cantidadAlumnos = cantidadDeNotas()
let mayorNotaAlumno = 0
let nombreAlumnoMayorNota
    for (let i = cantidadAlumnos; i > 0; i--){ 
        notaMasAlta()

    }
   alert(`La materia elegida es ${materiaAlumnos}. \n La nota mas alta es ${mayorNotaAlumno}. \n Y el premio al mas NERD es para ${nombreAlumnoMayorNota}`)    











        
   







