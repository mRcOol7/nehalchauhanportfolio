import React from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm z-50 border-b border-primary">
      <div className="container mx-auto px-content py-4 flex justify-between items-center">
        <div className="font-mono text-heading-2 text-primary dark:text-primary-dark">{"{ Portfolio }"}</div>
        <div className="flex items-center gap-8">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="font-mono text-body hover:text-primary dark:hover:text-primary-dark transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;