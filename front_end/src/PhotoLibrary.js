import React from 'react';
import Gallery from './components/Gallery';
import Library from './components/Delete';
import Gallery from './components/Gallery';
function PhotoLibrary() {

  return (
    <div>
        <h1>PhotoLibrary</h1>
        {/* {photos.map(photo => (
            <img key={photo._id} src={photo.image} alt={photo.title}   />
        ))} */}
        <Library />
    </div>
  )
}

export default PhotoLibrary;