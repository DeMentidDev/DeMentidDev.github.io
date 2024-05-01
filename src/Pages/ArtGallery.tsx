import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function GalleryPage() {
  const [displayedImage, setDisplayedImage] = useState("");

  // Array of image filenames
  const images = [
    "Summer Days, Drifting Away.png",
    "VRoidRender.png",
    "Fritter.png",
    "Structor.png",
    "Fiasco.png",
  ];

  return (
    <div>
      <Header />
      <main>
        <h2>Artwork and Modeling</h2>
        <div className="thumb-bar">
          {images.map((image, index) => (
            <img
              key={index}
              src={`images/${image}`}
              alt={`Code ${index + 1}`}
              className="thumb-img"
              onClick={() => setDisplayedImage(`images/${image}`)}
              style={{ maxWidth: "100%", height: "auto", cursor: "pointer" }}
            />
          ))}
        </div>
        <div className="full-img">
          <img
            src={displayedImage}
            alt="Displayed Image"
            className="displayed-img"
            style={{ maxWidth: "200%", height: "auto" }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default GalleryPage;
