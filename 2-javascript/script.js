// Seleccionar todos los botones
const botones = document.querySelectorAll('.button-apply-job')

// Añadir evento a cada uno
botones.forEach(function (boton) {
  boton.addEventListener('click', function () {
    console.log('Click en:', boton.textContent)

    // Cambiar este botón específico
    boton.textContent = '¡Aplicado!'
    boton.style.backgroundColor = '#22c55e'
    boton.disabled = true
  })
})