import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function GalleryPage() {
  const [displayedImage, setDisplayedImage] = useState("");

  // Array of image filenames
  const images = [
    "Summer Days, Drifting Away.png",
    "RenderVroid.png",
    "GET_A_MEDIC.png",
    "NadyeRaffleNoTwitHandle.png",
    "BirdLass.png",
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
              src={`src/assets/${image}`}
              alt={`Code ${index + 1}`}
              className="thumb-img"
              onClick={() => setDisplayedImage(`src/assets/${image}`)}
              style={{ maxWidth: "500%", maxHeight: "500%", cursor: "pointer" }}
            />
          ))}
        </div>
        <div className="full-img">
          <img
            src={displayedImage}
            alt="Displayed Image"
            className="displayed-img"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default GalleryPage;
