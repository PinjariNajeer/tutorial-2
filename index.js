const express = require('express')
const cars = require('cors')
require('dotenv').config()

const app = express()
app.use(cars())

const port = 8080 || process.env.port

app.listen(port, () =>{
    console.log(`Server is running ${port}`)
})