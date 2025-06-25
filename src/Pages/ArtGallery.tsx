import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function GalleryPage() {
  const galleryItems = [
    { type: "image", src: "images/Summer Days, Drifting Away.png" },
    { type: "image", src: "images/VRoidRender.png" },
    {
      type: "model",
      title: "Rowan, the Shadow Bone",
      src: "https://sketchfab.com/models/ea55ca18496c40f391825b79f54f1634/embed",
    },
    {
      type: "model",
      title: "Red, the Moth",
      src: "https://sketchfab.com/models/b4d568bb582947baa15741881f95fa8d/embed",
    },
    {
      type: "model",
      title: "Tial, the Space-Lizard",
      src: "https://sketchfab.com/models/2efe2a851d2d4420a29de5edfb51b01d/embed",
    },
    {
      type: "model",
      title: "Rowan, the Corvid Vessel",
      src: "https://sketchfab.com/models/1c649a62a95d47e190f0b54feeb6f53a/embed",
    },
    { type: "image", src: "images/Fritter.png" },
    { type: "image", src: "images/Structor.png" },
    { type: "image", src: "images/Fiasco.png" },
  ];

  const [displayedItem, setDisplayedItem] = useState(galleryItems[0]);

  return (
    <div>
      <Header />
      <main>
        <h2>Artwork and Modeling</h2>

        <div className="full-img" style={{ marginBottom: "2rem" }}>
          {displayedItem.type === "image" ? (
            <img
              src={displayedItem.src}
              alt="Displayed"
              className="displayed-img"
              style={{ width: "100%", height: "auto" }}
            />
          ) : (
            <iframe
              title={displayedItem.title}
              src={displayedItem.src}
              frameBorder="0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              style={{ width: "50em", height: "50em" }}
            ></iframe>
          )}
        </div>

        <div
          className="thumb-bar"
          style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
        >
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setDisplayedItem(item)}
              style={{
                width: "8em",
                height: "8em",
                border: "1px solid #ccc",
                background: item.type === "image" ? "transparent" : "#eee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Item ${index + 1}`}
                  style={{ Width: "100px", Height: "auto" }}
                />
              ) : (
                <span style={{ fontSize: "0.75em", textAlign: "center" }}>
                  3D Model
                  <br />
                  {item.title || "View"}
                </span>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default GalleryPage;
