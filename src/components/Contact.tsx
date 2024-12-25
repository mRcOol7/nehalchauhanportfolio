import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-section">
      <div className="container mx-auto px-content">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-heading-2 mb-8">Get in Touch</h2>
          <p className="text-body mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-block border border-black px-8 py-4 text-body hover:bg-black hover:text-white transition-colors duration-300"
          >
            hello@example.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;