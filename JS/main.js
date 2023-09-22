alert("Bienvenido al simulador de créditos hipotecarios del Banco Isla");

let nombreUsuario = prompt("Ingrese su nombre ");

alert("Bienvenido " + nombreUsuario);

let montoSolicitado = parseInt(prompt("Ingrese el monto que desea solicitar"));
while (montoSolicitado < 1000000 || montoSolicitado > 6000000) {
    alert("El monto ingresado no es válido")
    montoSolicitado = parseInt(prompt("El valor del crédito debe ser mayor a $1.000.000 y $6.000.000"));
}

let valorPropiedad = parseInt(prompt("Ingrese el valor de la propiedad"))
while (valorPropiedad > 8000000) {
    alert("El monto de la propiedad no puede superar el 75% del crédito")
    valorPropiedad = parseInt(prompt("Ingrese el valor de la propiedad, que debe ser entre $10.000.000 y $80.000.000"))
}
let cantCuotas = parseInt(prompt("Ingrese la cantidad de cuotas deseadas"))

while (cantCuotas < 12 || cantCuotas > 60) {
    alert("Cantidad de cuotas invalidas")
    cantCuotas = parseInt(prompt("Ingrese la cantidad de cuotas deseadas, entre 12 y 60"))
}

function total() {
    if (cantCuotas >= 12 && cantCuotas <= 60) {
        alert("El valor de la cuota es: " + ((montoSolicitado + (montoSolicitado * 0.32)) / cantCuotas))

    }
}
total()