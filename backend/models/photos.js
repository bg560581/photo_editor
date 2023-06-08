const mongoose = require('mongoose')
const { Schema } = mongoose

//schema
const photoSchema = new mongoose.Schema({
    name: { type: String, 
        required: true, },
    photo: { 
        // type: String,
        data:Buffer,
        contentType:String,
    // photoUrl: { type: String, 
        // required: true 
    },
    url: { type: String, required: true }
});


const Photo = mongoose.model('Photobase', photoSchema)
module.exports = Photo