import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-grain-light dark:bg-grain-dark bg-cover bg-no-repeat relative overflow-hidden">
      {/* Vintage Scroll Effect */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Name Heading */}
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-primary dark:text-primary-dark"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {"<"}Nehal Chauhan{"/>"}
          </h1>

          {/* Subtitle */}
          <p
            className="font-mono text-base sm:text-lg md:text-xl text-foreground-light dark:text-foreground-dark mb-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Aspiring Computer Science and Engineering Student | Full Stack Developer
          </p>

          {/* Divider */}
          <div
            className="w-12 h-[1px] bg-primary dark:bg-primary-dark mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="600"
          ></div>

          {/* Call-to-Action Button */}
          <a
            href="#about"
            className="relative inline-block px-6 py-4 bg-background dark:bg-background-dark text-primary dark:text-primary-dark font-mono text-sm sm:text-base rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            {/* Grain Effect Overlay */}
            <div className="absolute inset-0 bg-grain-light dark:bg-grain-dark opacity-10"></div>
            <span className="relative z-10">Explore More</span>
          </a>
        </div>
      </div>

      {/* Vintage Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <div className="w-6 h-10 border border-primary dark:border-primary-dark rounded-full flex items-center justify-center">
          <div className="w-2 h-4 bg-primary dark:bg-primary-dark rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;