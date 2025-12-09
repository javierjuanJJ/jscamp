const container = document.querySelector('#container')
const boton = document.querySelector('#boton')

// Evento en el contenedor
container.addEventListener('click', function () {
  console.log('2. Click en el container')
})

// Evento en el botón
boton.addEventListener('click', function () {
  console.log('1. Click en el botón')
})