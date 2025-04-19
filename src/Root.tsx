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
    <BrowserRouter basename="/Portfolio">
      <ParticleBackground/>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Root;
