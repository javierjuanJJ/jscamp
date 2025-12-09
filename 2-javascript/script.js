// Si añadimos un botón después...
const nuevoBoton = document.createElement('button')
nuevoBoton.className = 'button-apply-job'
nuevoBoton.textContent = 'Aplicar'
document.body.appendChild(nuevoBoton)

// ❌ Este botón NO tendrá el evento!