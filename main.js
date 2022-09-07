let productos = [];
let precios = [];
let sumaTotal = 0;
let respuesta;

do {
    let producto = prompt("Escriba el nombre del producto: ");
    let precio = parseInt(prompt("Escriba el valor del producto: "));

    if (isNaN(producto)) {
        if (typeof precio !== 'number' || isNaN(precio)) {
            console.log("El valor del producto no es válido.");
        } else {
            productos.push(producto);
            precios.push(precio);
            sumaTotal = (sumaTotal + precio);
            console.log(productos, precios);
        }
    } 
    else {
        console.log("El nombre del producto no es válido o no se ingresaron datos.");
    }
    do {
        respuesta = prompt("¿Desea agregar un producto más? Si / No").toLowerCase()
    } while (respuesta != "si" && respuesta != "no")
} while (respuesta != "no")

let iva = (a, b) => a * b;

if (sumaTotal > 0) {
    console.log("Estos son los productos que usted ha comprado: " + productos);
    console.log("El valor de su compra es de: $" + iva(1.21, sumaTotal) + " con iva incluido.");
} else {
    console.log("Tu carrito esta vacío.");
}

