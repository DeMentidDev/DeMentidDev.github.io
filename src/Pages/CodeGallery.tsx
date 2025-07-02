import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function CodePage() {
  const galleryItems = [
    { src: "/images/Predictor.jpg" },
  ];

  const [displayedItem, setDisplayedItem] = useState(galleryItems[0]);

  return (
    <div>
      <Header />
      <main>
        <h2>Coding Projects</h2>

        <div
          className="full-img"
          style={{
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
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
                border: "1px solid #ccc",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              <img
                src={item.src}
                alt={`Thumbnail ${index + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CodePage;
