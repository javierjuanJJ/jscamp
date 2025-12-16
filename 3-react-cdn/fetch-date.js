const RESULTS_PER_PAGE = 3

const container = document.querySelector('.jobs-listings')
const loading = document.querySelector('#jobs-loading')
let currentPage = 1;


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
        



        const totalPages = Math.ceil(jobs.length / RESULTS_PER_PAGE)

        const paginationContainer = document.querySelector('.pagination')
        // Limpiar la paginación existente
        paginationContainer.innerHTML = ''

        const buttonBack = document.createElement('button')
        buttonBack.textContent = '<'
        buttonBack.className = 'page-button'
        buttonBack.addEventListener('click', function (params) {
            changeLinks()
            
            const enlaces = document.getElementsByClassName('page-button')
            
            if (currentPage > 1) {
                currentPage--;
            }

            if (currentPage === 1) {
                buttonBack.style.display = 'none'
            }
            else {
                buttonBack.style.display = 'flex'
            }

            for (let index = 0; index < enlaces.length; index++) {
                const element = enlaces[index];
                if (element.textContent == currentPage) {
                    element.className = 'page-button is-active'
                }
            }

            buttonNext.style.display = 'flex'
            createListJobs(jobs)
        })


        buttonBack.style.display = 'none'
        paginationContainer.appendChild(buttonBack)

        // Crear un botón por cada página
        for (let i = 1; i <= totalPages; i++) {
            paginationContainer.appendChild(createButton(i, jobs))
        }


        const buttonNext = document.createElement('button')
        buttonNext.textContent = '>'
        buttonNext.className = 'page-button'
        buttonNext.addEventListener('click', function (params) {
            changeLinks()
            
            const enlaces = document.getElementsByClassName('page-button')
            
            if (currentPage < totalPages) {
                currentPage++;
            }

            if (currentPage === totalPages) {
                buttonNext.style.display = 'none'
            }
            else {
                buttonNext.style.display = 'flex'
            }

            for (let index = 0; index < enlaces.length; index++) {
                const element = enlaces[index];
                if (element.textContent == currentPage) {
                    element.className = 'page-button is-active'
                }
            }

            buttonBack.style.display = 'flex'
            createListJobs(jobs)
        })


        const enlaces = document.getElementsByClassName('page-button')
        for (let index = 0; index < enlaces.length; index++) {
            const element = enlaces[index];
            if (element.textContent == 1) {
                element.className = 'page-button is-active'
            }
        }

        paginationContainer.appendChild(buttonNext)
        createListJobs(jobs)
    })

function createListJobs(jobs) {
    // recorremos los datos y los mostramos en el DOM
    container.innerHTML = ''

    const startIndex = (currentPage - 1) * RESULTS_PER_PAGE
    const endIndex = startIndex + RESULTS_PER_PAGE
    const jobsToShow = jobs.slice(startIndex, endIndex)

    jobsToShow.forEach((job) => {
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
        title.className = 'title-information'
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
}

function createButton(i, jobs) {
    const button = document.createElement('button')
    button.textContent = i
    button.className = 'page-button'

    button.addEventListener('click', function () {

        changeLinks()

        currentPage = i;

        button.className = 'page-button is-active'

        createListJobs(jobs)
    })
    return button
}

function changeLinks() {
    const enlaces = document.getElementsByClassName('page-button')
    for (let index = 0; index < enlaces.length; index++) {
        const element = enlaces[index];
        element.className = 'page-button'
    }

}