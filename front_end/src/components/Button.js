import React, { useState } from 'react'
import axios from 'axios'

const Button = ({ id, setUpdateName }) => {
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
            placeholder='Add New Name...' 
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
// const Button = () => {
//     // const handleChange = (e) => {
//     //     e.preventDefault();

//     // const formData = new FormData()
//     //     formData.append('photo', e.target.files[0])
//     //     // console.log(e.target.files[0].name);
//     // axios.delete('http://localhost:3003/photos', formData)
//     // .then((res) => {
//     //     console.log(res.data)
//     // })

//     // }
// const [newPhotoName, setNewPhotoName] = useState('')
// const updateName = (id) => {
//     axios.put('http://localhost:3003/photos/update', {id: id, newPhotoName:newPhotoName})
// }
//   return (
//     <div>
//         <form>
//             <input 
//                 type='text' 
//                 placeholder='Add New Name...' 
//                 onChange={(event) => {
//                     setNewPhotoName(event.target.value)
//                 }}
//                 style={{
//                     marginLeft: "auto",
//                     marginRight: "auto",
//                     marginLeft: "auto",
//                     display: "block",
//                     marginTop:'7px'
//                 }}/>
//             <button 
//                 type='text' 
//                 placeholder='edit'
//                 onClick={() => updateName(value._id)}
//                 style={{
//                     // width: "25%",
//                     // height:'15px',
//                     marginLeft: "auto",
//                     marginRight: "auto",
//                     marginTop:'7px',
//                     display: "block",
//                     fontSize:'14px'
//                 }}>
//                 change photo name</button>
//             <h/>
//             <button 
//                 type='text' 
//                 placeholder='edit'
//                 style={{
//                     // width: "25%",
//                     // height:'15px',
//                     marginLeft: "auto",
//                     marginRight: "auto",
//                     marginTop:'7px',
//                     display: "block",
//                     fontSize:'14px'
//                 }}>
//                 Delete</button>
//         </form>
//     </div>
         
//   )

export default Button