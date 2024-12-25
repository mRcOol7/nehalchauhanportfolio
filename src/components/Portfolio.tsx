import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Minimal Architecture",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
      category: "Design",
    },
    {
      title: "Tech Workspace",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Development",
    },
    {
      title: "Digital Systems",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Technology",
    },
    {
      title: "Modern Solutions",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Design",
    },
  ];

  return (
    <section id="work" className="py-section bg-accent">
      <div className="container mx-auto px-content">
        <h2 className="text-heading-2 mb-12">Selected Work</h2>
        <div className="grid grid-cols-portfolio gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative aspect-square overflow-hidden bg-white"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-heading-2 mb-2">{project.title}</h3>
                  <p className="text-body">{project.category}</p>
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