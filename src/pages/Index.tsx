import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark">
      <SpeedInsights/>
      <Analytics/>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;