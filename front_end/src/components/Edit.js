import React, { useState } from 'react'
import axios from 'axios'
import "./photo.css"


const Edit = ({ id, setUpdateName }) => {
    const [newPhotoName, setNewPhotoName] = useState('');
    const updateName = (event) => {
        event.preventDefault();
              axios.put(`http://localhost:3003/photos/${id}`, {
        id: id,
        newPhotoName: newPhotoName
      })
        .then(response => {
          setUpdateName(prevState => !prevState);
      })
        .catch(error => {
          console.log(error);
      })
    };

    function refreshPage(){
        window.location.reload(true)
    }

  
    return (
      <div>
        <form onSubmit={(event) => {
            event.preventDefault();
            updateName();
        }}>
          <input 
            type='text'
            className='name-edit' 
            placeholder='Change Name...' 
            onChange={(event) => {
                console.log("set")
              setNewPhotoName(event.target.value)
            }}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginLeft: "auto",
              display: "block",
              marginTop:'7px'
            }}

























































            
          />
          <button 
            type='text' 
            placeholder='edit'
            onClick={(event) => {
                console.log('update')
                updateName(event)
                refreshPage();
            }
            }
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
            change photo name
          </button>
          <h/>

        </form>
      </div>
    );
  };

export default Edit