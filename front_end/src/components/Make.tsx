import React, { useState } from "react";
import "./styles/css/style.css"
import axios from "axios";

function Make() {
  const [pic, setPic] = useState('');
  const [name, setName] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value[0];
    setName(name);
  };


const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      let imageUrl:any
      imageUrl = reader.result;
      setPic(imageUrl);
    };
    reader.readAsDataURL(file);
  }
};


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    refreshPage()

    const formData = new FormData();
    formData.append("name", name);
    formData.append("pic", pic);

    axios
      .post("http://localhost:3003/photos/", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function refreshPage(){
    window.location.reload()
}
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
      <input 
            type='text'
            className="form-control" 
            placeholder='Add New Name...' 
            onChange={handleNameChange}
            name="name"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
              marginTop:'7px'
            }}
          />
        <label htmlFor="file-input"/>
        <input
          placeholder='Add Picture...' 
          className="form-control"
          type="pic"
          id="pic"
          name="pic"
          onChange={handleFileChange}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Upload
      </button>
    </form>
  );
}

export default Make;
