import React, { useEffect } from 'react'
import { useJobStore } from '../store/job.js'
import JobCard from '../components/JobCard.jsx'

const HomePage = () => {
  const { fetchJobs, jobs } = useJobStore()

  useEffect(() => {
    fetchJobs()
  }, [fetchJobs])

  return (
    <div className="p-4 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {jobs.slice().reverse().map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
