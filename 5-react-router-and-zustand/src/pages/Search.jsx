import { useEffect, useState } from 'react'

import { Pagination } from '../components/Pagination.jsx'
import { Spinner } from '../components/Spinner.jsx'
import { SearchFormSection } from '../components/SearchFormSection.jsx'
import { JobListings } from '../components/JobListings.jsx'
import { useRouter } from '../hooks/useRouter.js'
import { getErrorMessage } from '../helpers/statusError.js'

const RESULTS_PER_PAGE = 4

const useFilters = () => {
  const [filters, setFilters] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return JSON.parse(localStorage.getItem("jobFilters")) || {
      technology: params.get('technology') || '',
      location: params.get('type') || '',
      experienceLevel: params.get('level') || ''
    }
  })
  const [textToFilter, setTextToFilter] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('text') || ''
  })
  const [currentPage, setCurrentPage] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    const page = Number(params.get('page'))
    return Number.isNaN(page) ? page : 1
  })

  const [hasNotFilters, setHasNotFilters] = useState(true)

  const [jobs, setJobs] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { navigateTo } = useRouter()

  useEffect(() => {
    
    async function fetchJobs() {
      try {
        setError(null)
        setLoading(true)

        const params = new URLSearchParams()
        if (textToFilter) params.append('text', textToFilter)
        if (filters.technology) params.append('technology', filters.technology)
        if (filters.location) params.append('type', filters.location)
        if (filters.experienceLevel) params.append('level', filters.experienceLevel)

        const offset = (currentPage - 1) * RESULTS_PER_PAGE
        params.append('limit', RESULTS_PER_PAGE)
        params.append('offset', offset)

        const queryParams = params.toString()

        const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`)

        if (response.ok) {
          const json = await response.json()

          setJobs(json.data)
          setTotal(json.total)

          const array = Object.values(filters).filter((word) => word.length > 0)
          setHasNotFilters(array.length === 0)
          console.log('No hay filtros: ', hasNotFilters, ' ', array)

          localStorage.setItem('jobFilters', JSON.stringify(filters))
        }
        else{
          console.log('status ',response.status)
          throw new Error(`Respuesta no valida: ${getErrorMessage(response.status)}`)
        }


      } catch (error) {
        setError(`Error fetching jobs: ${error}`)
        console.error('Error fetching jobs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [filters, currentPage, textToFilter])

  useEffect(() => {
    const params = new URLSearchParams()

    if (textToFilter) params.append('text', textToFilter)
    if (filters.technology) params.append('technology', filters.technology)
    if (filters.location) params.append('type', filters.location)
    if (filters.experienceLevel) params.append('level', filters.experienceLevel)

    if (currentPage > 1) params.append('page', currentPage)

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname

    navigateTo(newUrl)
  }, [filters, currentPage, textToFilter, navigateTo])

  const totalPages = Math.ceil(total / RESULTS_PER_PAGE)

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

  const handleClearFilters = () => {
    setFilters({
      technology: '',
      location: '',
      experienceLevel: ''
    })
    localStorage.removeItem('jobFilters')
    setCurrentPage(1)
  }

  return {
    loading,
    jobs,
    total,
    totalPages,
    currentPage,
    textToFilter,
    handlePageChange,
    handleSearch,
    handleTextFilter,
    hasNotFilters,
    handleClearFilters,
    error
  }
}

export function SearchPage() {
  const {
    jobs,
    total,
    loading,
    totalPages,
    currentPage,
    textToFilter,
    handlePageChange,
    handleSearch,
    handleTextFilter,
    hasNotFilters,
    handleClearFilters,
    error
  } = useFilters()

  const title = loading
    ? `Cargando... - DevJobs`
    : `Resultados: ${total}, Página ${currentPage} - DevJobs`

  return (
    <main>
      <title>{title}</title>
      <meta name="description" content="Explora miles de oportunidades laborales en el sector tecnológico. Encuentra tu próximo empleo en DevJobs." />

      <SearchFormSection
        initialText={textToFilter}
        onSearch={handleSearch}
        onTextFilter={handleTextFilter}
        hasNotFilters={hasNotFilters}
        handleClearFilters={handleClearFilters}
      />

      <section>
        <h2 style={{ textAlign: 'center' }}>Resultados de búsqueda</h2>

        {
          error !== null ? <button onClick={() => window.location.reload()}>Error: {error}</button> : loading ? <Spinner /> : <JobListings jobs={jobs} />
        }

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>
    </main>
  )
}

