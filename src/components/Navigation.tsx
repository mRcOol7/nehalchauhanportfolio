import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-black">
      <div className="container mx-auto px-content py-4 flex justify-between items-center">
        <div className="font-mono text-heading-2">Portfolio</div>
        <ul className="flex gap-8">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="font-mono text-body hover:text-accent-foreground transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;