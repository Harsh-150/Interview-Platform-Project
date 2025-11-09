import express from 'express'
import {ENV} from '../env.js'

const app = express()

console.log(ENV.PORT)
console.log(ENV.DB_URL)


app.get('/', (req,res)=>{
    res.status(200).json({
        "msg": "This is an interview platform.",
        "goal": "I want to build this project."
    })
})

app.get('/about', (req,res)=>{
    res.status(200).json({
        "description": "This is the about page."
    })
})

app.listen(3000, ()=>{
    console.log('Server is running on Port ', ENV.PORT)
})

