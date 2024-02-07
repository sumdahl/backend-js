require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const user= {
    name: 'sumdahl',
    age: '22',
    isLearning: true
}

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/twitter', (req, res) => {
    res.send('Please follow me at @sumiran_dahal')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at nepalstock.com for nepse update</h1>')
})

app.get('/youtube', (req, res) =>{
    res.send('<h2>mitho chiya khana man lagyo , kasto jaado abuii')
 })

app.get('/github', (req, res) => {
    res.json(githubData)
})
 
app.listen(process.env.PORT, () => {
    console.log(`Example app is listening at port ${process.env.PORT}`)
})