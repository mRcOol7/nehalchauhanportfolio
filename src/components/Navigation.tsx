import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = useMemo(() => [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're at the bottom of the page
      if (window.innerHeight + window.scrollY >= documentHeight - 50) {
        setActiveSection("contact");
        return;
      }

      // Otherwise, check each section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top - 100 && scrollPosition < top + height - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm z-50 border-b border-primary/20 dark:border-primary-dark/20">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with Link to Home */}
          <Link
            to="/"
            className="font-serif text-2xl sm:text-3xl text-primary/90 dark:text-primary-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-300 relative group"
          >
            <span className="relative z-10">{"{ Nehal }"}</span>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/20 dark:bg-primary-dark/20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </Link>

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
                    className={`font-mono text-base sm:text-lg transition-all duration-300 relative ${
                      activeSection === item.href.substring(1)
                        ? "text-primary/90 dark:text-primary-dark"
                        : "text-foreground-light/90 dark:text-foreground-dark hover:text-primary/90 dark:hover:text-primary-dark"
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary/20 dark:bg-primary-dark/20 transform origin-left transition-transform duration-300 ${
                      activeSection === item.href.substring(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}></div>
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 dark:bg-primary-dark/5 dark:hover:bg-primary-dark/10 transition-all duration-300 transform hover:scale-110"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-primary-dark" />
              ) : (
                <Moon className="w-5 h-5 text-primary/90" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 dark:bg-primary-dark/5 dark:hover:bg-primary-dark/10 transition-all duration-300 transform hover:scale-110"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-primary-dark" />
              ) : (
                <Moon className="w-5 h-5 text-primary/90" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-primary/90 dark:text-primary-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
            isMenuOpen ? "top-full opacity-100 translate-y-0" : "-top-96 opacity-0 -translate-y-10"
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
                  className={`block py-3 px-6 font-mono text-base sm:text-lg transition-all duration-300 relative ${
                    activeSection === item.href.substring(1)
                      ? "text-primary/90 dark:text-primary-dark bg-primary/5 dark:bg-primary-dark/5"
                      : "text-foreground-light/90 dark:text-foreground-dark hover:text-primary/90 dark:hover:text-primary-dark hover:bg-primary/5 dark:hover:bg-primary-dark/5"
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