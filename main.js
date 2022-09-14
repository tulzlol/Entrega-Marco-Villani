class Clientes {
    constructor(usuario, apellido, dni) {
        this.usuario = usuario;
        this.apellido = apellido;
        this.dni = dni;
    }
}

const dataClientes = [];


// FUNCION PARA NUEVO USUARIO

function nuevaCuenta() {
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    let dni = parseInt(prompt("Ingrese su número de dni: "));
    let cliente = new Clientes(nombre, apellido, dni);
    dataClientes.push(cliente);
    console.log(dataClientes);
    menu();
}

// FUNCION PARA BORRAR USUARIO 

function borrarCuenta() {
    let dni = parseInt(prompt("Ingrese su dni: "));
    let cliente = dataClientes.find(cliente => cliente.dni === dni);
    let index = dataClientes.indexOf(cliente);
    dataClientes.splice(index, 1);
    console.log(dataClientes);
    menu();
}

// FUNCIÓN PARA COMPRAR

let productos = [];
let precios = [];
let sumaTotal = 0;
let respuesta;
let iva = (a, b) => a * b;


function comprar() {
    respuesta = "";
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
    if (sumaTotal > 0) {
        console.log("Estos son los productos que usted ha comprado: " + productos);
        console.log("El valor de su compra es de: $" + iva(1.21, sumaTotal) + " con iva incluido.");
    } else {
        console.log("Tu carrito esta vacío.");
    }
    menu();
}



// FUNCIÓN PARA SALIR 

function salir() {
    alert("Gracias por visitar El Antojo bakery.");
}


// FUNCION PARA MENU

function menu() {
    alert("Bienvenido a El Antojo Bakery");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Nueva cuenta \n 2) Borrar cuenta \n 3) Agregar productos \n 4) Salir"));
    switch (opcion) {
        case 1:
            nuevaCuenta();
            break;
        case 2:
            borrarCuenta();
            break;
        case 3:
            comprar();
            break;
        case 4:
            break;
        default:
            alert("Opción inválida");
            break;
    }
}
menu();