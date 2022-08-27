//CLASE 3 -- CICLOS (bucle, ciclos, loop, iteraciones)
//hacer algo repetidamente por conteo o por condicion

// console.log(0,1,2,3,4,5,6,7,8,9,10)
// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10) <<>

//FOR (DESDE; HASTA; ACTUALIZACION)
//se ejecuta hasta que se finalize la iteracion
//i++ = (i=i+1) i=index

// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }
// for (let e = 10; e >= 0; e--){
//     console.log(e)
// }

//
// let n = parseInt(prompt("Ingrese un numero para ver su tabla"))
// for (let i = 0; i <= 10; i++) 
// {
//     console.log(`${n} x ${i} = ${n*i}`)
// }

// let n = parseInt(prompt("Ingrese e numero hasta que tabla quiere ver"))
// for (let i = 0; i <= 10; i++) 
// {
//     console.log(`${n} x ${i} = ${n*i}`)
// }

//WHILE (MIENTRAS TANTO SE CUMPLA LA CONDICION) 0 O MUCHAS VECES
//WHILE (REPETIR)


//DO WHILE (MIENTRAS TANTO SE CUMPLA LA CONDICION) 1 O MUCHAS VECES

//do (REPETIR) SI O SI UNA VEZ O MAS
// let condicion = true
//Adivinanza
// do {
//     let adivina = prompt("Cuanto es la mitas de 2 + 2")
//     if(adivina == "3"){
//         console.log("Respuesta Correcta")
//         condicion=false
//     }
//     else{
//         console.log("Respuesta Incorrecta, intente devuelta")
        
//     }

// }while(condicion)
// } while(condicion && condicion2 || condicion3 etc)


//WHILE (REPETIR)

    // let respuesta = prompt("Queres ingresar un libro?")
    // while(respuesta == "si"){
    //     let autor = prompt("Ingrese Autor")
    //     let titulo = prompt("Ingrese Titulo")
    //     console.log(`El autor es ${autor} y el titulo es ${titulo}`)
    //     respuesta = prompt("Queres ingresar otro libro?")
    // }



//SWITCH CONDICIONAL 
//switch (numero) condicional  case "valor": break 
// let color = prompt("Ingrese Color")
// switch (color){
//     case "rojo":
//     console.log(`su color ${color} y es un color primario`)
//     break
//     case "azul":
//     console.log(`su color ${color} y es un color primario`)
//     break
//     case "amarillo":
//     console.log(`su color ${color} y es un color primario`)
//     break
//     default:
//     console.log(`su color ${color} y NO es un color primario`)
   
// }


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








        
   





















