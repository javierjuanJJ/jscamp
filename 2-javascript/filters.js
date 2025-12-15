import { state } from './config.js'

state.count++

console.log(state)

// Filters de select

const filterTechnology = document.querySelector('#filter-technology')
const filterLevel = document.querySelector('#filter-level')
const jobLocation = document.querySelector('#job-location')


function showFlexJobs() {
    const jobs = document.querySelectorAll('.job-listing-card')
    return [...jobs].filter(job => job.style.display === '' || job.style.display === 'flex');

}

function showAllJobs() {
    const jobs = document.querySelectorAll('.job-listing-card')
    return [...jobs];

}

function putFlexToComun(array) {
    const comunes = [...new Set([...showAllJobs(), ...array])];
    comunes.forEach(job => {
        job.style.display = 'flex';
    })
}

filterTechnology.addEventListener('change', function () {
    applyAllFilters();
})

filterLevel.addEventListener('change', function () {

    applyAllFilters();

})


jobLocation.addEventListener('change', function () {

    applyAllFilters();
})



// Filters de input
const filterInput = document.querySelector('#input-nombre')


filterInput.addEventListener('input', function () {

    applyAllFilters();


})


function applyAllFilters() {
    const jobs = document.querySelectorAll('.job-listing-card');
    const messajeBox = document.getElementById('mensajeBusqueda');

    // --- valores seleccionados ---
    const selectedTechnologies = Array.from(filterTechnology.options)
        .filter(opt => opt.selected && opt.value !== '')
        .map(opt => opt.value);

    const selectedLevel = filterLevel.value;
    const selectedLocation = jobLocation.value;
    const searchText = filterInput.value.toLowerCase();

    let visibleCount = 0;

    jobs.forEach(job => {
        const jobTechnologies = job.getAttribute('data-technology').split(',');
        const jobLevel = job.getAttribute('data-nivel').toLowerCase();
        const jobLocationValue = job.getAttribute('data-modalidad').toLowerCase();
        const jobTitle = job.querySelector('.title-information').textContent.toLowerCase();

        // --- condiciones ---
        const matchTechnology =
            selectedTechnologies.length === 0 ||
            jobTechnologies.some(tech => selectedTechnologies.includes(tech));

        const matchLevel =
            selectedLevel === '' ||
            selectedLevel === jobLevel;

        const matchLocation =
            selectedLocation === '' ||
            selectedLocation === jobLocationValue;

        const matchText =
            searchText.length <= 3 ||
            jobTitle.includes(searchText);

        // --- resultado final ---
        const shouldShow =
            matchTechnology &&
            matchLevel &&
            matchLocation &&
            matchText;

        job.style.display = shouldShow ? 'flex' : 'none';

        if (shouldShow) visibleCount++;
    });

    messajeBox.textContent = `Mostrando ${visibleCount} trabajos`;
}


