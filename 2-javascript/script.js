const botones = document.querySelectorAll('.button-apply-job')

botones.forEach(function (boton) {
  boton.addEventListener('click', function () {
    boton.textContent = '¡Aplicado!'
    boton.disabled = true
  })
})