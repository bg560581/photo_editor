const { response } = require('express');
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

  //open one
  router.get('/:id', (req, res) => {
    Photo.findById(req.params.id)
        res.send(response.id)
        
        // .then(foundPhoto => {
        //     res.send(response.foundPhoto)
        // })
  })


  

module.exports = router
