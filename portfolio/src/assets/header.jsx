import React, { useState } from "react";

export default function PortfolioHeader() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white/10 backdrop-blur-md rounded-full shadow-2xl px-8 py-4 flex items-center justify-center gap-8 border border-white/20">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => setActiveSection(section.id)}
          className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-center ${
            activeSection === section.id
              ? "bg-white/20 text-white shadow-lg backdrop-blur-sm"
              : "text-white/80 hover:bg-white/10"
          }`}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
}
