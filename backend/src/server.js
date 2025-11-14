import express from 'express'
import {ENV} from '../env.js'
import {connectDB} from './lib/db.js' // <-- RE-ADD THIS
import cors from 'cors'
import {serve} from 'inngest/express'
import {inngest, functions} from './lib/inngest.js'

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: ENV.CLIENT_URL,
    credentials: true
}))

// --- API ROUTES ---
app.use('/api/inngest', serve({ client: inngest, functions }))

app.get('/api/about', (req,res)=>{
    res.status(200).json({
        "description": "This is the about page."
    })
})

app.get('/api/contact', (req,res)=>{
    res.status(200).json({
        "description": "This is the contacts page."
    })
})

// This export is what Vercel uses
export default app;

// --- LOCAL DEVELOPMENT STARTUP ---
// This block will only run if NOT in production
const startServer = async() => {
    try{
        await connectDB()
        app.listen(ENV.PORT, ()=>{
            console.log(`[nodemon] Server is running on Port ${ENV.PORT}`)
        })
    }
    catch(err){
        console.error(`Error: ${err.message}`)
    }
}

// Only run the server locally
if (ENV.NODE_ENV !== 'production') {
    startServer()
}