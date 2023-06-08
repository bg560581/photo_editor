import React, { useEffect, useState } from "react";
import axios from "axios";
import Show from "./Show";
import Make from "./Make";
import "./styles/css/style.css";

interface Photo {
  _id: number;
  name:string;
  image:any
}
export default function Photos() {
  const [photos, setPhotos] = useState<Photo[]>([]);
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
  }, []);
  return (
    <div>
      {photos && photos.map((photo) => {
        return <Show key={photo._id} photo={photo} />;
      })}
      <Make />
    </div>
    );
}
