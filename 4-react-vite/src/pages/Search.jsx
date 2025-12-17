// src/pages/Search.jsx
import { useState } from 'react'
import { SearchFormSection } from '../components/SearchFormSection'
import { JobListings } from '../components/JobListings'
import { Pagination } from '../components/Pagination'
import jobsData from '../data.json'

const RESULTS_PER_PAGE = 4
export function Search() {

    const [filters, setFilters] = useState({
        technology: '',
        location: '',
        experienceLevel: '',
        contracttype: '',
    })
    const [textToFilter, setTextToFilter] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    // 1. Filtrar por los selects
    const jobsFilteredByFilters = jobsData.filter((job) => {
        const jobSalary = parseInt(job.data.salary) || 0
        const minSalary = filters.salary ? parseInt(filters.salary) : 0
        return (
            (filters.technology === '' || job.data.technology === filters.technology) &&
            (filters.location === '' || job.data.modalidad === filters.location) &&
            (filters.experienceLevel === '' || job.data.nivel === filters.experienceLevel)
            &&
            (jobSalary >= minSalary)
            &&
            (filters.contracttype === '' || job.data.contracttype === filters.contracttype)
        )
    })

    const jobsWithTextFilter = textToFilter === ''
        ? jobsFilteredByFilters
        : jobsFilteredByFilters.filter(job => {
            return job.titulo.toLowerCase().includes(textToFilter.toLowerCase())
        })

    const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE)

    const pagedResults = jobsWithTextFilter.slice(
        (currentPage - 1) * RESULTS_PER_PAGE, // Página 1 -> 0, Página 2 -> 5, Página 3 -> 10
        currentPage * RESULTS_PER_PAGE    // Página 1 -> 5, Página 2 -> 10, Página 3 -> 15
    )

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }



    const handleSearch = (filters) => {
        setFilters(filters)
        setCurrentPage(1)
    }

    const handleTextFilter = (newTextToFilter) => {
        setTextToFilter(newTextToFilter)
        setCurrentPage(1)
    }

    const handleReset = () => {
        setFilters({
            technology: '',
            location: '',
            experienceLevel: '',
            contracttype: ''
        })
        setTextToFilter('')
        setCurrentPage(1)
    }
    const totalResults = jobsWithTextFilter.length

    return (
        <main>
        <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} onReset={handleReset} />
        <div className="results-summary">
          <p>
            Se encontraron <strong>{totalResults}</strong> trabajos
            {textToFilter && ` para "${textToFilter}"`}
          </p>
        </div>
        <section>
          <JobListings jobs={pagedResults} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
      </main>
    )
}