import React, { useEffect } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      icon: <Github className="w-6 h-6 text-primary/90 dark:text-primary-dark" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/nehal-chauhan19",
      icon: <Linkedin className="w-6 h-6 text-primary/90 dark:text-primary-dark" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/nehal_chauhan19",
      icon: <Twitter className="w-6 h-6 text-primary/90 dark:text-primary-dark" />,
    },
    {
      name: "Email",
      url: "mailto:cnehal194@gmail.com",
      icon: <Mail className="w-6 h-6 text-primary/90 dark:text-primary-dark" />,
    },
  ];

  return (
    <section id="contact" className="py-section bg-grain-light dark:bg-grain-dark bg-cover bg-no-repeat relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary/5 dark:bg-primary-dark/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-primary/5 dark:bg-primary-dark/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Heading */}
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl mb-8 text-primary dark:text-primary-dark font-bold"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {"// Get in Touch"}
          </h2>

          {/* Subtitle */}
          <p
            className="font-mono text-base sm:text-lg md:text-xl mb-8 text-foreground-light dark:text-foreground-dark opacity-90"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Let's collaborate.
          </p>

          {/* Email Link */}
          <a
            href="mailto:cnehal194@gmail.com"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-mono text-base sm:text-lg md:text-xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="absolute inset-0 border-2 border-primary/80 dark:border-primary-dark rounded-sm"></div>
            <div className="absolute inset-0 bg-primary/90 dark:bg-primary-dark transform origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 scale-x-0"></div>
            <span className="relative z-10 text-primary/90 dark:text-primary-dark group-hover:text-background/90 dark:group-hover:text-background-dark transition-colors duration-300">
              cnehal194@gmail.com
            </span>
          </a>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mt-12">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 border-2 border-primary/20 dark:border-primary-dark/20 rounded-full hover:border-primary/40 dark:hover:border-primary-dark/40 hover:bg-primary/10 dark:hover:bg-primary-dark/10 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={500 + index * 100}
                aria-label={link.name}
              >
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Vintage Scroll Effect */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background/80 to-transparent"></div>
    </section>
  );
};

export default Contact;