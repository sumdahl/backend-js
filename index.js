require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/twitter', (req, res) => {
    res.send('@sumiran_dahal')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at helloworld.com</h1>')
})

app.get('/youtube', (req, res) =>{
    res.send('<h2>mitho chiya khana man lagyo')
 })
app.listen(process.env.PORT, () => {
    console.log(`Example app is listening at port ${process.env.PORT}`)
})

