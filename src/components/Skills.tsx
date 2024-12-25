import React, { useEffect } from "react";
import { Code2, Palette, Database, Layout } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skills = [
    {
      category: "Frontend Development",
      icon: <Layout className="w-8 h-8 text-primary/90 dark:text-primary-dark" />,
      items: ["HTML", "CSS", "React", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Backend Development",
      icon: <Database className="w-8 h-8 text-primary/90 dark:text-primary-dark" />,
      items: ["Node.js", "MONGODB", "SUPABASE"],
    },
    {
      category: "Programming Languages",
      icon: <Code2 className="w-8 h-8 text-primary/90 dark:text-primary-dark" />,
      items: ["JavaScript", "SQL"],
    },
  ];

  return (
    <section id="skills" className="py-section bg-grain-light dark:bg-grain-dark bg-cover bg-no-repeat relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary/5 dark:bg-primary-dark/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-primary/5 dark:bg-primary-dark/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
        {/* Section Heading */}
        <h2
          className="font-serif text-3xl sm:text-4xl md:text-5xl mb-12 text-primary dark:text-primary-dark font-bold text-left"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          {"// Technical Skills"}
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group p-6 border border-primary/20 dark:border-primary-dark/20 bg-secondary/50 dark:bg-secondary-dark/50 hover:shadow-xl transition-all duration-300 hover:border-primary/40 dark:hover:border-primary-dark/40"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              <div className="flex flex-col items-center text-center">
                {/* Skill Icon */}
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>

                {/* Skill Category */}
                <h3 className="font-serif text-lg mb-4 text-primary dark:text-primary-dark font-semibold">
                  {skill.category}
                </h3>

                {/* Skill Items */}
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-sm text-foreground-light dark:text-foreground-dark opacity-90"
                    >
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