import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons for hamburger

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false); // Close mobile menu on click
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-900/80 shadow-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-lg font-semibold">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-cyan-400 transition-all duration-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-pink-400 transition-all duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-violet-400 transition-all duration-300"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("stack")}
            className="hover:text-red-400 transition-all duration-300"
          >
            My Stack
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-yellow-400 transition-all duration-300"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-lg font-medium bg-gray-900/90">
          <button
            onClick={() => handleNavClick("home")}
            className="hover:text-cyan-400"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className="hover:text-pink-400"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("projects")}
            className="hover:text-violet-400"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick("stack")}
            className="hover:text-red-400"
          >
            My Stack
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="hover:text-yellow-400"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
