import express from 'express'
import {ENV} from '../env.js'
import {connectDB} from './lib/db.js'
import cors from 'cors'
import {serve} from 'inngest/express'
import {inngest, functions} from './lib/inngest.js'
import {clerkMiddleware} from '@clerk/express'
import { protectRoute } from './middleware/protectRoute.js'
import chatRoutes from './routes/chatRoutes.js'
import sessionRoutes from './routes/sessionRoutes.js'

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: ENV.CLIENT_URL,
    credentials: true
}))
app.use(clerkMiddleware()) // this adds auth field to request object: req.auth()

// --- API ROUTES ---
app.use('/api/inngest', serve({ client: inngest, functions }))
app.use('/api/chat',chatRoutes)
app.use('/api/sessions', sessionRoutes)

app.get('/api/about', (req,res)=>{  
    res.status(200).json({
        "description": "This is the about page."
    })
})

// video-call feature should only be accessible to authenticated user,
// that is why protectRoute is being used as middleware.
// when array of middlewares is passed to express, it automatically flattens
// and executes them sequentially, one by one. 
app.get('/api/video-calls', protectRoute, (req,res)=>{
    res.status(200).json({
        'description': "Video-call endpoint. Only authenticated users can access"
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