import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Home from "../pages/visitor/Home";
import Timeline from "../pages/visitor/Timeline";
import Events from "../pages/visitor/Events";
import Gallery from "../pages/visitor/Gallery";
import Statistics from "../pages/visitor/Statistics";
import AlgeriaMap from "../pages/visitor/AlgeriaMap";
import About from "../pages/visitor/About";
import NotFound from "../pages/visitor/NotFound";

export default function VisitorRoutes() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/map" element={<AlgeriaMap />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
