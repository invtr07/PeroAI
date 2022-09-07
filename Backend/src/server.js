//boilerplate code of connecting server with mongodb - from OutSite

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT 

const app = express();

//using middleware
app.use(express.json());
app.use(cors());

//import the routes
import userRoutes from './routes/user.js'

//using routes
app.use("/api", userRoutes)

//running server
app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
})