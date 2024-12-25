import React from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-grain">
      <div className="container mx-auto px-content">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="font-serif text-heading-1 mb-6 text-primary dark:text-primary-dark">
            {"<"}Crafting Digital Experiences with Vintage Elegance{"/>"}
          </h1>
          <p className="font-mono text-body text-foreground-light dark:text-foreground-dark mb-8">
            Developer & Designer | Est. Digital Era
          </p>
          <div className="w-12 h-[1px] bg-primary dark:bg-primary-dark mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;