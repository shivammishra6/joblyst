import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useJobStore } from "../store/job";

const JobDetails = () => {
  const { id } = useParams();
  const { fetchJobDetails, jobs } = useJobStore();

  useEffect(() => {
    fetchJobDetails(id);
  }, [fetchJobDetails, id]);

  const job = Array.isArray(jobs) ? jobs[0] : jobs;

  if (!job) {
    return <div className="text-center mt-10 text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-8 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{job.title}</h1>

      <div className="text-gray-700 space-y-2 mb-6">
        <p><span className="font-semibold">Company:</span> {job.company}</p>
        <p><span className="font-semibold">Location:</span> {job.location}</p>
        <p><span className="font-semibold">Type:</span> {job.type}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Job Description</h2>
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">{job.description}</p>
      </div>
    </div>
  );
};

export default JobDetails;
