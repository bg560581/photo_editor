const express = require("express");
const { Router } = require("express");
const router = Router();
const Photo = require("../models/photos.js");
const fs = require("fs");
// const uploadMiddleware = require("../MulterMiddleware.js");

const multer = require("multer");
const { v4: uudiv4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname
      // `${uudiv4()}_${path.extname(file.originalname)}`
      )
      // console.log(filename)
      ;
  },
});
const upload = multer({ dest: 'uploads/' });
const db = require("../models")

router.post('/', async (req, res) => {
    if (!req.body.pic) {
        req.body.pic = 'http://placekitten.com/400/400'
    }
    const photo = await Photo.create(req.body)
    res.json(photo)
})


router.get('/', async (req, res) => {
    const places = await Photo.find()
    res.json(places)
})


router.put("/:id", async (req, res) => {
  console.log(req.body);
  const newPhotoName = req.body.newPhotoName;
  // const id = req.params.id;
  try {
    const photo = await Photo.findById(req.params.id);
    console.log(photo)
    if (!photo) {
      return res.status(404).send("Photo not found");
    }
    photo.name = newPhotoName;
    console.log(photo)
    await Photo.findByIdAndUpdate(req.params.id, photo, {new: true})
    return res.send("update");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id);
    if (!photo) {
      return res.status(404).json({ message: 'Document not found' });
    }

    await photo.deleteOne();
    res.json({ message: 'Document deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});








module.exports = router;