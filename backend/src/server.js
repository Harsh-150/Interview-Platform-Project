import express from 'express'
import path from 'path'
import {ENV} from '../env.js'
import {connectDB} from './lib/db.js'
import cors from 'cors'
import {serve} from 'inngest/express'
import {inngest} from './lib/inngest.js'
import {functions}  from './lib/inngest.js'

const app = express()
const __dirname = path.resolve()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: ENV.CLIENT_URL,
    credentials: true// means server allows browser(frontend) to send cookies to it
}))

app.use('/api/inngest', serve({client: inngest, functions}))

app.get('/about', (req,res)=>{
    res.status(200).json({
        "description": "This is the about page."
    })
})

app.get('/contact', (req,res)=>{
    res.status(200).json({
        "description": "This is the contacts page."
    })
})

// make ready for deployment
if(ENV.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/dist')))
    app.get('/{*any}', (req,res)=>{
        res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
    })
}


const startServer = async() => {
    try{
        await connectDB()
        app.listen(ENV.PORT, ()=>{
            console.log('Server is running on Port ', ENV.PORT)
        })
    }
    catch(err){
        console.error(`Error: ${err.message}`)
    }
}
startServer()