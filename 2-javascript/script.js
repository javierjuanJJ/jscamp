const boton = document.querySelector('#boton-importante')

const rect = boton.getBoundingClientRect()

console.log(rect)

/* Salida: {
  width: 120,
  height: 40,
  x: 100,
  y: 200,
  top: 200,
  left: 100,
  right: 220,
  bottom: 240
} */