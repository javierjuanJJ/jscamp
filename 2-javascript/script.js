console.log('Inicio: Cargando el script')

const boton = document.querySelector('#boton-importante')
console.log('Botón encontrado:', boton)

boton.addEventListener('click', function () {
  console.log('¡Hiciste click!')
})

console.log('Fin: Script cargado, esperando eventos')