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

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm z-50 border-b border-primary/20 dark:border-primary-dark/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Terminal-style Logo */}
          <Link
            to="/"
            className="font-mono text-xl text-primary dark:text-primary-dark hover:text-primary/80 dark:hover:text-primary-dark/80 transition-colors duration-300"
          >
            <span className="text-primary/90 dark:text-primary-dark/90">$</span>
            <span className="text-primary dark:text-primary-dark ml-2">nehal</span>
            <span className="text-foreground-light/50 dark:text-foreground-dark/50">@</span>
            <span className="text-primary/80 dark:text-primary-dark/80">dev</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`font-mono text-base transition-all duration-300 group ${
                      activeSection === item.href.substring(1)
                        ? "text-primary dark:text-primary-dark"
                        : "text-foreground-light/70 dark:text-foreground-dark/70 hover:text-primary dark:hover:text-primary-dark"
                    }`}
                  >
                    <span className="text-primary/60 dark:text-primary-dark/60 mr-1">$</span>
                    {item.label}
                    <span className="block h-0.5 bg-primary/20 dark:bg-primary-dark/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-primary dark:text-primary-dark hover:text-primary/80 dark:hover:text-primary-dark/80 transition-all duration-300"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-primary dark:text-primary-dark hover:text-primary/80 dark:hover:text-primary-dark/80 transition-all duration-300"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-primary dark:text-primary-dark hover:text-primary/80 dark:hover:text-primary-dark/80 transition-all duration-300"
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
          <ul className="flex flex-col py-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`block py-2 px-4 font-mono text-base transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "text-primary dark:text-primary-dark bg-primary/5 dark:bg-primary-dark/5"
                      : "text-foreground-light/70 dark:text-foreground-dark/70 hover:text-primary dark:hover:text-primary-dark hover:bg-primary/5 dark:hover:bg-primary-dark/5"
                  }`}
                >
                  <span className="text-primary/60 dark:text-primary-dark/60 mr-1">$</span>
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