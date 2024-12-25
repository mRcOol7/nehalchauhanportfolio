import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;