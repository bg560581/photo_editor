import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Show from "./Show";
import Create from "./Create";
import Build from "./Build";
import Button from "./Button"

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
    <fragment>
        {photos.map((photo) => {
            return (
                <Show photo={photo}/> 
                )
            })}
            <Create />
            {/* <Build /> */}
    </fragment>
  )

}
