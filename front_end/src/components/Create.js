

import React, { useState } from 'react'
import axios from 'axios';
import Button from './Button';

function Create() {
  const [photo, setPhotos] = useState('');
//   const [photoUrl, setPhotos] = useState('');
  const [name, setName] = useState('')
  
  const addToLibrary = () => {
    axios.post('http://localhost:3003/photos', 
        {photo: photo, name: name})
        // {photoUrl: photoUrl, name: name})
    .then(res => {
      console.log(res);
      alert('The photo has been added successfully to the library.')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="container mt-4">
        <h1>Add to Library</h1>
        <form >
            <div className="mb-3">
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Enter name"
                    onChange={(event) => {
                        setName(event.target.value)
                }} />
            </div>
            <div className="mb-3">
                <input 
                    className="form-control" 
                    type="file"
                    // placeholder='Insert Photo URL' 
                    onChange={(event) => {
                        setPhotos(event.target.photo)
                    }}    
                />
            </div>
            <button type="button" className="btn btn-primary" onClick={addToLibrary}>Add photo to Library</button>
        </form>
    </div>
  )
}

export default Create