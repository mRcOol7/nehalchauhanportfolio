import React from "react";

const About = () => {
  return (
    <section id="about" className="py-section bg-secondary/50 dark:bg-secondary-dark/50 bg-grain">
      <div className="container mx-auto px-content">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-heading-2 mb-8 text-primary dark:text-primary-dark">{"// About"}</h2>
          <p className="font-mono text-body mb-6 text-foreground-light dark:text-foreground-dark">
            I'm a developer with a passion for blending classic design principles
            with modern technology. My approach combines timeless aesthetics with
            contemporary functionality.
          </p>
          <p className="font-mono text-body text-foreground-light dark:text-foreground-dark">
            Every line of code is crafted with precision, every pixel placed with purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;