import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";

function MainContent() {
  return (
    <main>
      <h2>So you've found my little abode...</h2>
      <p>
        Glad to see you here! I'm sure you're probably looking for a means to
        see my prior experience, or are looking to get something from me, be it
        my services in software engineering or even some artwork. That being
        said, you've come to the right place! I'm JOHN DOE, though most people
        just know me by Noah.
      </p>
      <h1>
        <blockquote>
          "When life gets hard, that usually means you leveled up."
        </blockquote>
      </h1>
      <ul>
        <p> </p>
        <li>
          Who exactly am I:
          <ul>
            <li>
              I'm a college student who also has a hobby for modeling in 3D.
            </li>
          </ul>
        </li>
        <li>
          As of right now, what experience do I have:
          <ul>
            <li>
              I'm currently in college for a bachelor's degree in software
              engineering, and I'm currently planning for an
              internship/volunteer work this summer.
            </li>
          </ul>
        </li>
        <li>
          Anything important to keep in mind:
          <ul>
            <li>
              I'm an autistic adult, diagnosed at an early age, though that
              shouldn't be a detriment to being able to work. If anything, it's
              made me even better of a worker.
            </li>
          </ul>
        </li>
      </ul>
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
          width="640"
          height="480"
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
