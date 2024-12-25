import React, { useEffect } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/mRcOol7",
      icon: <Github className="w-6 h-6" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/nehal-chauhan19",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/nehal_chauhan19",
      icon: <Twitter className="w-6 h-6" />,
    },
    {
      name: "Email",
      url: "mailto:cnehal194@gmail.com",
      icon: <Mail className="w-6 h-6" />,
    },
  ];

  return (
    <section id="contact" className="py-section bg-grain-light dark:bg-grain-dark bg-cover bg-no-repeat relative overflow-hidden">
      {/* Content Container */}
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Heading */}
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl mb-8 text-primary dark:text-primary-dark"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {"// Get in Touch"}
          </h2>

          {/* Subtitle */}
          <p
            className="font-mono text-base sm:text-lg md:text-xl mb-8 text-foreground-light dark:text-foreground-dark"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Let's collaborate.
          </p>

          {/* Email Link */}
          <a
            href="mailto:cnehal194@gmail.com"
            className="inline-block border border-primary dark:border-primary-dark px-8 py-4 font-mono text-base sm:text-lg md:text-xl text-primary dark:text-primary-dark hover:bg-primary hover:text-secondary dark:hover:bg-primary-dark dark:hover:text-secondary-dark transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            cnehal194@gmail.com
          </a>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mt-12">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-primary dark:border-primary-dark rounded-full hover:bg-primary/10 dark:hover:bg-primary-dark/10 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay={500 + index * 100} // Staggered delay
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Vintage Scroll Effect */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Contact;