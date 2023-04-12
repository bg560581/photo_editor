import React, { useState, formData } from 'react'
import axios from 'axios'

function Build () {
    const [photos, setNewPhotos] = useState(
        {
            name:'',
            photo:''
        }
    );
    const handleChange = (e) => {
        setNewPhotos({...photos, [e.target.name]: e.target.value})
    }
    const handlePhoto = (e) => {
        setNewPhotos({...photos, photo: e.target.files[0]})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', photos.name);
        formData.append('photo', photos.photo)
      }
      console.log(photos.photo)
      axios.post('http://localhost:3003/photos', formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      })

  return (
    <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <input
            type='text'
            placeholder='name'
            name='name'
            value={photos.name}
            onChange={handleChange}
        />
        <input
            type='file'
            accept='.png, .jpeg, .jpg'
            name='photo'
            onChange={handlePhoto}
        />
        <input 
            type='submit'
        />
    </form>
  )
}

export default Build