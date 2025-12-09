const boton = document.querySelector('#boton-importante')

boton.addEventListener('click', function () {
  boton.textContent = '¡Aplicado!'

  // Cambiar el color de fondo
  boton.style.backgroundColor = '#22c55e' // Verde
})