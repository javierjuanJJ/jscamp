// Filter technology

const filterTechnology = document.getElementById('filter-technology')
if (filterTechnology) {
    filterTechnology.addEventListener('change', function () {
        const technologyFiltered = filterTechnology.value
        console.log('Tecnología seleccionada:', filterTechnology.value)

        const jobList = document.querySelectorAll('.job-listing-card')
        console.log(jobList)

        if (technologyFiltered.length === 0) {
            jobList.forEach(job => {
                job.style.display = 'flex';
            })
        }
        else {
            jobList.forEach(job => {
                const modalityJob = job.getAttribute('technology')
                console.log(modalityJob)
                const isShown = modalityJob.toLowerCase().includes(technologyFiltered) ? 'flex' : 'none';

                job.style.display = isShown;

            })

        }


    })
}
