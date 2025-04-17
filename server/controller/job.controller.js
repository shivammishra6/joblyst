import Job from '../models/job.model.js'
import mongoose from "mongoose"


export const getJobs=async(_,res)=>{
    try {
        const jobs = await Job.find({});
        res.status(200).json({ success: true, data: jobs });
      } catch (error) {
        console.log("Error in get questions: ", error.message);
        res
          .status(200)
          .json({ success: false, message: "jobs couldn't be fetched" });
      }   
}

export const getJobWithId=async(req,res)=>{
  const {id}=req.params;
  try{
    const jobs=await Job.find({_id:id})
    res.status(200).json({ success: true, data: jobs });
  } catch (error) {
    console.log("Error in getting jobs: ", error.message);
    res
      .status(200)
      .json({ success: false, message: "jobs couldn't be fetched" });
  }
}

export const createJob=async(req,res)=>{
  const job=req.body;
  if(!job.title||!job.company||!job.type||!job.location||!job.description){
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newJob=new Job(job);

  try{
    await newJob.save();
    res.status(201).json({ success: true, data: newJob });
  } catch (error) {
    console.log("Error in creating job: ", error.message);
    res.status(200).json({ success: false, message: "job not created" });
  }
}

