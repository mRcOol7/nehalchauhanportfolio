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
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary dark:border-primary-dark shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src="https://i.ibb.co/RjgY0Pn/IMG-7601.jpg" // Replace with your profile image URL
              alt="Nehal Chauhan"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            {/* Section Heading */}
            <h2
              className="font-serif text-3xl sm:text-4xl md:text-5xl mb-8 text-primary dark:text-primary-dark text-left"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              {"// About"}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6">
              {/* Paragraph 1 */}
              <p
                className="font-mono text-base sm:text-lg md:text-xl text-foreground-light dark:text-foreground-dark leading-relaxed text-left"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Greetings! I'm an aspiring Computer Science and Engineering student at Parul University, with a keen interest in technology and web development. Proficient in HTML, CSS, JavaScript, and familiar with React and MongoDB, I'm committed to crafting innovative solutions and embracing new challenges in the digital realm.
              </p>

              {/* Paragraph 2 */}
              <p
                className="font-mono text-base sm:text-lg md:text-xl text-foreground-light dark:text-foreground-dark leading-relaxed text-left"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                My academic and project work spans from augmented reality lens creation to ethical hacking, underpinned by a passion for continuous learning and cybersecurity.
              </p>

              {/* Paragraph 3 */}
              <p
                className="font-mono text-base sm:text-lg md:text-xl text-foreground-light dark:text-foreground-dark leading-relaxed text-left"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Outside of tech, my world orbits around sports, where I draw inspiration and resilience from cricket, football, tennis, F1 racing, and kabaddi.
              </p>

              {/* Paragraph 4 */}
              <p
                className="font-mono text-base sm:text-lg md:text-xl text-foreground-light dark:text-foreground-dark leading-relaxed text-left"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                Welcome to my portfolio. Dive in to explore how I blend creativity with technical prowess to drive meaningful digital innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;