import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Vintage Architecture",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
      category: "Design",
      github: "https://github.com/username/project1",
      preview: "https://project1.demo",
    },
    {
      title: "Classic Workspace",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Development",
      github: "https://github.com/username/project2",
      preview: "https://project2.demo",
    },
    {
      title: "Retro Systems",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Technology",
      github: "https://github.com/username/project3",
      preview: "https://project3.demo",
    },
    {
      title: "Timeless Solutions",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Design",
      github: "https://github.com/username/project4",
      preview: "https://project4.demo",
    },
  ];

  return (
    <section id="work" className="py-section bg-grain">
      <div className="container mx-auto px-content">
        <h2 className="font-serif text-heading-2 mb-12 text-primary dark:text-primary-dark">{"// Selected Works"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative aspect-square overflow-hidden bg-secondary dark:bg-secondary-dark border border-primary dark:border-primary-dark hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background-dark/80 dark:bg-background-light/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="font-serif text-heading-2 mb-2 text-accent dark:text-accent-dark">{project.title}</h3>
                  <p className="font-mono text-body mb-4 text-accent dark:text-accent-dark">{project.category}</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary/20 dark:bg-primary-dark/20 rounded-full hover:bg-primary/40 dark:hover:bg-primary-dark/40 transition-colors duration-300"
                    >
                      <Github className="w-6 h-6 text-accent dark:text-accent-dark" />
                    </a>
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary/20 dark:bg-primary-dark/20 rounded-full hover:bg-primary/40 dark:hover:bg-primary-dark/40 transition-colors duration-300"
                    >
                      <ExternalLink className="w-6 h-6 text-accent dark:text-accent-dark" />
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