require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
mongoose.connect(process.env.MONGO_URI).then(() => console.log("Mongoose connected", process.env.MONGO_URI))
const cors = require('cors');


//middleware
app.use(cors());

//controllers and routes
app.use('/photos', require('./controllers/photos'))

app.get('/', (req, res) => {
    res.send('home')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

//listen for connections

app.listen(process.env.PORT)
