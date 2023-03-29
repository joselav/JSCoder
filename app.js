let nombre = prompt("Bienvenido, ¿Cuál es su nombre?")
let numeroA = parseFloat(prompt("Ingrese un número"))
let numeroB = parseFloat(prompt("Ingrese otro número"))
let operacion = prompt("Ingrese aquí el símbolo de la operación que quiera realizar")
let resultado = 0
let multiploCinco = x => x * 5


//SUMA
function sumar(resultadoSuma){
    resultado = numeroA + numeroB;
    alert("El resultado de su operación es " + resultado + resultadoSuma)
}

//RESTA
function restar(resultadoResta){
    resultado = numeroA - numeroB;
    alert("El resultado de su operación es " + resultado + resultadoResta)
}

//MULTIPLO
function multiplicar(resultadoMultiplo){
    resultado = numeroA * numeroB;
    alert("El resultado de su operación es " + resultado + resultadoMultiplo)
    
}

//DIVISION
function divisar(resultadoDivision){
    resultado = numeroA / numeroB;
    alert("El resultado de su operación es " + resultado + resultadoDivision)
}

if (operacion === "+"){
    sumar(", y es una suma")
} else if (operacion === "-"){
    restar(", y es una resta")
} else if (operacion === "*"){
    multiplicar(", y es una multiplicacion")
} else if (operacion === "/"){
    divisar(", y es una división")
} else (
    alert("Lo sentimos, no es un símbolo matemático")
)

if (confirm("¿Quieres multiplicar tu resultado por cinco? Si dice que sí, el resultado se mostrara en la consola")  === true ) {
    let resultadoB = multiploCinco(resultado)
    console.log("El resultado de la multiplicacion es " + resultadoB + ". Gracias por su participación, " + nombre) 
} else {
    alert("¡Hasta luego!" + nombre)
}