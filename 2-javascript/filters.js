import { state } from './config.js'

state.count++

console.log(state)

// Filters de select

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


// Filters de input
const filterInput = document.querySelector('#input-nombre')


filterInput.addEventListener('input', function () {
    const jobs = document.querySelectorAll('.job-listing-card')

    const selectedValue = filterInput.value

    if (selectedValue.length <= 3) {
        jobs.forEach(job => {
            job.style.display = 'flex';
        })
    }
    else {
        jobs.forEach(job => {
            // const modalidad = job.dataset.modalidad
            const title = job.getElementsByClassName('title-information')[0].textContent;
            console.log(title)

            console.log(title, " ", selectedValue)
            const isShown = title.toLowerCase().includes(selectedValue) ? 'flex' : 'none';

            job.style.display = isShown;
        })
    }


})