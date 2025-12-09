// ❌ MAL: No puedes añadir eventos directamente al NodeList
const botones = document.querySelectorAll('.button-apply-job')
botones.addEventListener('click', function () {
  /* ... */
})
// Error: botones.addEventListener is not a function

// ✅ BIEN: Usa forEach
botones.forEach(function (boton) {
  boton.addEventListener('click', function () {
    /* ... */
  })
})