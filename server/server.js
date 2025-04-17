import express from 'express'
import path from 'path'
import dotenv from "dotenv"
import {connectDB} from './config/db.js'
import router from './routes/job.route.js'


dotenv.config()
const app=express()
const PORT=process.env.PORT||10000
const __dirname=path.resolve()
app.use(express.json());

app.use('/api/jobs',router)

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"/client/dist")))

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","dist","index.html"))
    })
    
}

app.listen(PORT,()=>{
    connectDB()
    console.log(`server started at http://localhost:${PORT} `)
})