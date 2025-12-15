import { state } from './config.js'

state.count++

console.log(state)

// Filters de select

const filterTechnology = document.querySelector('#filter-technology')
const filterLevel = document.querySelector('#filter-level')
const jobLocation = document.querySelector('#job-location')

filterTechnology.addEventListener('change', function () {
    const jobs = document.querySelectorAll('.job-listing-card')

    // Obtener todas las opciones que están seleccionadas
    const selectedValue = Array.from(filterTechnology.options)
    .filter(option => option.selected)
    .map(option => option.value);

    if (selectedValue.length === 1 && selectedValue[0] === '') {
        jobs.forEach(job => {
            job.style.display = 'flex';
        })
    }
    else {
        jobs.forEach(job => {
            // const modalidad = job.dataset.modalidad
            const modalityJob = job.getAttribute('data-technology').split(',')

            console.log(modalityJob, " " , selectedValue)
            
            const isShown = modalityJob.some((tech) => selectedValue.includes(tech)) ? 'flex' : 'none';

            job.style.display = isShown;
        })
    }


})

filterLevel.addEventListener('change', function () {
    const jobs = document.querySelectorAll('.job-listing-card')

    const selectedValue = filterLevel.value
    if (selectedValue.length === 0) {
        jobs.forEach(job => {
            job.style.display = 'flex';
        })
    }
    else{
        jobs.forEach(job => {
            // const modalidad = job.dataset.modalidad
            const modalidad = job.getAttribute('data-nivel')
    
            const isShown = selectedValue === modalidad.toLowerCase() ? 'flex' : 'none';
    
            job.style.display = isShown;
        })
    }

    
})

jobLocation.addEventListener('change', function () {
    const jobs = document.querySelectorAll('.job-listing-card')

    const selectedValue = jobLocation.value

    if (selectedValue.length === 0) {
        jobs.forEach(job => {
            job.style.display = 'flex';
        })
    }

    else{
        jobs.forEach(job => {
            // const modalidad = job.dataset.modalidad
            const modalidad = job.getAttribute('data-modalidad')
            const isShown = selectedValue === modalidad.toLowerCase() ? 'flex' : 'none';
    
            job.style.display = isShown;
        })
    }

    
})


// Filters de input
const filterInput = document.querySelector('#input-nombre')


filterInput.addEventListener('input', function () {
    
    const jobs = document.querySelectorAll('.job-listing-card')
    const messajeBox = document.getElementById('mensajeBusqueda')
    const totalJobs = jobs.length
    let counterJobs = 0;

    const selectedValue = filterInput.value

    if (selectedValue.length <= 3) {
        jobs.forEach(job => {
            job.style.display = 'flex';
        })
        messajeBox.textContent = `Mostrando ${totalJobs} de ${totalJobs} trabajos` 
    }
    else {
        counterJobs = 0
        jobs.forEach(job => {
            // const modalidad = job.dataset.modalidad
            const title = job.getElementsByClassName('title-information')[0].textContent;
            const includesTitle = title.toLowerCase().includes(selectedValue);
            const isShown = includesTitle ? 'flex' : 'none';

            job.style.display = isShown;
            if (includesTitle === true){counterJobs++} 

        })
        messajeBox.textContent = `Mostrando ${counterJobs} de ${totalJobs} trabajos` 
    }

    




})