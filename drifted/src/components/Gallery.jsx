import React from "react";
import '../pages/css/gallery.css';
import "../blog-data.json"

export default function GalleryComponent({ 
  pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic11, pic12, pic13, 
  pic14, pic15, pic16, pic17, pic18, pic19, pic20
}) {
  
  return (
    <>
      <body className="gallery">
        <div className="gallery-container">
          <div className="gallery-box">
            <img className="image" src={pic2.url} alt={pic2.alt} />
            <div className="image-name">{pic2.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic3.url} alt={pic3.alt} />
            <div className="image-name">{pic3.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic4.url} alt={pic4.alt} />
            <div className="image-name">{pic4.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic5.url} alt={pic5.alt} />
            <div className="image-name">{pic5.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic6.url} alt={pic6.alt} />
            <div className="image-name">{pic6.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic7.url} alt={pic7.alt} />
            <div className="image-name">{pic7.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic8.url} alt={pic8.alt} />
            <div className="image-name">{pic8.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic9.url} alt={pic9.alt} />
            <div className="image-name">{pic9.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic11.url} alt={pic11.alt} />
            <div className="image-name">{pic11.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic12.url} alt={pic12.alt} />
            <div className="image-name">{pic12.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic13.url} alt={pic13.alt} />
            <div className="image-name">{pic13.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic14.url} alt={pic14.alt} />
            <div className="image-name">{pic14.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic15.url} alt={pic15.alt} />
            <div className="image-name">{pic15.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic16.url} alt={pic16.alt} />
            <div className="image-name">{pic16.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic17.url} alt={pic17.alt} />
            <div className="image-name">{pic17.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic18.url} alt={pic18.alt} />
            <div className="image-name">{pic18.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic19.url} alt={pic19.alt} />
            <div className="image-name">{pic19.name}</div>
          </div>
          <div className="gallery-box">
            <img className="image" src={pic20.url} alt={pic20.alt} />
            <div className="image-name">{pic20.name}</div>
          </div>
        </div>
      </body>
    </>
  );
}
