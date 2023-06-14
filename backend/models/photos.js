const mongoose = require("mongoose");
const { any } = require("../MulterMiddleware");
const { Schema } = mongoose;

//schema
const photoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: {
    type: {
      type: String,
      required: true,
    },
    data: {
      type: Buffer,
      required: true,
    },
    // url: {
    //   type: String,
    //   required: true,
    // },
    contentType: {
      type: String,
      required: true,
    },
  },
  // photoUrl: { type: String
  //            // required: true
  // },
//   url: { type: String, required: true },
});

const Photo = mongoose.model("Photobase", photoSchema);
module.exports = Photo;
