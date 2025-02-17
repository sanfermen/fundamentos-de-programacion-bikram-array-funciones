// Variables

let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

// Funciones

function suma(num1, num2) {
	return num1 + num2;
}

function potenciacion(num1, num2) {
	return num1**num2;
}

function separarPalabras(string) {
	return string.split(' ');
}

function repetirString(string, num) {
	return string.repeat(num);
}

function esPrimo(num) {
	if (num < 2) {
		return false;
	}
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

// Mezclando arrays y funciones
function ordenarArray(arrayNum) {
	return arrayNum.sort(function (a, b) {
		return a - b;
	});
}

function obtenerPares(arrayNum) {
	return arrayNum.filter((num) => num % 2 === 0);
}

function pintarArray(arr) {
	let arrFinal = arr[0].toString();
	for (let i = 1; i < arr.length; i++) {
		arrFinal += ', ' + arr[i].toString();
	}
	return '[' + arrFinal + ']';
}

function arrayMapi(arr, func) {
	let arrayFinal = [];
	for (let i = 0; i < arr.length; i++) {
		arrayFinal[i] = func(arr[i]);
	}
	return arrayFinal;
}

function eliminarDuplicados(arr) {
	let arrayFinal = [];
	for (let i = 0; i < arr.length; i++) {
		if (!arrayFinal.includes(arr[i])) {
			arrayFinal.push(arr[i]);
		}
	}
	return arrayFinal;
}

// Arrays
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
let holaMundo = ['Hola', 'Mundo'];
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

// Funciones
function multiplicacion(num1, num2) {
	return num1 * num2;
}

function division(num1, num2) {
	return num1 / num2;
}

function esPar(num) {
	if (num % 2 == 0) {
		return true;
	} else {
		return false;
	}
}

function resta(num1, num2) {
	return num1 - num2;
}

let arrayFunciones = [suma, resta, multiplicacion];

// Mezclando array y funciones

function ordenarArray2(arrnum) {
	return arrnum.sort(function(a, b) {
		return b - a;
	})
}

function obtenerImpares(arrnum) {
	return arrnum.filter((num) => num % 2 !== 0);
}

function sumarArray(arrnum) {
	return arrnum.reduce((acc, curr) => acc + curr, 0);
}

function multiplicarArray(arrnum) {
	return arrnum.reduce((acc, curr) => acc * curr, 1);
}


