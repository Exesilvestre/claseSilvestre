alert('Este es un programa para el calculo de su sueldo neto');

const inicio = () => {
    let nombre = prompt('Ingrese su nombre: ')
    alert('Bienvenido a nuestro sitio web ' + nombre)
}

const sueldoNeto = (bruto, comision, impuesto) => {
    alert('El impuesto sobre su sueldo bruto es: '+ impuesto)
    let sueldoNetoSinComision = bruto - impuesto
    alert('Su sueldo neto sin comisión es: ' + sueldoNetoSinComision)
    let sueldoNeto = sueldoNetoSinComision + comision
    alert('Su sueldo neto es: ' + sueldoNeto)
}
inicio()
let opcion = 'si'
while(opcion == 'si' || opcion == 'SI'){
    let sueldoBruto = parseFloat(prompt('Ingrese su sueldo en bruto: '))
    let comisiones = parseFloat(prompt('Ingrese sus comisiones'))
    let impuesto = sueldoBruto * 0.05
    sueldoNeto(sueldoBruto, comisiones, impuesto)
    opcion = prompt('Si desea calcular otro sueldo ingrese "si", en caso contrario escriba "no": ')
}

