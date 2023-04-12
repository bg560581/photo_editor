import React, { useState } from "react";
import Button from "./Button";
import Photos from "./Photos";
import Delete from "./Delete";

function Show({photo}) {
    const [updateName, setUpdateName] = useState(false);

  return (
    <div>
        
        <h1><a href={`/photos/${Photos._id}`}>
          {photo.name}
        </a></h1>
        
        <p> this will be where the editing is</p>
        <img src={photo.image} style={{
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block"}} />

<Button id={photo._id} setUpdateName={setUpdateName} />
<Delete id={photo._id} setUpdateName={setUpdateName} />
</div>
  )
}

export default Show