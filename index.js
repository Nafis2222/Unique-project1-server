const express = require('express')
const app = express()


const cors = require('cors')


const port = process.env.PORT || 5000


app.get('/', (req,res)=>{
    res.send('crud is running')
})

app.listen((port), (req,res)=>{
    console.log(`My simple crud is running on ${port}`)
})