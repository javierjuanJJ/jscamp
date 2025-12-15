import { state } from './config.js'

state.count++

console.log(state)

const filterTechnology = document.querySelector('#filter-technology')
const filterLevel = document.querySelector('#filter-level')
const jobLocation = document.querySelector('#job-location')

filterTechnology.addEventListener('change', function () {
    const jobs = document.querySelectorAll('.job-listing-card')

    const selectedValue = filterTechnology.value

    if (selectedValue.length === 0) {
        jobs.forEach(job => {
            job.style.display = 'flex';
        })
    }
    else {
        jobs.forEach(job => {
            // const modalidad = job.dataset.modalidad
            const modalidad = job.getAttribute('data-technology')

            console.log(modalidad, " ", selectedValue)
            const isShown = modalityJob.toLowerCase().includes(technologyFiltered) ? 'flex' : 'none';

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
    
            console.log(modalidad, " ", selectedValue)
    
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
    
            console.log(modalidad, " ", selectedValue)
            const isShown = selectedValue === modalidad.toLowerCase() ? 'flex' : 'none';
    
            job.style.display = isShown;
        })
    }

    
})