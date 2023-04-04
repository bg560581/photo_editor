require('dotenv').config()
const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true, 
//   useUnifiedTopology: true
// },()=>{console.log('connect to db', process.env.MONGO_URI);})

mongoose.connect(process.env.MONGO_URI).then(() => console.log("Mongoose connected", process.env.MONGO_URI))

module.exports.Photo = require('./photos')