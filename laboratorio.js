//Ex.3
console.log("Hola Mundo")

//Ex.4
let palabra1 = "Hola";
const palabra2 = "Adiós"
console.log(palabra1 + "es para saludar y " + palabra2 + " es para despedirse")
let nombre = "Enrique"
const edad = 25
console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`)

//Ex.5
var nom = "Toni"
var edat = 8
var estudiante = true
var vacio = null
console.log(nom + " " + edat + " " + estudiante + " " + vacio + " ")

//Ex.6
var num1 = 8;
var num2 = 4;
var suma = num1 + num2
console.log("Suma:" +suma)
var resta = num1 - num2
console.log("Resta: " + resta)
var multiplicacion = num1 * num2
console.log("Multiplicación: " + multiplicacion)
var division = num1 / num2
console.log("División: " + division)
var resto = num1 % num2
console.log("Resto: " + resto)

var igualAbs = num1 == num2
console.log("Igualdad abstracta : " + igualAbs)
var igualEst = num1 === num2
console.log("Igualdad estricta : " + igualEst)
var desigualdad = num1 != num2
console.log("Igualdad estricta : " + desigualdad)
var desigualdadEstricta = num1 !== num2
console.log("Igualdad estricta : " + desigualdadEstricta)
var menorQue = num1 < num2
console.log("Menor que : " + menorQue)
var mayorQue = num1 > num2
console.log("Mayor que : " + mayorQue)

if(num1 > num2){
    console.log("El numero " + num1 + " es mayor que el " + num2 + ".")
}else{
    console.log("El numero " + num1 + " es menor que el " + num2 + ".")
}

for (let index = 1; index < 11; index++) {
    console.log(index)
}

let nombres = ["Enrique", "Lluis"];
for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index])
}

var numeroPar = 2
while (numeroPar <= 20) {
    console.log(numeroPar);
    numeroPar += 2;
}

function suma(a, b) {
    return a + b;
}

console.log(suma(5, 3));