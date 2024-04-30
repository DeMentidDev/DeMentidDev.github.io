import Header from "./Header";
import Footer from "./Footer";

function MainContent() {
  return (
    <main>
      <h2>So you've found my little abode...</h2>
      <p>
        Glad to see you here! I'm sure you're probably looking for a means to
        see my prior experience, or commission me, be it my services in software
        engineering or even some artwork. That being said, you've come to the
        right place! I'm Noah DeMent.
      </p>
      <h1>
        <blockquote>
          "When life gets hard, that usually means you leveled up."
        </blockquote>
      </h1>
      <div className="sketchfab-embed-wrapper">
        <iframe
          title="AxolotlMascot"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          width="480"
          height="360"
          src="https://sketchfab.com/models/3b95672cf52545fca9943b87f04bdf92/embed"
        ></iframe>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "normal",
            margin: "5px",
            color: "#4A4A4A",
          }}
        >
          <a
            href="https://sketchfab.com/3d-models/axolotlmascot-3b95672cf52545fca9943b87f04bdf92?utm_medium=embed&utm_campaign=share-popup&utm_content=3b95672cf52545fca9943b87f04bdf92"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            AxolotlMascot
          </a>{" "}
          by{" "}
          <a
            href="https://sketchfab.com/Haxolotl?utm_medium=embed&utm_campaign=share-popup&utm_content=3b95672cf52545fca9943b87f04bdf92"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            Haxolotl
          </a>{" "}
          on{" "}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=3b95672cf52545fca9943b87f04bdf92"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
          >
            Sketchfab
          </a>
        </p>
      </div>
    </main>
  );
}

function HomePage() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default HomePage;
