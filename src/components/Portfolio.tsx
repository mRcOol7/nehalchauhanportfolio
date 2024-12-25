import React, { useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      title: "BMI Calculator",
      image: "https://i.ibb.co/bNxhc1T/React-App.png",
      category: "Technology",
      description: "A simple BMI calculator built with React,Node and Express",
      github: "https://github.com/mRcOol7/body-mass-index-cal",
      preview: "https://github.com/mRcOol7/body-mass-index-cal",
    },
    {
      title: "DNA Sequence",
      image: "https://i.ibb.co/fNK9jJ5/React-App-1.png",
      category: "Development",
      description: "A MERN stack application for DNA sequence analysis.",
      github: "https://github.com/MERN-bio-tool/DNA-sequence.git",
      preview: "https://github.com/MERN-bio-tool/DNA-sequence.git",
    },
    {
      title: "Watch Live Sports Online",
      image: "https://i.ibb.co/PD1ftNV/Watch-Live-Sports-Online-12-25-2024-01-22-PM.png",
      category: "Technology",
      description: "A live sports streaming platform built with HTML,CSS,JS",
      github: "https://live-sports-stream.vercel.app",
      preview: "https://live-sports-stream.vercel.app",
    },
  ];

  return (
    <section id="work" className="py-section bg-grain-light dark:bg-grain-dark bg-cover bg-no-repeat relative overflow-hidden">
      {/* Content Container */}
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
        {/* Section Heading */}
        <h2
          className="font-serif text-3xl sm:text-4xl md:text-5xl mb-12 text-primary dark:text-primary-dark font-bold text-left"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          {"// Projects"}
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative aspect-square overflow-hidden bg-secondary/50 dark:bg-secondary-dark/50 border border-primary/20 dark:border-primary-dark/20 hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Project Overlay */}
              <div className="absolute inset-0 bg-background-light/95 dark:bg-background-dark/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-6">
                  {/* Project Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl mb-2 text-primary dark:text-primary-dark font-semibold">
                    {project.title}
                  </h3>

                  {/* Project Category */}
                  <p className="font-mono text-base sm:text-lg mb-2 text-foreground-light dark:text-foreground-dark opacity-90">
                    {project.category}
                  </p>

                  {/* Project Description */}
                  <p className="font-mono text-sm sm:text-base mb-4 text-foreground-light dark:text-foreground-dark">
                    {project.description}
                  </p>

                  {/* Project Links */}
                  <div className="flex justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary/10 dark:bg-primary-dark/10 rounded-full hover:bg-primary/20 dark:hover:bg-primary-dark/20 transition-colors duration-300"
                    >
                      <Github className="w-6 h-6 text-primary dark:text-primary-dark" />
                    </a>
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary/10 dark:bg-primary-dark/10 rounded-full hover:bg-primary/20 dark:hover:bg-primary-dark/20 transition-colors duration-300"
                    >
                      <ExternalLink className="w-6 h-6 text-primary dark:text-primary-dark" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;