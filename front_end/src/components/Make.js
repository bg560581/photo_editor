import React, { useState } from "react";
import "./styles/css/style.css"
import axios from "axios";

function Make() {
  const [pic, setPic] = useState(null);
  const [name, setName] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleFileChange = (event) => {
    setPic(event.target.files[0]);
  };

  const handleSubmit = (event) => {
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
    window.location.reload(true)
}
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
      <input 
            type='text'
            className="form-control" 
            placeholder='Add New Name...' 
            onChange={handleNameChange}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginLeft: "auto",
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
