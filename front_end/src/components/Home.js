import React, { useEffect, useState} from "react";
import axios from "axios";
import Show from "./components/Show.js";

export default function Home() {
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
  }, []);
  return (
    <div>
      
      <h1>Library</h1>
      <ul>
        <li>{photos.map((photo) => (
          <Show photo={photo} />
        ))}
        </li>
      </ul>
    </div>
  );
}