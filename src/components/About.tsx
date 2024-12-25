import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="py-section bg-secondary/50 dark:bg-secondary-dark/50 bg-grain-light dark:bg-grain-dark bg-cover bg-no-repeat relative overflow-hidden">
      {/* Content Container */}
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div
            className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 relative rounded-full overflow-hidden border-4 border-primary dark:border-primary-dark shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="w-full h-full absolute inset-0">
              <img
                src="https://i.ibb.co/RjgY0Pn/IMG-7601.jpg"
                alt="Nehal Chauhan"
                className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-300"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            {/* Section Heading */}
            <h2
              className="font-serif text-3xl sm:text-4xl md:text-5xl mb-8 text-primary dark:text-primary-dark text-left relative inline-block"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <span className="relative z-10">{"// About"}</span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-primary/30 dark:bg-primary-dark/30 transform -skew-x-12 blur-[1px]"></div>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6">
              {/* Paragraph 1 - Education & Skills */}
              <div
                className="group font-mono text-base sm:text-lg md:text-xl text-foreground-light dark:text-foreground-dark leading-relaxed text-left p-6 rounded-lg hover:bg-primary/5 dark:hover:bg-primary-dark/5 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Greetings! I'm an aspiring <span className="relative inline-block">
                  <span className="relative z-10">Computer Science and Engineering student</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-300/40 dark:bg-yellow-300/30 -rotate-2 transform origin-bottom-left transition-all duration-300 group-hover:h-full group-hover:opacity-50"></span>
                </span> at Parul University, with a keen interest in technology and web development. Proficient in <span className="relative inline-block">
                  <span className="relative z-10">HTML, CSS, JavaScript</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-green-300/40 dark:bg-green-300/30 rotate-1 transform origin-bottom-right transition-all duration-300 group-hover:h-full group-hover:opacity-50"></span>
                </span>, and familiar with <span className="relative inline-block">
                  <span className="relative z-10">React and MongoDB</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-300/40 dark:bg-blue-300/30 -rotate-1 transform origin-bottom-left transition-all duration-300 group-hover:h-full group-hover:opacity-50"></span>
                </span>.
              </div>

              {/* Paragraph 2 - Projects */}
              <div
                className="group font-mono text-base sm:text-lg md:text-xl text-foreground-light dark:text-foreground-dark leading-relaxed text-left p-6 rounded-lg hover:bg-secondary/5 dark:hover:bg-secondary-dark/5 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                My academic and project work spans from <span className="relative inline-block">
                  <span className="relative z-10">augmented reality lens creation</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-pink-300/40 dark:bg-pink-300/30 rotate-1 transform origin-bottom-right transition-all duration-300 group-hover:h-full group-hover:opacity-50"></span>
                </span> to <span className="relative inline-block">
                  <span className="relative z-10">ethical hacking</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-300/40 dark:bg-purple-300/30 -rotate-2 transform origin-bottom-left transition-all duration-300 group-hover:h-full group-hover:opacity-50"></span>
                </span>.
              </div>

              {/* Paragraph 3 - Interests */}
              <div
                className="group font-mono text-base sm:text-lg md:text-xl text-foreground-light dark:text-foreground-dark leading-relaxed text-left p-6 rounded-lg hover:bg-primary/5 dark:hover:bg-primary-dark/5 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Outside of tech, my world orbits around sports, where I draw inspiration and resilience from <span className="relative inline-block">
                  <span className="relative z-10">cricket, football, tennis, F1 racing, and kabaddi</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-300/40 dark:bg-orange-300/30 rotate-1 transform origin-bottom-right transition-all duration-300 group-hover:h-full group-hover:opacity-50"></span>
                </span>.
              </div>

              {/* Paragraph 4 - Call to Action */}
              <div
                className="group font-mono text-base sm:text-lg md:text-xl text-foreground-light dark:text-foreground-dark leading-relaxed text-left p-6 rounded-lg hover:bg-secondary/5 dark:hover:bg-secondary-dark/5 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                Welcome to my portfolio. <span className="relative inline-block">
                  <span className="relative z-10">Dive in to explore how I blend creativity with technical prowess to drive meaningful digital innovation.</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-teal-300/40 dark:bg-teal-300/30 -rotate-1 transform origin-bottom-left transition-all duration-300 group-hover:h-full group-hover:opacity-50"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;