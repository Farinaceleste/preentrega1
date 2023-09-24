alert("Bienvenido al simulador de créditos hipotecarios del Banco Isla");

let nombreUsuario = prompt("Ingrese su nombre ");
alert("Bienvenido " + nombreUsuario);

function pedirMonto() {
    let montoSolicitado;
    do {
        montoSolicitado = parseInt(prompt("Ingrese el monto que desea solicitar"));
        if (montoSolicitado < 1000000 || montoSolicitado > 6000000) {
            alert("El valor del crédito debe ser mayor a $1.000.000 y $6.000.000")
        }
    } while (montoSolicitado < 1000000 || montoSolicitado > 6000000);
    return montoSolicitado;
}

function pedirValorPropiedad() {
    let valorPropiedad;

    do {
        valorPropiedad = parseInt(prompt("Ingrese el valor de la propiedad"));
        if (valorPropiedad > 8000000) {
            alert("El monto de la propiedad no puede superar el 75% del crédito")
        }
    } while (valorPropiedad > 8000000);
    return valorPropiedad;
}

function pedirCantidadCuotas() {
    let cantCuotas;

    do {
        cantCuotas = parseInt(prompt("Ingrese la cantidad de cuotas deseadas"));
        if (cantCuotas < 12 || cantCuotas > 60) {
            alert("Cantidad de cuotas invalidas. Deben ser entre 12 y 60")
        }
    } while (cantCuotas < 12 || cantCuotas > 60);
    return cantCuotas;
}

function calcularTotal(montoSolicitado, valorPropiedad, cantCuotas) {
    if (cantCuotas >= 12 && cantCuotas <= 60) {
        alert("El valor de la cuota es: $" + ((montoSolicitado + (montoSolicitado * 0.32)) / cantCuotas))
    }
}



alert("hola "+prompt("ingrese su nombre"));





function saludar (nombre){
    alert("hola "+nombre);
}

let miNombre=prompt("ingrese su nombre");
saludar(miNombre);




function saludar (nombre){
    alert("hola "+nombre);
}
saludar("Eze");




let montoSolicitado = pedirMonto();
let valorPropiedad = pedirValorPropiedad();
let cantCuotas = pedirCantidadCuotas();

calcularTotal(montoSolicitado, valorPropiedad, cantCuotas);