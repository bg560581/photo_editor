// const { response } = require('express');
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
    cb(null, `./uploads/`);
  },
  filename: (req, file, cb) => {
    cb(null, path.extname(file.originalName)
      // `${uudiv4()}_${path.extname(file.originalname)}`
      )
      console.log(filename)
      ;
  },
});

const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
  try {
    const photos = await Photo.find({});
    const imageUrls = photos.map((photo) => photo.photo);
    const response = {
      imageUrls: imageUrls,
      photos: photos,
    };
    res.send(response);
  } catch (error) {
    // console.log(error);
    res.status(500).send("Server Error");
  }
});

router.post("/", upload.single("textImage"), (req, res) => {
  console.log(upload)
  try {
    const saveImage = new Photo({
      name: req.body.name,
      photo: {
        data: fs.readFileSync("uploads/" + req.file.filname),
        contentType: "image/jpg",
      },
    });
    saveImage
      .save()
      .then((res) => {
        console.log("image is saved");
        return res.send("image is saved");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  } catch (err) {
    console.log(err);
  }
});


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

// router.delete('/delete/:id', async (req,res) => {
//   const id = req.params.id
// })
// console.log(router.put)

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
