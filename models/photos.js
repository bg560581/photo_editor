const mongoose = require('mongoose')
const { Schema } = mongoose

//schema
const photoSchema = new Schema({
    name: {type:String, required: true},
    image: { type:String, required: true},
})

const Photo = mongoose.model('Photo', photoSchema)
module.exports = Photo