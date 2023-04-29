import React, { useEffect, useState} from 'react'
import axios from 'axios'
import "./photo.css"


export default function Delete({ id }) {
  const [photo, setPhoto] = useState(null)
    
  const deletePhoto = () => {
  
        axios.delete(`http://localhost:3003/photos/${id}`)
        .then(() => setPhoto('delete successful!'));
      }
  return (
    <div>
      <form>
      <button 
            type='text' 
            placeholder='edit'
            onClick={() => deletePhoto(id)}
            style={{
              // width: "25%",
              // height:'15px',
              marginLeft: "auto",
              marginRight: "auto",
              marginTop:'7px',
              display: "block",
              fontSize:'14px'
            }}
          >
            Delete
          </button>
      </form>
    </div>
  )
}
