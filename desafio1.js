alert("Bienvenidos al programa de Docentes por Materia. \n El mismo muestra el nombre de la materia, \n alumno con la nota mas alta")
let materiaAlumnos = prompt("Por favor seleccione la materia para ingresar la nota: \n 1 - MATEMÁTICA \n 2 - HISTORIA \n 3 - FISICA")
let cantidadAlumnos = prompt("Ingrese la cantidad de Alumnos que desea evaluar")
let mayorNotaAlumno = 0
let nombreAlumnoMayorNota
while (materiaAlumnos == "1" || materiaAlumnos == "2" || materiaAlumnos == 3 && cantidadAlumnos > "3"){

    for (let i = cantidadAlumnos; i > 0; i--){ 
        let nombreAlumno = prompt("Ingrese el nombre del alumno")
        let notaAlumno = prompt("Ingrese la nota del alumno")

            if ((nombreAlumno != nombreAlumnoMayorNota) && (notaAlumno > mayorNotaAlumno)){
                mayorNotaAlumno = notaAlumno
                nombreAlumnoMayorNota = nombreAlumno
            }
            materiaAlumnos = "0"
    }
    if (materiaAlumnos = 1){
            materiaAlumnos = "Matemática"
        }
        else if (materiaAlumnos = 2){
            materiaAlumnos = "Historia"
        }
        else if (materiaAlumnos = 3){
            materiaAlumnos = "Física"
        }
    alert(`La materia elegida es ${materiaAlumnos} La nota mas alta es ${mayorNotaAlumno} y corresponde al alumno ${nombreAlumnoMayorNota}`)    
}








        
   





















