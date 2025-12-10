const jobsListingSection = document.querySelector('.jobs-listings')

jobsListingSection.addEventListener('click', function (event) {
    const element = event.target

    if (element.classList.contains('button-apply-job')) {
        element.textContent = 'Aplicado'
        element.classList.add('is-applied')
        element.disabled = true
    }
})



const inputNombre = document.getElementById('input-nombre')
inputNombre.addEventListener('input', function () {
    console.log('Escribiendo... ' , inputNombre.value)
})

inputNombre.addEventListener('blur', function () {
    console.log('Perdió el foco')
})

inputNombre.addEventListener('keydown', function (event) {
    console.log('La tecla presionada ' , event.key)
    console.log('El código de la tecla ' , event.code)
    console.log('Si la tecla se está presionando con la tecla Shift ' , event.shiftKey)
    console.log('Si la tecla se está presionando con la tecla Ctrl ' , event.ctrlKey)
    console.log('Si la tecla se está presionando con la tecla Alt ' , event.altKey)
    console.log('Si la tecla se está presionando con la tecla Meta ' , event.metaKey)
})


inputNombre.addEventListener('keyup', function (event) {
    console.log('La tecla presionada ' , event.key)
    console.log('El código de la tecla ' , event.code)
    console.log('Si la tecla se está presionando con la tecla Shift ' , event.shiftKey)
    console.log('Si la tecla se está presionando con la tecla Ctrl ' , event.ctrlKey)
    console.log('Si la tecla se está presionando con la tecla Alt ' , event.altKey)
    console.log('Si la tecla se está presionando con la tecla Meta ' , event.metaKey)
})

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Formulario enviado')
})