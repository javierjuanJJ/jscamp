const container = document.querySelector('#container')
const boton = document.querySelector('#boton')

container.addEventListener('click', function () {
  console.log('Click en container')
})

boton.addEventListener('click', function (event) {
  console.log('Click en botón')

  // Detener el bubbling
  event.stopPropagation()
})