class Producto {
    constructor (idProducto, nombre, precio, talle){
        this.idProducto = parseInt(idProducto)
        this.nombre = nombre
        this.precio = parseFloat(precio)
        this.talle = talle
    }
}

const cafeRegularS = new Producto(1, "Cafe regular", 150.00, "S")
const cafeRegularM = new Producto(1, "Cafe regular", 200.00, "M")
const cafeRegularL = new Producto(1, "Cafe regular", 300.00, "L")
const capuccinoS = new Producto(2, "Capuccino", 200.00, "S")
const capuccinoM = new Producto(2, "Capuccino", 250.00, "M")
const capuccinoL = new Producto(2, "Capuccino", 350.00, "L")
const macciatoS = new Producto(3, "Macciato", 200.00, "S")
const macciatoM = new Producto(3, "Macciato", 250.00, "M")
const macciatoL = new Producto(3, "Macciato", 350.00, "L")


let carrito = []
let totalCompra = 0
console.log("Bienvenido a coffee Shop")
let opcion = "si"
while(opcion == "si" || opcion == "SI"){
    let eleccion = parseInt(prompt("Ingrese el ID del producto que desea añadir al carrito (1:Cafe regular, 2:Capuccino, 3:Macciato) : "))
    let eleccionTamano = prompt("Ingrese el tamaño de su café (S:small, M:medium, L:large) : ")
    let cantidad = parseInt(prompt("Cuantas unidades desea?"))
    let productoActual = productoElegido(eleccion, eleccionTamano)
    console.log(productoActual)
    carrito.push(productoActual)
    console.log(carrito)
    totalCompra = totalCompra + (productoActual.precio * cantidad)
    console.log("El totsl de su compra hasta ahora es: " + totalCompra)
    opcion = prompt("Desea seguir comprando? (Escriba 'si' o 'no')? ")
}
console.log(carrito)
console.get 

function productoElegido(eleccionID, eleccionTamano){
    let productoActual
    if (eleccionID == 1){
        if (eleccionTamano == "S"){
            console.log("El producto que ha seleccionado es " + cafeRegularS.nombre + " y de tamaño " + cafeRegularS.talle)
            console.log("Su precio es: " + cafeRegularS.precio)
            productoActual = cafeRegularS
        }
        else if(eleccionTamano == "M"){
            console.log("El producto que ha seleccionado es " + cafeRegularM.nombre + " y de tamaño " + cafeRegularM.talle)
            console.log("Su precio es: " + cafeRegularM.precio)
            productoActual = cafeRegularM
         }   
        else if(eleccionTamano == "L"){
            console.log("El producto que ha seleccionado es " + cafeRegularL.nombre + " y de tamaño " + cafeRegularL.talle)
            console.log("Su precio es: " + cafeRegularL.precio)
            productoActual = cafeRegularL
        }
    }
    else if(eleccionID == 2){
        if (eleccionTamano == "S"){
            console.log("El producto que ha seleccionado es " + capuccinoS.nombre + " y de tamaño " + capuccinoS.talle)
            console.log("Su precio es: " + capuccinoS.precio)
            productoActual = capuccinoS
        }
        else if(eleccionTamano == "M"){
            console.log("El producto que ha seleccionado es " + capuccinoM.nombre + " y de tamaño " + capuccinoM.talle)
            console.log("Su precio es: " + capuccinoM.precio)
            productoActual = capuccinoM
         }   
        else if(eleccionTamano == "L"){
            console.log("El producto que ha seleccionado es " + capuccinoL.nombre + " y de tamaño " + capuccinoL.talle)
            console.log("Su precio es: " + capuccinoL.precio)
            productoActual = capuccinoL
        }
    }
    else if(eleccionID == 3){
        if (eleccionTamano == "S"){
            console.log("El producto que ha seleccionado es " + macciatoS.nombre + " y de tamaño " + macciatoS.talle)
            console.log("Su precio es: " + macciatoS.precio)
            productoActual = macciatoS
        }
        else if(eleccionTamano == "M"){
            console.log("El producto que ha seleccionado es " + macciatoM.nombre + " y de tamaño " + macciatoM.talle)
            console.log("Su precio es: " + macciatoM.precio)
            productoActual = macciatoM
         }   
        else if(eleccionTamano == "L"){
            console.log("El producto que ha seleccionado es " + macciatoL.nombre + " y de tamaño " + macciatoL.talle)
            console.log("Su precio es: " + macciatoL.precio)
            productoActual = macciatoL
        }
    }
    return productoActual
}