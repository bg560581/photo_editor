import React, { useEffect, useState} from 'react'
import axios from 'axios'
import "./styles/css/style.css"


interface DeleteProps {
  id:number;
  setUpdateName: React.Dispatch<React.SetStateAction<boolean>>;

}

const Delete: React.FC<DeleteProps> = ( {id } ) => {
  const [photo, setPhoto] = useState<string | null>(null)
    
  const deletePhoto = () => {
  
        axios.delete(`http://localhost:3003/photos/${id}`)
        .then(() => setPhoto('delete successful!'));
      }
  return (
    <div>
      <form>
      <button 
            type='button' 
            placeholder='edit'
            onClick={() => deletePhoto()}
            style={{
              // width: "25%",
              // height:'15px',
              marginLeft: "auto",
              marginRight: "auto",
              marginTop:'7px',
              display: "block",
              fontSize:'14px'
            }}>
            Delete
          </button>
      </form>
    </div>
  )
}
export default Delete;