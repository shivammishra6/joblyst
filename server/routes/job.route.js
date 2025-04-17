import express from "express"
import { createJob, getJobWithId, getJobs } from "../controller/job.controller.js"

const router=express.Router()

router.get("/",getJobs)
router.post("/",createJob)
router.get("/:id",getJobWithId)
export default router