import React, { useState } from 'react';
import {useJobStore} from '../store/job'
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    company: '',
    type: '',
    location: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Job Title validation: min 3, max 100 characters
    if (!form.title.trim()) {
      newErrors.title = 'Job Title is required';
    } else if (form.title.length < 3) {
      newErrors.title = 'Job Title must be at least 3 characters long';
    } else if (form.title.length > 100) {
      newErrors.title = 'Job Title must be less than 100 characters';
    }

    // Company Name validation: min 3, max 100 characters
    if (!form.company.trim()) {
      newErrors.company = 'Company Name is required';
    } else if (form.company.length < 3) {
      newErrors.company = 'Company Name must be at least 3 characters long';
    } else if (form.company.length > 100) {
      newErrors.company = 'Company Name must be less than 100 characters';
    }

    // Job Type validation: must be selected
    if (!form.type) newErrors.type = 'Job Type is required';

    // Location validation: min 3, max 100 characters
    if (!form.location.trim()) {
      newErrors.location = 'Location is required';
    } else if (form.location.length < 3) {
      newErrors.location = 'Location must be at least 3 characters long';
    } else if (form.location.length > 100) {
      newErrors.location = 'Location must be less than 100 characters';
    }

    // Description validation: min 50
    if (!form.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (form.description.length < 50) {
      newErrors.description = 'Description must be at least 50 characters long';
    } 

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const {createJob}=useJobStore()
  const handleSubmit =async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted', form);
      const { success, message } = await createJob(form);
    
      console.log("Success:", success);
      console.log("Message:", message);
      if (success) {
        navigate("/"); // Redirect to homepage
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Job Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength={100}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className="block font-medium">Company Name</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength={100}
          />
          {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
        </div>

        <div>
          <label className="block font-medium">Job Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>
          {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
        </div>

        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength={100}
          />
          {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
