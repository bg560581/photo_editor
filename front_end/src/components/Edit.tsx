import React, { useState } from 'react'
import axios from 'axios'
import "./styles/css/style.css"

interface EditProps{
  id:number;
  setUpdateName: React.Dispatch<React.SetStateAction<boolean>>;

}
const Edit: React.FC<EditProps> = ({ id, setUpdateName }) => {
    const [newPhotoName, setNewPhotoName] = useState('');
    const updateName = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
              axios.put(`http://localhost:3003/photos/${id}`, {
        id: id,
        newPhotoName: newPhotoName
      })
        .then(_response => {
          setUpdateName(prevState => !prevState);
      })
        .catch(error => {
          console.log(error);
      })
    };

    function refreshPage(){
        window.location.reload()
    }

  
    return (
      <div>
        <form onSubmit={updateName}>
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
              display: "block",
              marginTop:'7px'
            }}
            
          />
          <button 
            type='submit' 
            placeholder='edit'
            onClick={() => {
                console.log('update')
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
        </form>
      </div>
    );
  };

export default Edit