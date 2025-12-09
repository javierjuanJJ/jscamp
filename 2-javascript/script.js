// Evento en el documento (para cerrar menús, por ejemplo)
document.addEventListener('click', function () {
    console.log('Cerrar menú')
})

// Si detienes la propagación aquí...
boton.addEventListener('click', function (event) {
    event.stopPropagation() // ❌ El evento del document no se ejecuta
})