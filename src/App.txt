import React, { StrictMode } from "react";

import { Router, Route } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";

import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import GalleryPage from "./Pages/ArtGallery";
import SocialsPage from "./Pages/Socials";

import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
