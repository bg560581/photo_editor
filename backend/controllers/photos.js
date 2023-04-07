const { response } = require('express');
const express = require('express')
const router = require('express').Router()
const Photo = require('../models/photos.js')
const multer = require('multer');
const storage = new Photo({
    
})
const upload = multer({ storage })

router.get('/', async (req, res) => {
    try {
      const photos = await Photo.find({});
      const imageUrl = photos.image;
      const response = {
        imageUrl: imageUrl,
        photos: photos
      };
      res.send(response);
    } catch (error) {
      console.log(error);
      res.status(500).send('Server Error');
    }
});
router.post('/add', upload.single(Photo), (req, res) => {
    console.log(response);
    res.send('file uploaded success')
})
router.post('/add', (req, res) => {
    try {
        res.send(response)
        console.log(response)
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');     
    }
    
})

  


  

module.exports = router
