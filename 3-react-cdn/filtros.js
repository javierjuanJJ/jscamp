export function filtrarPorTecnologia(jobs, tech) {
    return jobs.filter((job) => job.data.technology.includes(tech))
}

export function filtrarPorModalidad(jobs, modalidad) {
    return jobs.filter((job) => job.data.modalidad === modalidad)
}