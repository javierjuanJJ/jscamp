const boton = document.querySelector('#boton-importante')

boton.addEventListener('click', function () {
  boton.textContent = '¡Aplicado!'
  boton.style.backgroundColor = '#22c55e'
  boton.style.color = 'white'
  boton.style.border = 'none'
  boton.style.cursor = 'not-allowed'
})