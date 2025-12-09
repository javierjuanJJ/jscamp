const boton = document.querySelector('#boton-importante')

let aplicado = false

boton.addEventListener('click', function () {
  if (aplicado) {
    boton.textContent = 'Aplicar a empleo'
    aplicado = false
  } else {
    boton.textContent = '¡Aplicado!'
    aplicado = true
  }
})