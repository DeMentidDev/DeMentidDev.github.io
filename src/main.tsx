import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import GalleryPage from "./Pages/ArtGallery";
import SocialsPage from "./Pages/Socials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "gallery",
    element: <GalleryPage />,
  },
  {
    path: "socials",
    element: <SocialsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
