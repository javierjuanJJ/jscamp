import { useState } from 'react'

import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Pagination } from './components/Pagination.jsx'
import { SearchFormSection } from './components/SearchFormSection.jsx'
import { JobListings } from './components/JobListings.jsx'

import jobsData from './data.json'

const RESULTS_PER_PAGE = 4

function App() {
  const [filters, setFilters] = useState({
    technology: '',
    location: '',
    experienceLevel: ''
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
      jobSalary >= minSalary
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

  return (
    <>
      <Header />

      <main>
        <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} />

        <section>
          <JobListings jobs={pagedResults} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App