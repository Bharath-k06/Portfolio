import React from "react";
import HeroSection from "../components/HeroSection";
import About from "./About";
import Project from "./Project";
import WaveDivider from "../components/WaveDivider";

const Home: React.FC = () => {
  return (

    <>
    <HeroSection/>
    <About/>
    <WaveDivider/>
    <Project/>
    </>
    
  );
};

export default Home;
