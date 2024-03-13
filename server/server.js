const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 4080

const connectDB = require('./db')

connectDB()

app.use('/static', express.static(path.join(__dirname, '../client/.next')))

app.get('/', (req, res) => {
    res.send('This is the HOME page')
})

app.get('/auth/sign-in', (req, res) => {
    res.send('This is the SIGN-IN page')
})

app.get('/auth/sign-up', (req, res) => {
    res.send('This is the SIGN-UP page')
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke')
})

app.listen(PORT, () => {
    console.log(`Port started on ${PORT}`)
})
