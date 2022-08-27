alert("Bienvenidos al programa para saber quien es el mas NERD. \n  \nEl mismo muestra el nombre de la materia, \nel nombre del alumno con la nota mas alta \ny la nota que sacó en el examen")
let materiaAlumnos = prompt("Por favor seleccione la materia para ingresar la nota: \n 1 - MATEMÁTICA \n 2 - HISTORIA \n 3 - FISICA")
let mayorNotaAlumno = 0
let nombreAlumnoMayorNota
while (materiaAlumnos == "1" || materiaAlumnos == "2" || materiaAlumnos == "3"){
    let cantidadAlumnos = prompt("Ingrese la cantidad de Alumnos que desea evaluar")
    for (let i = cantidadAlumnos; i > 0; i--){ 

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

    alert(`La materia elegida es ${materiaAlumnos}. \n La nota mas alta es ${mayorNotaAlumno}. \n Y el premio al mas NERD es para ${nombreAlumnoMayorNota}`)    
}








        
   





















