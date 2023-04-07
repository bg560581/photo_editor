import React, { useState } from 'react'
import axios from 'axios';


function Create() {
    const [photos, setPhotos] = useState([]);
    const [name, setName] = useState([])
    const addToLibrary = () => {
        axios.post("http://localhost:3003/photos/add", {photos: photos, name: name})
    }
  return (
    <div>
        <h1>Add to Library</h1>
        <input 
            type='file' 
            onChange={(event) => {
            setPhotos(event.target.value);
            }}
        />
        <input 
            type='text' 
            onChange={(event) => {
            setName(event.target.value);
            }}
        />
        <button onClick={addToLibrary}>add photo to Library</button>
        </div>
  )
}

export default Create