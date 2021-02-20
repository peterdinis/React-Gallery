import React, { useState, useEffect } from "react";
import "../pages/GalleryPage.scss";

function PhotoSearch() {
  const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
  const [photos, setPhotos] = useState([]);

  const loadPhotos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPhotos(data);
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  return (
    <div>
      <div className="searching">
        {photos.map((photo) => (
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <h3 className='header-title'>{photo.title}</h3>
                <img src={photo.url} className="image" />
                <p className="text">{photo.id}</p>
              </div>
              <div className="col-sm">
                <h3 className='header-title'>{photo.title}</h3>
                <img src={photo.url} className="image" />
                <p className="text">{photo.id}</p>
              </div>
              <div className="col-sm">
                <h3 className='header-title'>{photo.title}</h3>
                <img src={photo.url} className="image" />
                <p className="text">{photo.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoSearch;
