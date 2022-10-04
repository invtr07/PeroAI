import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {pg as Client} from 'pg'
dotenv.config();

const PORT = process.env.PORT 
const app = express();

//middleware
app.use(express.json());
app.use(cors());

import authorization  from './routes/authorization.js'

// app.post('/api/result', (req, res)=>{
//     res.send("works")
// })

async function DbConnect(){
    try{
        const client = new Client({
            host: "localhost",
            user: process.env.DB_USER,
            database: process.env.DATABASE,
            port: process.env.DB_PORT,
            password: process.env.PASSWORD
        })
        await client.connect()
        app.listen(PORT, ()=>{
            console.log(`App is running on port ${PORT}`)
        })
        console.log("Db is Connected")
    }
    catch{
        console.log("error")
    }
}

DbConnect()


