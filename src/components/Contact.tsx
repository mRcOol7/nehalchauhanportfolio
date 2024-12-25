import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-section bg-secondary/50 dark:bg-secondary-dark/50 bg-grain">
      <div className="container mx-auto px-content">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-heading-2 mb-8 text-primary dark:text-primary-dark">{"// Get in Touch"}</h2>
          <p className="font-mono text-body mb-8 text-foreground-light dark:text-foreground-dark">
            Let's collaborate on your next digital endeavor.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-block border border-primary dark:border-primary-dark px-8 py-4 font-mono text-body text-primary dark:text-primary-dark hover:bg-primary hover:text-secondary dark:hover:bg-primary-dark dark:hover:text-secondary-dark transition-colors duration-300"
          >
            hello@example.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;