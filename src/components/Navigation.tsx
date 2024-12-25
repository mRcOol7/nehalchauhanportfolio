import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm z-50 border-b border-primary/20 dark:border-primary-dark/20">
      <div className="container mx-auto px-content py-4">
        <div className="flex justify-between items-center">
          <div className="font-serif text-heading-2 text-primary dark:text-primary-dark animate-fade-in relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary/20 dark:after:bg-primary-dark/20 after:bottom-0 after:left-0 after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">
            {"{ Portfolio }"}
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`font-mono text-body transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300 ${
                      activeSection === item.href.substring(1)
                        ? "text-primary dark:text-primary-dark after:scale-x-100"
                        : "text-foreground-light dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark after:bg-primary dark:after:bg-primary-dark"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 dark:bg-primary-dark/10 dark:hover:bg-primary-dark/20 transition-colors duration-300 animate-theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-primary-dark" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 dark:bg-primary-dark/10 dark:hover:bg-primary-dark/20 transition-colors duration-300"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-primary-dark" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-primary dark:text-primary-dark"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
            isMenuOpen ? "top-full opacity-100" : "-top-96 opacity-0"
          }`}
        >
          <ul className="flex flex-col py-4">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`block py-3 px-content font-mono text-body transition-colors duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "text-primary dark:text-primary-dark bg-primary/10 dark:bg-primary-dark/10"
                      : "text-foreground-light dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark hover:bg-primary/5 dark:hover:bg-primary-dark/5"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;