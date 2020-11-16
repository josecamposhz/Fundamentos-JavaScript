function sumar(num1, num2) {
    console.log(num1 + num2);
}

sumar(10, 20);

function sumarText(num1, num2) {
    return "La suma de " + num1 + " + " + num2 + " es " +  (num1 + num2);
}

const res = sumarText(5, 4);


// Función flecha
const multiplicacion = (num1, num2) => {
    return num1 + num2;
}

console.log(multiplicacion(5, 4));

// return
// 


// Template String
const areaCuadrado = (num) => {
    console.log('El área de un cuadrado de lado ' + num + ' es: ' + Math.pow(num, 2));
}

areaCuadrado(8);