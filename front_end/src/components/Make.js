import React, { useState } from "react";
import './photo.css'
import axios from "axios";

function Make() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    refreshPage()

    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);

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
        <label htmlFor="file-input">Choose a file:</label>
        <input
          className="form-control"
          type="file"
          id="file-input"
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
