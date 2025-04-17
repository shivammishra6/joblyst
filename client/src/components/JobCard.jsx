import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <Link
      to={`/job/${job._id}`}
      className="block rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition duration-300 p-5 bg-white"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src="dummy.png"
          alt="company logo"
          className="w-12 h-12 object-cover rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>
          <p className="text-sm text-gray-500">{job.company}</p>
        </div>
      </div>

      <div className="text-sm text-gray-600 space-y-1">
        <p>
          <span className="font-medium">Location:</span> {job.location}
        </p>
        <p>
          <span className="font-medium">Type:</span> {job.type}
        </p>
      </div>
    </Link>
  );
};

export default JobCard;
