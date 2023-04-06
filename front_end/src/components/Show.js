import React from "react";

function Show({photo}) {
  return (
    <div>
        
        <h1>{photo.name}</h1>
        <p> this will be where the editing is</p>
        <img src={photo.image} style={{
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block"}} />
</div>
  )
}

export default Show