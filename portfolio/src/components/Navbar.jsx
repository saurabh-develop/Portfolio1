import React from "react";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    // Add delay before scrolling (e.g., 100ms)
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-900/80 shadow-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-10 text-lg font-semibold">
        <button
          onClick={() => scrollToSection("home")}
          className="hover:text-cyan-400 hover:drop-shadow-[0_0_6px_cyan] transition-all duration-300"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-pink-400 hover:drop-shadow-[0_0_6px_pink] transition-all duration-300"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="hover:text-violet-400 hover:drop-shadow-[0_0_6px_violet] transition-all duration-300"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("stack")}
          className="hover:text-red-400 hover:drop-shadow-[0_0_6px_red] transition-all duration-300"
        >
          My Stack
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="hover:text-yellow-400 hover:drop-shadow-[0_0_6px_yellow] transition-all duration-300"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
