import { JobCard } from './JobCard.jsx'

export function JobListings ({ jobs }) {
  console.log(jobs)
  return (
    <>
      <h2>Resultados de búsqueda</h2>

      <div className="jobs-listings">
        {jobs.map(job => 
        (

          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  )
}