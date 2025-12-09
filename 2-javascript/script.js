// querySelector - Solo el primero
const primerBoton = document.querySelector('.button-apply-job')
primerBoton.addEventListener('click', function () {
  console.log('Solo funciona en el primer botón')
})

// querySelectorAll - Todos
const todosLosBotones = document.querySelectorAll('.button-apply-job')
todosLosBotones.forEach(function (boton) {
  boton.addEventListener('click', function () {
    console.log('Funciona en todos los botones')
  })
})