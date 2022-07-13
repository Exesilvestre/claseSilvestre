class Producto {
    constructor (cantidad, nombre, precio, tamaño, subtotalCompras){
        this.cantidad = parseInt(cantidad)
        this.nombre = nombre
        this.precio = parseFloat(precio)
        this.tamaño = tamaño
        this.subtotal = subtotalCompras
    }
}

let productos = [
{id: 11, nombre: "Cafe regular", precio: 150.00, tamaño: "S"},
{id: 12, nombre: "Cafe regular", precio: 200.00, tamaño: "M"},
{id: 13, nombre: "Cafe regular", precio: 300.00, tamaño: "L"},
{id: 21, nombre: "Capuccino", precio: 200.00, tamaño: "S"},
{id: 22, nombre: "Capuccino", precio: 250.00, tamaño: "M"},
{id: 23, nombre: "Capuccino", precio: 350.00, tamaño: "L"},
{id: 31, nombre: "Macciato", precio: 200.00, tamaño: "S"},
{id: 32, nombre: "Macciato", precio: 250.00, tamaño: "M"},
{id: 33, nombre: "Macciato", precio: 350.00, tamaño: "L"},
];

let carrito = []
let subtotalCompras;
let totalCompra = 0
let compra = new Producto()
let compraFinal = []
let cantidad = 0
console.log("Bienvenido a coffee Shop")

function buscar(productos,eleccion){
    return carrito = productos.filter((objeto) => objeto.id == parseInt(eleccion))
}

function carritoFinal(cantidad, carrito){
    carrito.forEach(element =>{
        subtotalCompras = element.precio * cantidad
        compra = new Producto(cantidad, element.nombre, element.precio, element.tamaño, subtotalCompras)
        compraFinal.push(compra)
    })    
}

function listaMenu(productos){
    let lista = "";
    for (const producto of productos) {
        lista += "id: "+ producto.id + " nombre: "+ producto.nombre + " precio: " + producto.precio + " tamaño: " + producto.tamaño + "\n"
    }
    return lista
}

for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    let eleccion = parseInt(prompt(listaMenu(productos)+ "\n 0 - salir"))
    buscar(productos, eleccion)
    if (eleccion != 0){
        let cantidad = parseInt(prompt("Cuantas unidades desea?"))
        carritoFinal(cantidad, carrito)
        totalCompra += subtotalCompras
        console.log("Su compra hasta ahora es de: " + totalCompra)
    }
    else{
        console.log("-FINALIZÓ SU COMPRA-")
        console.log(compraFinal)
        console.log("El total de su compra es: " + totalCompra)
        break
    }
}



productos.forEach(Producto => {
    let contenedor = document.createElement('div');
    contenedor.innerHTML = `<h3> ${Producto.nombre} ${Producto.tamaño}<h3/>
    <button> Comprar </button>
    `;
    document.body.appendChild(contenedor);
});
