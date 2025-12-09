const botones = document.querySelectorAll('.button-apply-job')

// Tiene .length como los arrays
console.log(botones.length) // 3

// Podemos acceder por índice
console.log(botones[0]) // Primer botón
console.log(botones[1]) // Segundo botón
console.log(botones[2]) // Tercer botón

// Tiene forEach (pero no map, filter, reduce, etc.)
botones.forEach(function (boton) {
  console.log(boton)
})