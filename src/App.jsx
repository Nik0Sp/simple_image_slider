import React, { useState } from "react";
import Picture1 from "./images/picture1.png";
import Picture2 from "./images/picture2.png";
import Picture3 from "./images/picture3.png";
import Picture4 from "./images/picture4.png";

function App() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [Picture1, Picture2, Picture3, Picture4];

  const next = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const back = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="section">
      <h1 className="title">Simple Image Slider</h1>
      <div className="container glass">
        <div className="image-container">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className={index === activeImageIndex ? "active" : ""}
            />
          ))}
        </div>

        <button id="back" onClick={back}>
          back
        </button>
        <button id="next" onClick={next}>
          next
        </button>
      </div>
    </div>
  );
}

export default App;
