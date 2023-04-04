const mongoose = require('mongoose')
// const { Schema } = mongoose

//schema
const photoSchema = new mongoose.Schema({
    name: {type:String, required: true},
    image: { type:String, required: true},
})

const Photo = mongoose.model('Photobase', photoSchema)
module.exports = Photo