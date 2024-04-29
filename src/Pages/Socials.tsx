import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Footer from "./Footer";

function MainContent() {
  return (
    <main>
      <p>
        Twitter: <a href="https://example.com">[Placeholder Link]</a>
      </p>
      <p>
        Instagram: <a href="https://example.com">[Placeholder Link]</a>
      </p>
      <p>
        Linkedin:{" "}
        <a href="https://www.linkedin.com/in/noah-d-cbu/">
          [www.linkedin.com/in/noah-d-cbu/]
        </a>
      </p>
    </main>
  );
}

function SocialsPage() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default SocialsPage;
