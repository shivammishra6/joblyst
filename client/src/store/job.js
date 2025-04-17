import { create } from "zustand";

export const useJobStore = create((set) => ({
  jobs: [],
  setJobs: (jobs) => set({ jobs }),

  fetchJobs: async () => {
    const res = await fetch("/api/jobs");
    const data = await res.json();
    set({ jobs: data.data });
  },

  fetchJobDetails: async (id) => {
    const res = await fetch(`/api/jobs/${id}`);
    const data = await res.json();
    set({ jobs: data.data });
  },

  createJob:async(newJob)=>{
    if(!newJob.title||!newJob.company||!newJob.type||!newJob.location||!newJob.description){
        return { success: false, message: "please fill all the fields" };
      }
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      });
      const data = await res.json();
      set((state) => ({ jobs: [...state.jobs, data.data] }));
      return { success: true, message: "job created successfully" };
  }
}));
