const express = require('express')
const router = require('express').Router()
const Photo = require('../models/photos.js')

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


  

module.exports = router
