// src/Root.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./app/components/Navbar";
import Home from "./app/pages/Home";
import About from "./app/pages/About";
import Contact from "./app/pages/Contact";
import Project from "./app/pages/Project";
import ParticleBackground from "./app/components/ParticleBackground";
import Footer from "./app/components/Footer";

const Root = () => {
  return (
    <BrowserRouter basename="/Portfolio"> {/* Ensure basename is correct */}
      <ParticleBackground/> {/* Background element */}
      <Navbar /> {/* Fixed/Sticky Navbar */}
      <Routes>
        {/* Define routes for your pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer/> {/* Footer at the bottom */}
    </BrowserRouter>
  );
};

export default Root;