import express from 'express'
import path from 'path'
import {ENV} from '../env.js'

const app = express()
const __dirname = path.resolve()

console.log(ENV.PORT)
console.log(ENV.DB_URL)



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

app.listen(ENV.PORT, ()=>{
    console.log('Server is running on Port ', ENV.PORT)
})

