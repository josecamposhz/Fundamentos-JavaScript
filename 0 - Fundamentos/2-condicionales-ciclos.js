const edad = 15;

if (edad >= 18) {
    console.log("Mayor de edad")
} else {
    console.log("Menor de edad")
}

// Valores falsos
// undefined
// null
// 0
// NaN
// la cadena vacía ("")

if (!undefined) console.log(undefined);
if (!null) console.log(null);
if (!0) console.log(0);
if (!NaN) console.log(NaN);
if (!"") console.log("Cadena vacía");

// Switch
var fechaActual = new Date()
var dia = fechaActual.getDate()
var mes = fechaActual.getMonth() + 1 // Los meses van del  0 al 11
var año = fechaActual.getFullYear()
console.log(dia + "/" + mes + "/" + año)
// let consultarFecha = confirm('¿Deseas saber la fecha actual?');
// alert(fechaActual);
if (consultarFecha) {
    switch (mes) {
        case 1:
            alert("Enero")
            break;
        case 2:
            alert("Enero")
            break;
        default:
            alert("No es enero ni febrero")
            break;
    }
}

// Ciclos - Bucles

for (let step = 0; step < 5; step++) {
    console.log('Paso ' + step);
}

let n = 0;
let x = 0;
// 1 - 3 - 6 - 10 - 15 - 21
while (n < 3) {
    n++;
    x += n;
}
console.log('n: ' + n, 'x: ' + x);

// break - continue
const ANIMALES = ["Perro", "Gato", "Raton"];
for (let i = 0; i < ANIMALES.length; i++) {
    if (i === 1) {
        // break;
        continue;
    }
    console.log(ANIMALES[i]);
}

for (let i in ANIMALES) {
    console.log(i);
}

for (let i of ANIMALES) {
    console.log(i);
}