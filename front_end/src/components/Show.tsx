import React, { useState } from "react";
// import "./photo.css"

import Edit from "./Edit";
import Photos from "./Photos";
import Delete from "./Delete";
import "./styles/css/style.css"

interface Photo {
  _id:number;
  name:string;
  image:any;
}

interface ShowProps {
  photo: Photo;
}

function Show({photo}:ShowProps) {
    const [updateName, setUpdateName] = useState(false);

  return (
    <div>
        
        <h1><a href={`${process.env.REACT_APP_SERVER_URL}/photos/${photo._id}`} >
          {photo.name}
        </a></h1>
        
        {/* <p> this will be where the editing is</p> */}
        <img src={photo.image} 
        id="image" 
        style={{
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block"
        }}/>
        

<Edit id={photo._id} setUpdateName={setUpdateName} />
<Delete id={photo._id} setUpdateName={setUpdateName} />
<hr />
</div>
  )
}

export default Show