require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const path = require('path')
const photos = require("./controllers/photos");
const app = express();


const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Mongoose connected", process.env.MONGO_URI));
// const { default: Photos } = require('../front_end/src/components/Photos')

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static("path"));

//controllers and routes
app.use('/photos', photos);

app.get("/", (req, res) => {
  res.send("home");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

//listen for connections

// server static front end productioon mode
if (process.eventNames.NODE_ENV === "production"){
  app.use(express.static(path.join(_dirname, 'public', 'build')))
}

// app.listen(process.env.PORT);







