import React from "react";

const About = () => {
  return (
    <section id="about" className="py-section bg-accent">
      <div className="container mx-auto px-content">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-mono text-heading-2 mb-8">{"// About"}</h2>
          <p className="font-mono text-body mb-6">
            I'm a designer and developer focused on creating clean, user-friendly
            experiences. With a minimalist approach, I strive to make digital
            products that are both beautiful and functional.
          </p>
          <p className="font-mono text-body">
            My work is guided by the principle that less is more. Every element
            serves a purpose, and every interaction is intentional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;