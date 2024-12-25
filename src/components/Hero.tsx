import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-grain-light dark:bg-grain-dark bg-cover bg-no-repeat relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary/5 dark:bg-primary-dark/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-primary/5 dark:bg-primary-dark/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Vintage Scroll Effect */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background/80 to-transparent"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Name Heading with Typing Effect */}
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-primary dark:text-primary-dark typewriter"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {"<"}Nehal Chauhan{"/>"}
          </h1>

          {/* Subtitle with Gradient */}
          <p
            className="font-mono text-base sm:text-lg md:text-xl mb-8 text-foreground/90 dark:text-foreground-dark"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Aspiring Computer Science and Engineering Student | Full Stack Developer
          </p>

          {/* Animated Divider */}
          <div
            className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary/60 dark:via-primary-dark to-transparent mx-auto mb-8 animate-pulse"
            data-aos="fade-up"
            data-aos-delay="600"
          ></div>

          {/* Enhanced Call-to-Action Button */}
          <div className="flex justify-center gap-6" data-aos="fade-up" data-aos-delay="800">
            <a
              href="#about"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-mono text-sm sm:text-base overflow-hidden transition-all duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 border-2 border-primary/80 dark:border-primary-dark rounded-sm"></div>
              <div className="absolute inset-0 bg-primary/90 dark:bg-primary-dark transform origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 scale-x-0"></div>
              <span className="relative z-10 text-primary/90 dark:text-primary-dark group-hover:text-background/90 dark:group-hover:text-background-dark transition-colors duration-300">
                Explore More
              </span>
              <svg
                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-primary/90 dark:text-primary-dark group-hover:text-background/90 dark:group-hover:text-background-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform duration-300"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <div className="w-6 h-10 border-2 border-primary/70 dark:border-primary-dark rounded-full flex items-center justify-center p-1">
          <div className="w-2 h-2 bg-primary/70 dark:bg-primary-dark rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;