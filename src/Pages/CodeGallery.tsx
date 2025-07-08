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
    {
      src: "/images/BubbleBlog.png",
      title: "Simple Social Media Website",
      description:
        "This is a website that has a basic fontend-to-backend communication via Firebase/Firestore. The website allows for creating accounts, following, posts (including liking others' posts and deleting your own), as well as blocking and a report log.",
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
          className="thumb-bar"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "left",
            paddingBottom: "10px",
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
                border: "1px solid #304557",
                cursor: "pointer",
                padding: "0.5rem",
                textAlign: "center",
                backgroundImage:
                  "linear-gradient( #304557 0%, #4d8986 5%, #7eb4b1 10%, #b5d1d9 20%, #7eb4b1 90%, #4d8986 95%, #304557 100%)",
                textDecoration: "underline",
                fontWeight:
                  displayedItem.title === item.title ? "bold" : "normal",
              }}
            >
              {item.title}
            </div>
          ))}
        </div>

        <div
          className="full-img"
          style={{
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
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
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              maxWidth: "80vw", // matches your image width
              width: "100%",
              padding: "0 1rem", // optional: adds side padding for readability on mobile
            }}
          >
            {displayedItem.description}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CodePage;
