const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const photos = require("./controllers/photos");

const app = express();
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Mongoose connected", process.env.MONGO_URI));
const { default: Photos } = require('../front_end/src/components/Photos')

//middleware
app.use(cors());

app.use(express.json());
app.use(express.static("public"));

//controllers and routes
app.use('/photos', photos);

app.get("/", (req, res) => {
  res.send("home");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

//listen for connections

app.listen(process.env.PORT);
