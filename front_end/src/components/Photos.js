import React, { useEffect, useState } from "react";
import axios from "axios";
import Show from "./Show";
import Create from "./Create";

export default function Photos() {
  const [photos, setPhotos] = useState([]);
    useEffect(() => {
    axios
      .get("http://localhost:3003/photos")
      .then((response) => {
        console.log(response);
        setPhotos(response.data.photos);
        console.log(response.data.photos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])
  return(
    <div>
        {photos.map((photo) => (
            <Show photo={photo} />
            ))}
            <Create />
        
    </div>
  )

}
