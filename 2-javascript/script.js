// ✅ Un solo evento en el padre
const container = document.querySelector('#jobs-list')

container.addEventListener('click', function (event) {
  // Detectamos si el click fue en un botón
  if (event.target.classList.contains('button-apply-job')) {
    // Código aquí
  }
})