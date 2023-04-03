require('dotenv').config()
const express = require('express')
// const methodOverride = require('method-override')
const app = express()




// MIDDLEWARE
// app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }))
// app.use(methodOverride('_method'))

//controllers and routes
app.use('/photos', require('./controllers/photos'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

//listen for connections

app.listen(process.env.PORT)
