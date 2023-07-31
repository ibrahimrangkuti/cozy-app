import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen.jsx";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Calling from "./pages/Calling";
import NotFound from "./pages/NotFound";
import Map from "./pages/Map";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/calling" element={<Calling />} />
        <Route path="/map" element={<Map />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
