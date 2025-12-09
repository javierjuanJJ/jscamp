const container = document.querySelector('#container')

container.addEventListener('click', function (event) {
  console.log('target:', event.target) // Donde hiciste click
  console.log('currentTarget:', event.currentTarget) // Donde está el listener
})