
require('dotenv').config
const express = require('express')
const app = express()
const port = 5000



app.get('/', (req , res)=>{
    res.send('hello world')
})

app.get('/twitter', (req , res)=>{
    res.send('hello world this is twiiter')
})

app.get('/login', (req , res)=>{
    res.send('<h1>Please login to access</h1>')
})

app.get('/youtube', (req , res)=>{
    res.send('<h2>code with ali</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Exampe app listeing in ${port}`)
})



