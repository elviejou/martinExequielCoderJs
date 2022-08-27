


alert("Bienvenidos al programa de Docentes por Materia. \n El mismo muestra el alumno con la nota mas alta y \n el alumno con la nota mas baja")
let materiaAlumnos = prompt("Por favor seleccione la materia para ingresar la nota: \n 1 - MATEMÁTICA \n 2 - HISTORIA \n - 3-FISICA")
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
    alert(`La nota mas alta es ${mayorNotaAlumno} y corresponde al alumno ${nombreAlumnoMayorNota}`)    
}








        
   





















