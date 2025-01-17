import React from "react";
import '../pages/css/gallery.css';
import picArray from "../blog-data.json"

export default function GalleryComponent({picArray}) {
  
  return (
    <>
      <body className="gallery">
        <div className="gallery-container">
          {picArray.map(pic=>{
            return (
              <div className="gallery-box">
                <img className="image" src={pic.url} alt={pic.alt} />
              </div>
            )
          })}
        </div>
      </body>
    </>
  );
}
