const container = document.querySelector('.jobs-listings')
const loading = document.querySelector('#jobs-loading')

fetch('./data.json') // obtenemos el archivo data.json
  .then((response) => {
    // convertimos la respuesta a JSON
    return response.json()
  })
  .then((jobs) => {

    if (loading) loading.remove()

    if (jobs.length === 0) {
      container.innerHTML = '<p>No hay empleos disponibles por ahora.</p>'
      return
    }


    // recorremos los datos y los mostramos en el DOM
    jobs.forEach((job) => {
      // creamos un elemento HTML <article> para cada trabajo
      const article = document.createElement('article')
      // añadimos la clase job-listing-card al elemento
      article.className = 'job-listing-card'
      // añadimos los datos al elemento
      article.dataset.modalidad = job.data.modalidad
      article.dataset.nivel = job.data.nivel
      article.dataset.technology = job.data.technology

      // añadimos el contenido HTML al elemento
      article.innerHTML = `<div>
          <h3>${job.titulo}</h3>
          <small>${job.empresa} | ${job.ubicacion}</small>
          <p>${job.descripcion}</p>
        </div>
        <button class="button-apply-job">Aplicar</button>`

      // añadimos el elemento al contenedor
      container.appendChild(article)
    })
  })