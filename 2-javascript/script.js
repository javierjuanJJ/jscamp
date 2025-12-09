// Función tradicional
botones.forEach(function (boton) {
    boton.addEventListener('click', function () {
        boton.textContent = '¡Aplicado!'
    })
})

// Arrow function
botones.forEach((boton) => {
    boton.addEventListener('click', () => {
        boton.textContent = '¡Aplicado!'
    })
})