import React from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-content">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="font-mono text-heading-1 mb-6">
            {"<"}Creating Minimal & Functional Digital Experiences{"/>"}
          </h1>
          <p className="font-mono text-body text-gray-600 mb-8">
            Designer & Developer based in Digital Space
          </p>
          <div className="w-12 h-[1px] bg-black mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;