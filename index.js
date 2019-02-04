require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

const app = express()

app.use(bodyParser.json())

app.use(routes)

mongoose.connect('mongodb://localhost/chicken-shops')

app.listen(process.env.PORT, () => console.log(`running on ${process.env.PORT}`))
