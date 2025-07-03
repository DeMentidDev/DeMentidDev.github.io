import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function CodePage() {
  const galleryItems = [
    {
      src: "/images/Predictor.jpg",
      title: "Game Series Sales Predictor",
      description:
        "This is the output of a machine learning predictor built in JupyterLab/Python, that analyzes input data and forecasts outcomes interpreted via the addon BeautifulSoup. This is also my first project that involves the use of data scraping.",
    },
    {
      src: "/images/Chatbot.png",
      title: "Lancer Chatbot",
      description:
        "This is a website that uses an advanced language interpreter via python that takes the user's questions, looks for entries within the campus' IRB handbook (the bot's source material), and outputs a passage that applies to the given keywords best. I worked on backend through MongoDB, and assisted my two other partners when it came to connecting the chatbot to the website's backend, as well as sending that backend data to the frontend (website).",
    },
    // Add more items here as needed
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
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontWeight: "bold",
            }}
          >
            {displayedItem.title}
          </h3>

          <img
            src={displayedItem.src}
            alt={displayedItem.title}
            className="displayed-img"
            style={{
              width: "80vw",
              maxWidth: "600px",
              minWidth: "250px",
              height: "auto",
            }}
          />

          <p
            style={{
              marginTop: "0.5rem",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "left",
            }}
          >
            {displayedItem.description}
          </p>
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
                maxWidth: "150px",
                minWidth: "100px",
                border: "1px solid #ccc",
                cursor: "pointer",
                padding: "0.5rem",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
                fontWeight:
                  displayedItem.title === item.title ? "bold" : "normal",
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CodePage;
