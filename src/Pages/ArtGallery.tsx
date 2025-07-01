import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function GalleryPage() {
  const galleryItems = [
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
      title: "Fiasco, the Raptor",
      src: "https://sketchfab.com/models/2fdfa63f5ac7485eba7a6e1211e70423/embed",
      thumbnail: "images/Fiasco.png",
    },
    { type: "image", src: "images/Fritter.png" },
    { type: "image", src: "images/Structor.png" },
  ];

  const [displayedItem, setDisplayedItem] = useState(galleryItems[0]);

  return (
    <div>
      <Header />
      <main>
        <h2>Artwork and Modeling</h2>

        <div
          className="full-img"
          style={{
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          {displayedItem.type === "image" ? (
            <img
              src={displayedItem.src}
              alt="Displayed"
              className="displayed-img"
              style={{
                width: "80vw",
                maxWidth: "600px",
                minWidth: "250px",
                height: "auto",
              }}
            />
          ) : (
            <iframe
              title={displayedItem.title}
              src={displayedItem.src}
              frameBorder="0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              style={{
                width: "80vw",
                maxWidth: "600px",
                minWidth: "250px",
                height: "80vw",
                maxHeight: "600px",
                minHeight: "250px",
              }}
            ></iframe>
          )}
        </div>

        <div
          className="thumb-bar"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setDisplayedItem(item)}
              style={{
                width: "20vw",
                maxWidth: "100px",
                minWidth: "50px",
                height: "auto",
                border: "1px solid #ccc",
                background: item.type === "image" ? "transparent" : "#eee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              {item.thumbnail ? (
                <img
                  src={item.thumbnail}
                  alt={item.title || `Item ${index + 1}`}
                  style={{ width: "100%", height: "auto" }}
                />
              ) : item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Item ${index + 1}`}
                  style={{ width: "100%", height: "auto" }}
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
