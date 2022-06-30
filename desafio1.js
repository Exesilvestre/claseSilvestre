let ultimoMundial = parseInt(prompt('Ingres del año del último mundial de futbol que haya ocurrido: '))
let proximoMundial = ultimoMundial
alert ('Los proximos 10 mundiales seran en los siguientes años')
for (let i = 0; i <= 9; i++) {
    proximoMundial = proximoMundial + 4
    alert('El siguiente es: ' + proximoMundial)
}
aler('Esos fueron los años de los proximos 10 mundiales de futbol')