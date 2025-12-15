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

            const wrapper = document.createElement('div')

            const title = document.createElement('h3')
            title.textContent = job.titulo

            const meta = document.createElement('small')
            meta.textContent = `${job.empresa} | ${job.ubicacion}`

            const description = document.createElement('p')
            description.textContent = job.descripcion

            const button = document.createElement('button')
            button.className = 'button-apply-job'
            button.textContent = 'Aplicar'

            wrapper.append(title, meta, description)
            article.append(wrapper, button)

            // añadimos el elemento al contenedor
            container.appendChild(article)
        })
    })