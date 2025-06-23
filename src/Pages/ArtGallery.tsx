import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function GalleryPage() {
  // Array of image filenames
  const images = [
    "Summer Days, Drifting Away.png",
    "VRoidRender.png",
    "Fritter.png",
    "Structor.png",
    "Fiasco.png",
  ];

  // Set default displayed image to the first one
  const [displayedImage, setDisplayedImage] = useState(`images/${images[0]}`);

  return (
    <div>
      <Header />
      <main>
        <h2>Artwork and Modeling</h2>
        <p
          style={{
            paddingBottom: "120px",
          }}
        >
          <div className="full-img">
            <img
              src={displayedImage}
              alt="Displayed Image"
              className="displayed-img"
              style={{ width: "200%", height: "auto" }}
            />
          </div>
          <div className="thumb-bar">
            {images.map((image, index) => (
              <img
                key={index}
                src={`images/${image}`}
                alt={`Code ${index + 1}`}
                className="thumb-img"
                onClick={() => setDisplayedImage(`images/${image}`)}
                style={{
                  width: "auto",
                  height: "8em",
                  margin: "5px",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default GalleryPage;
