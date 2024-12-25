import React from "react";
import { Code2, Palette, Database, Layout } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Layout className="w-8 h-8" />,
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Backend Development",
      icon: <Database className="w-8 h-8" />,
      items: ["Node.js", "Python", "PostgreSQL", "REST APIs"],
    },
    {
      category: "Programming Languages",
      icon: <Code2 className="w-8 h-8" />,
      items: ["JavaScript", "Python", "TypeScript", "SQL"],
    },
    {
      category: "Design Tools",
      icon: <Palette className="w-8 h-8" />,
      items: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
    },
  ];

  return (
    <section id="skills" className="py-section bg-grain">
      <div className="container mx-auto px-content">
        <h2 className="font-serif text-heading-2 mb-12 text-primary dark:text-primary-dark">{"// Technical Skills"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="p-6 border border-primary dark:border-primary-dark bg-secondary/50 dark:bg-secondary-dark/50 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-primary dark:text-primary-dark">{skill.icon}</div>
                <h3 className="font-serif text-lg mb-4 text-primary dark:text-primary-dark">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="font-mono text-sm text-foreground-light dark:text-foreground-dark">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;