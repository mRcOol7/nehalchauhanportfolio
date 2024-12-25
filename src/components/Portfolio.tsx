import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Vintage Architecture",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
      category: "Design",
    },
    {
      title: "Classic Workspace",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Development",
    },
    {
      title: "Retro Systems",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Technology",
    },
    {
      title: "Timeless Solutions",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Design",
    },
  ];

  return (
    <section id="work" className="py-section bg-grain">
      <div className="container mx-auto px-content">
        <h2 className="font-serif text-heading-2 mb-12 text-primary dark:text-primary-dark">{"// Selected Works"}</h2>
        <div className="grid grid-cols-portfolio gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative aspect-square overflow-hidden bg-secondary dark:bg-secondary-dark border border-primary dark:border-primary-dark"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background-dark/80 dark:bg-background-light/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-heading-2 mb-2 text-accent dark:text-accent-dark">{project.title}</h3>
                  <p className="font-mono text-body text-accent dark:text-accent-dark">{project.category}</p>
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