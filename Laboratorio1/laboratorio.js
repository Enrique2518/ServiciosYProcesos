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

//Ejercicio 7
if(num1 > num2){
    console.log("El numero " + num1 + " es mayor que el " + num2 + ".")
}else{
    console.log("El numero " + num1 + " es menor que el " + num2 + ".")
}

//Ejercicio 8
for (let index = 1; index < 11; index++) {
    console.log(index)
}

//Ejercicio 9
let nombres = ["Enrique", "Lluis"];
for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index])
}

//Ejercicio10
var numeroPar = 2
while (numeroPar <= 20) {
    console.log(numeroPar);
    numeroPar += 2;
}

//Ejercicio11
function sumaDeValores(a, b) {
    return a + b;
}
console.log(sumaDeValores(2,4))

//Ejercicio 12
function trobarMaxim(array) {    
    let maxim = array[0]; 
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxim) {
            maxim = array[i];
        }
    }
    
    return maxim;
}

console.log("Array [1, 5, 3, 9, 2]:", trobarMaxim([1, 5, 3, 9, 2]));

//Ejercicio 13
function trobarParells(array) {
    let contador = 0
    for (let index = 0; index < array.length; index++) {
        if (array[i] % 2 === 0) {
            contador++;
        }
    }
    return contador;
}

console.log("Array [1, 5, 3, 9, 2]:", trobarParells([1, 5, 3, 9, 2]));

//Ejercicio14
function palabraAlreves(text) {
    let textInver = ''

    for (let index = text.length; index >= 0; index--) {
        textInver += text[i]
    }

    return textInver;
}

console.log("Palabra al reves: " + palabraAlreves("Mi nombre"))

//Ejercicio 15
function esPrimer(n) {

    if (n <= 1) {
        return false;
    }
    
    if (n === 2) {
        return true;
    }
    
    if (n % 2 === 0) {
        return false;
    }
    
    const limit = Math.sqrt(n);
    for (let i = 3; i <= limit; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
}

console.log("El numero 7 es primer: " + esPrimer(7))
console.log("El numero 8 es primer: " + esPrimer(8))


//Ejercicio16
function filtraParells(array) {
    const parells = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            parells.push(array[i]);
        }
    }
    
    return parells;
}

console.log("Array [1, 4, 7, 8, 25]:", filtraParells([1, 4, 7, 8, 25]));