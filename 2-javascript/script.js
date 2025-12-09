const boton = document.querySelector('#boton-importante')

boton.addEventListener('click', function () {
  boton.textContent = '¡Aplicado!'
  boton.style.backgroundColor = '#22c55e'

  // Deshabilitar el botón para que no se pueda volver a hacer click
  boton.disabled = true
})